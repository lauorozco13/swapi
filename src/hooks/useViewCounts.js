import React, { createContext, useContext } from 'react'

import { useLocalStorage } from './useLocalStorage'

const ViewCountContext = createContext()

export function useViewCounts() {
	return useContext(ViewCountContext)
}

export const ViewCountProvider = ({ children }) => {
	const [views, setViews] = useLocalStorage('viewCounts', {})

	const incrementViewCount = (url) => {
		const updatedViews = { ...views }

		if (!updatedViews[url]) {
			updatedViews[url] = 1
		} else {
			updatedViews[url] += 1
		}

		setViews(updatedViews)
	}

	return (
		<ViewCountContext.Provider value={{ views, incrementViewCount }}>
			{children}
		</ViewCountContext.Provider>
	)
}
