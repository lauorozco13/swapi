import React from 'react'

import { useFetch } from '../../api/useFetch'
import Dashboard from '../../components/Dashboard'
import Error from '../../components'
import Loading from '../../components/Loading'

const People = () => {
	const { data, error, loading } = useFetch('people')

	const columns = [
		{ field: 'name', headerName: 'Name' },
		{ field: 'height', headerName: 'Height' },
		{ field: 'mass', headerName: 'Mass' },
		{ field: 'hair_color', headerName: 'Hair color' },
		{ field: 'skin_color', headerName: 'Skin color' },
		{ field: 'gender', headerName: 'Gender' }
	]

	if (loading) return <Loading />
	if (error) return <Error message={error.message} />

	return <Dashboard data={data ? data.results : []} columns={columns} />
}

export default People
