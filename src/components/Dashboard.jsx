import React, { useState } from 'react'

import DataTable from './DataTable'
import DetailPanel from './DetailPanel'
import { useViewCounts } from '../hooks/useViewCounts'

const Dashboard = ({ data, columns, isUnsearchable }) => {
	const [selectedItem, setSelectedItem] = React.useState(null)
	const [open, setOpen] = useState(false)
	const { incrementViewCount } = useViewCounts()

	const handleRowClick = (item) => {
    incrementViewCount(item);
		setSelectedItem(item)
		setOpen(true)
	}

	return (
		<div>
			<DataTable data={data} columns={columns} onRowClick={handleRowClick} isUnsearchable={isUnsearchable} />
			{selectedItem && (
				<DetailPanel url={selectedItem} open={open} onClose={() => setOpen(false)} />
			)}
		</div>
	)
}

export default Dashboard
