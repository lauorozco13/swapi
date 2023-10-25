import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { indigo, grey } from '@mui/material/colors'
import CssBaseline from '@mui/material/CssBaseline'

import NavigationBar from './components/NavigationBar'
import Home from './pages/Home'
import Films from './pages/Films'
import People from './pages/People'
import Planets from './pages/Planets'
import Species from './pages/Species'
import Starships from './pages/Starships'
import Vehicles from './pages/Vehicles'
import Favorites from './pages/Favorites'
import { ViewCountProvider } from './hooks/useViewCounts';


const darkTheme = createTheme({
	palette: {
		primary: {
			main: indigo[800],
			contrastText: grey[100],
			light: grey[300]
		},
		secondary: {
			main: grey[100],
			contrastText: grey[900]
		}
	}
})

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Router>
				<Suspense fallback={<div>Loading</div>}>
          <ViewCountProvider>
					  <NavigationBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/films" element={<Films />} />
              <Route path="/people" element={<People />} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/species" element={<Species />} />
              <Route path="/starships" element={<Starships />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </ViewCountProvider>
				</Suspense>
			</Router>
		</ThemeProvider>
	)
}

export default App
