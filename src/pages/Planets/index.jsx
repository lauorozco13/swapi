import React from 'react'

import { useFetch } from '../../api/useFetch'
import Dashboard from '../../components/Dashboard'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

const Planets = () => {
	const { data, error, loading } = useFetch('planets')

	const columns = [
		{ field: 'name', headerName: 'Name' },
		{ field: 'rotation_period', headerName: 'Rotation' },
		{ field: 'orbital_period', headerName: 'Orbital' },
		{ field: 'diameter', headerName: 'Diameter' },
		{ field: 'climate', headerName: 'Climate' },
		{ field: 'gravity', headerName: 'Gravity' },
		{ field: 'terrain', headerName: 'Terrain' },
		{ field: 'population', headerName: 'Population' }
	]

	if (loading) return <Loading />
	if (error) return <Error message={error.message} />

	return <Dashboard data={data ? data.results : []} columns={columns} />
}

export default Planets
