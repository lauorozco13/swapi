import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles' // import the necessary modules
import Error from './index'

describe('Error component', () => {
	const renderWithTheme = (component) => {
		return render(<ThemeProvider theme={createTheme()}>{component}</ThemeProvider>)
	}

	it('renders without crashing', () => {
		renderWithTheme(<Error message="Test Error Message" />)
	})

	it('displays the default error message', () => {
		const { getByText } = renderWithTheme(<Error message="Test Error Message" />)
		expect(getByText('An error occurred!')).toBeInTheDocument()
	})

	it('displays the passed error message', () => {
		const { getByText } = renderWithTheme(<Error message="Test Error Message" />)
		expect(getByText('Test Error Message')).toBeInTheDocument()
	})
})
