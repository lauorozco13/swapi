import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Favorites from './index'
import { useViewCounts } from '../../hooks/useViewCounts'

jest.mock('../../hooks/useViewCounts')

const mockData = {
	'http://example.com/1': 5,
	'http://example.com/2': 3
}

const renderWithTheme = (component) => {
	return render(<ThemeProvider theme={createTheme()}>{component}</ThemeProvider>)
}

describe('<Favorites />', () => {
	afterEach(() => {
		jest.resetAllMocks()
	})

	it('renders the Dashboard component with sorted data', () => {
		useViewCounts.mockReturnValue({
			views: mockData
		})

		const { getByText } = renderWithTheme(<Favorites />)

		expect(getByText('http://example.com/1')).toBeInTheDocument()
		expect(getByText('5')).toBeInTheDocument()

		expect(getByText('http://example.com/2')).toBeInTheDocument()
		expect(getByText('3')).toBeInTheDocument()
	})

	it('renders with empty data if views are not available', () => {
		useViewCounts.mockReturnValue({
			views: {}
		})

		const { queryByText } = renderWithTheme(<Favorites />)

		expect(queryByText('http://example.com/1')).toBeNull()
		expect(queryByText('5')).toBeNull()

		expect(queryByText('http://example.com/2')).toBeNull()
		expect(queryByText('3')).toBeNull()
	})
})
