import React, { useState } from 'react'
import {
	AppBar,
	Toolbar,
	Button,
	Drawer,
	List,
	ListItem,
	ListItemText,
	IconButton,
	Hidden
} from '@mui/material'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

import { routes } from '../utils/routes'

function NavigationBar() {
	const [mobileOpen, setMobileOpen] = useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const drawer = (
		<List>
			{routes.map((item) => (
				<ListItem
					button
					component={Link}
					to={item.path}
					key={item.label}
					onClick={handleDrawerToggle}
				>
					<ListItemText primary={item.label} />
				</ListItem>
			))}
		</List>
	)

	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Hidden smUp>
						<IconButton
							color="inherit"
							aria-label="open menu"
							edge="start"
							onClick={handleDrawerToggle}
						>
							<MenuIcon />
						</IconButton>
					</Hidden>
					<Hidden smDown>
						{routes.map((item) => (
							<Button color="inherit" component={Link} to={item.path} key={item.label}>
								{item.label}
							</Button>
						))}
					</Hidden>
				</Toolbar>
			</AppBar>

			<Hidden smUp implementation="css">
				<Drawer variant="temporary" anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
					{drawer}
				</Drawer>
			</Hidden>
		</div>
	)
}

export default NavigationBar
