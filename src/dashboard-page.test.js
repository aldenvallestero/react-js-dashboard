/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import DashboardPage from './pages/dashboard-page'

test('renders loading fallback', () => {
  render(<DashboardPage />)
  const linkElement = screen.getByText(/General Pokemon Information/i)
  expect(linkElement).toBeInTheDocument()
})
