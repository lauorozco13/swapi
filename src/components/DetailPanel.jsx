import React from 'react'
import { Drawer, Typography, List, ListItem, Divider, ListItemText } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { useFetch } from '../api/useFetch'
import Error from './Error'
import Loading from './Loading'

const useStyles = makeStyles((theme) => ({
	drawerContent: {
		width: 400,
		padding: theme.spacing(3)
	},
	header: {
		marginBottom: theme.spacing(2),
		color: theme.palette.primary.main
	},
	divider: {
		margin: `${theme.spacing(2)}px 0`
	},
	nestedList: {
		paddingLeft: theme.spacing(4)
	}
}))

function DetailPanel({ url, open, onClose }) {
	const classes = useStyles()
	const shortUrl = url && url.split('/').slice(-3).join('/')
	const { data, error, loading } = useFetch(shortUrl)

	const renderArrayData = (key, value) => (
		<React.Fragment key={key}>
			<ListItem>
				<ListItemText primary={key} />
			</ListItem>
			<List>
				{value.map((item, idx) => (
					<div key={idx}>
						<ListItemText secondary={item} className={classes.nestedList} />
					</div>
				))}
			</List>
		</React.Fragment>
	)

	const renderSimpleData = (key, value) => (
		<ListItem key={key}>
			<ListItemText primary={key} secondary={value} />
		</ListItem>
	)

	return (
		<Drawer anchor="right" open={open} onClose={onClose}>
			<div className={classes.drawerContent}>
				{loading && <Loading />}
				{error && <Error message={error.message} />}
				{data && (
					<>
						<Typography variant="h5" className={classes.header}>
							{data.name || data.title}
						</Typography>
						<Divider className={classes.divider} />
						<List>
							{Object.entries(data).map(([key, value]) =>
								Array.isArray(value) ? renderArrayData(key, value) : renderSimpleData(key, value)
							)}
						</List>
					</>
				)}
			</div>
		</Drawer>
	)
}

export default DetailPanel
