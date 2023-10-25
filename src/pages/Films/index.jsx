import React from 'react'

import { useFetch } from '../../api/useFetch'
import Dashboard from '../../components/Dashboard'
import Error from '../../components/Error'
import Loading from '../../components/Loading'

const Films = () => {
	const { data, error, loading } = useFetch('films')

	const columns = [
		{ field: 'title', headerName: 'Title' },
		{ field: 'episode_id', headerName: 'Episode' },
		{ field: 'director', headerName: 'Director' },
		{ field: 'producer', headerName: 'Producer' },
		{ field: 'release_date', headerName: 'Release date' }
	]

	if (loading) return <Loading />
	if (error) return <Error message={error.message} />

	return <Dashboard data={data ? data.results : []} columns={columns} />
}

export default Films
