import React from 'react'

import { useFetch } from '../../api/useFetch'
import Dashboard from '../../components/Dashboard'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

function Species() {
	const { data, error, loading } = useFetch('species')

	const columns = [
		{ field: 'name', headerName: 'Name' },
		{ field: 'classification', headerName: 'Classification' },
		{ field: 'designation', headerName: 'Designation' },
		{ field: 'average_height', headerName: 'Height' },
		{ field: 'skin_colors', headerName: 'Skin Colors' },
		{ field: 'language', headerName: 'Language' }
	]

	if (loading) return <Loading />
	if (error) return <Error message={error.message} />

	return <Dashboard data={data ? data.results : []} columns={columns} />
}

export default Species
