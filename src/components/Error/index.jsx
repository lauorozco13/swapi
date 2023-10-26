import React from 'react'
import { Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(4),
		margin: theme.spacing(4),
		textAlign: 'center'
	},
	message: {
		marginBottom: theme.spacing(2)
	}
}))

function Error({ message }) {
	const classes = useStyles()

	return (
		<Paper className={classes.root}>
			<Typography variant="h3" className={classes.message}>
				An error occurred!
			</Typography>
			<Typography>{message}</Typography>
		</Paper>
	)
}

export default Error
