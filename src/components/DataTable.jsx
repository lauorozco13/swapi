import React, { useState, useEffect } from 'react'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField
} from '@mui/material'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
	tableContainer: {
		padding: theme.spacing(2),
		[theme.breakpoints.down('md')]: {
			padding: theme.spacing(1)
		},
		height: '100%'
	},
	tableHeader: {
		backgroundColor: theme.palette.primary.light
	},
	headerCell: {
		fontSize: '1.2rem',
		fontWeight: 'bold'
	},
	searchContainer: {
		marginBottom: theme.spacing(2)
	}
}))

function DataTable({ data, columns, onRowClick, isUnsearchable }) {
	const { tableContainer, tableHeader, headerCell, searchContainer } = useStyles()
	const [searchValue, setSearchValue] = useState('')
	const [filteredData, setFilteredData] = useState(data)

	useEffect(() => {
		const result = data.filter((item) => {
			const itemName = item.name ? item.name.toLowerCase() : ''
			const itemTitle = item.title ? item.title.toLowerCase() : ''
			const searchLower = searchValue.toLowerCase()

			return itemName.includes(searchLower) || itemTitle.includes(searchLower)
		})
		setFilteredData(result)
	}, [data, searchValue])

	const handleSearchChange = (e) => {
		setSearchValue(e.target.value)
	}

	return (
		<TableContainer className={tableContainer}>
			{!isUnsearchable && (
				<div className={searchContainer}>
					<TextField
						fullWidth
						label="Search by name"
						value={searchValue}
						onChange={handleSearchChange}
					/>
				</div>
			)}
			<Table>
				<TableHead className={tableHeader}>
					<TableRow>
						{columns.map((col) => (
							<TableCell key={col.field} className={headerCell}>
								{col.headerName}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{filteredData.map((row, index) => (
						<TableRow key={index} onClick={() => onRowClick && onRowClick(row.url)}>
							{columns.map((col) => (
								<TableCell key={col.field}>{row[col.field]}</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default DataTable
