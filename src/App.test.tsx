import { render, screen } from '@testing-library/react'
import App from './App'

test('renders a heading', () => {
  render(<App />)
  expect(screen.getByRole('heading')).toBeInTheDocument()
})

test('failing test', () => {
  expect(1 + 1).toBe(3);
});