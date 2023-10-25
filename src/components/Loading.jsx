import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
	root: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
		height: '100vh'
	}
}))

const Loading = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<CircularProgress />
		</div>
	)
}

export default Loading
