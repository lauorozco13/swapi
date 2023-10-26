import { useEffect, useState } from 'react'

const BASE_URL = 'https://swapi.dev/api/'

export function useFetch(complement) {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				const response = await fetch(`${BASE_URL}${complement}`)

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`)
				}

				const jsonResponse = await response.json()
				setData(jsonResponse)
			} catch (err) {
				setError(err)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [complement])

	return { data, error, loading }
}
