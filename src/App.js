import './App.css'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const DashboardPage = React.lazy(() => import('./pages/dashboard-page'))

function App () {
  return (
    <Router>
      <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback='Loading ...'>
                <DashboardPage />
              </Suspense>
            }
          />
      </Routes>
    </Router>
  )
}

export default App
