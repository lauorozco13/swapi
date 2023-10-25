import React from 'react'

import { useFetch } from '../../api/useFetch'
import Dashboard from '../../components/Dashboard'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

const Starships = () => {
	const { data, error, loading } = useFetch('starships')

	const columns = [
		{ field: 'name', headerName: 'Name' },
		{ field: 'model', headerName: 'Model' },
		{ field: 'manufacturer', headerName: 'Manufacturer' },
		{ field: 'cost_in_credits', headerName: 'Cost in Credits' },
		{ field: 'length', headerName: 'Length' }
	]

	if (loading) return <Loading />
	if (error) return <Error message={error.message} />

	return <Dashboard data={data ? data.results : []} columns={columns} />
}

export default Starships
