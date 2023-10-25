import React, {useState, useEffect} from 'react'

import { useViewCounts } from '../../hooks/useViewCounts'
import Dashboard from '../../components/Dashboard'

const Favorites = () => {
	const { views } = useViewCounts()
  const [data, setData] = useState([]);

	const columns = [
		{ field: 'url', headerName: 'Url' },
		{ field: 'seen', headerName: 'Seen' }
	]

	useEffect(() => {
    const sortedData = Object.entries(views)
      .map(([url, seen]) => ({ url, seen }))
      .sort((a, b) => b.seen - a.seen);

    setData(sortedData);
	}, [views])

	return <Dashboard data={data || []} columns={columns} isUnsearchable={true}/>
}

export default Favorites
