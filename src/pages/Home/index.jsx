import React from 'react'
import { makeStyles } from '@mui/styles'
import { Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

import { routes } from '../../utils/routes'

const useStyles = makeStyles((theme) => ({
	home: {
		textAlign: 'center',
		margin: theme.spacing(4)
	},
	homeHeader: {
		backgroundColor: theme.palette.secondary.contrastText,
		padding: theme.spacing(3),
		color: theme.palette.primary.contrastText,
		margin: `0 ${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(2)}`
	},
	section: {
		margin: `${theme.spacing(2)} ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
		border: `1px solid ${theme.palette.divider}`,
		padding: theme.spacing(4),
		borderRadius: theme.shape.borderRadius
	},
	title: {
		color: theme.palette.text.primary
	},
	description: {
		color: theme.palette.text.secondary
	}
}))

function HomePage() {
	const classes = useStyles()

	return (
		<div className={classes.home}>
			<header className={classes.homeHeader}>
				<Typography variant="h3" component="header" className={classes.homeHeader}>
					Welcome to the Star Wars Universe
				</Typography>
				<Typography variant="subtitle1">
					Explore characters, planets, species, films, starships, and vehicles!
				</Typography>
			</header>
			<Grid container spacing={3}>
				{routes.slice(0, 6).map((category) => (
					<Grid item xs={12} md={6} key={category.label}>
						<div className={classes.section}>
							<Typography variant="h4" component="h2" className={classes.title}>
								{category.label}
							</Typography>
							<Typography
								variant="body1"
								className={classes.description}
								component={Link}
								to={category.path}
							>
								Discover more about {category.label.toLowerCase()} from the Star Wars universe...
							</Typography>
						</div>
					</Grid>
				))}
			</Grid>
		</div>
	)
}

export default HomePage
