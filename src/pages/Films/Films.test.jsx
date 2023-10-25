import React from 'react';
import { render } from '@testing-library/react';
import Films from './index';
import { useFetch } from '../../api/useFetch';

jest.mock('../../api/useFetch');
jest.mock('../../components/Dashboard', () => () => <div data-testid="dashboard-component" />);
jest.mock('../../components/Error', () => ({ message }) => <div data-testid="error-component">{message}</div>);
jest.mock('../../components/Loading', () => () => <div data-testid="loading-component" />);

describe('Films Component', () => {

  it('renders Loading component when loading', () => {
    useFetch.mockReturnValue({
      data: null,
      error: null,
      loading: true
    });

    const { getByTestId } = render(<Films />);
    expect(getByTestId('loading-component')).toBeInTheDocument();
  });

  it('renders Error component when there is an error', () => {
    const mockError = { message: "Failed to fetch" };
    useFetch.mockReturnValue({
      data: null,
      error: mockError,
      loading: false
    });

    const { getByTestId } = render(<Films />);
    expect(getByTestId('error-component')).toHaveTextContent(mockError.message);
  });

  it('renders Dashboard component with data when loading is done and no errors', () => {
    const mockData = {
      results: [
        {
          title: 'A New Hope',
          episode_id: 4,
          director: 'George Lucas',
          producer: 'Gary Kurtz, Rick McCallum',
          release_date: '1977-05-25'
        }
      ]
    };
    useFetch.mockReturnValue({
      data: mockData,
      error: null,
      loading: false
    });

    const { getByTestId } = render(<Films />);
    expect(getByTestId('dashboard-component')).toBeInTheDocument();
  });

});

