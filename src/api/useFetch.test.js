import { renderHook, act } from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

global.fetch = jest.fn();

describe('useFetch', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('fetches data successfully', async () => {
    const mockData = { name: 'Luke Skywalker' };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData
    });

    const { result, waitForNextUpdate } = renderHook(() => useFetch('people/1/'));
    
    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.data).toEqual(mockData);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('handles server errors', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({ error: 'Not found' }),
    });

    const { result, waitForNextUpdate } = renderHook(() => useFetch('people/invalid/'));
    
    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.data).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(new Error('HTTP error! Status: 404'));
  });

  it('handles fetch exceptions', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    const { result, waitForNextUpdate } = renderHook(() => useFetch('people/1/'));

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.data).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(new Error('Network error'));
  });
});
