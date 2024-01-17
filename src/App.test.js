/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders loading fallback', () => {
  render(<App />)
  const linkElement = screen.getByText(/Loading/i)
  expect(linkElement).toBeInTheDocument()
})
