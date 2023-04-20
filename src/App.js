import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
import CategoriesContext from './context'
import { useState } from 'react'

const App = () => {
	const [categories, setCategories] = useState(null)
	const value = { categories, setCategories }

	return (
		<div className="app">
			<CategoriesContext.Provider value={value}>
				<BrowserRouter>
					<Nav />
					<Routes>
						<Route
							path="https://jf-crm-clone.vercel.app"
							element={<Dashboard />}
						/>
						<Route
							path="https://jf-crm-clone.vercel.app/ticket"
							element={<TicketPage />}
						/>
						<Route
							path="https://jf-crm-clone.vercel.app/ticket/:id"
							element={<TicketPage editMode={true} />}
						/>
					</Routes>
				</BrowserRouter>
			</CategoriesContext.Provider>
		</div>
	)
}

export default App
