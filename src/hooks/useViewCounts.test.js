import React from 'react'
import { render, act } from '@testing-library/react'

import { ViewCountProvider, useViewCounts } from './useViewCounts'
import * as hooks from './useLocalStorage'

// Mocking the useLocalStorage hook
jest.mock('./useLocalStorage')

describe('ViewCountProvider and useViewCounts', () => {
	afterEach(() => {
		jest.clearAllMocks()
	})

	it('provides correct initial values', () => {
		hooks.useLocalStorage.mockReturnValue([{ testUrl: 5 }, jest.fn()])

		const TestComponent = () => {
			const { views } = useViewCounts()
			return <div>{views.testUrl}</div>
		}

		const { getByText } = render(
			<ViewCountProvider>
				<TestComponent />
			</ViewCountProvider>
		)

		expect(getByText('5')).toBeInTheDocument()
	})

	it('incrementViewCount updates the view count correctly', () => {
		const setViewsMock = jest.fn()
		hooks.useLocalStorage.mockReturnValue([{ testUrl: 5 }, setViewsMock])

		const TestComponent = () => {
			const { incrementViewCount } = useViewCounts()
			return <button onClick={() => incrementViewCount('testUrl')}>Increment</button>
		}

		const { getByText } = render(
			<ViewCountProvider>
				<TestComponent />
			</ViewCountProvider>
		)

		act(() => {
			getByText('Increment').click()
		})

		expect(setViewsMock).toHaveBeenCalledWith({ testUrl: 6 })
	})
})
