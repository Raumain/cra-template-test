import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import Root from '../routes/root'

test('full app rendering/navigating', async () => {
    render(<Root />, {wrapper: BrowserRouter})
    const user = userEvent.setup()
  
    // verify page content for default route
    expect(screen.getByText(/Add Amount/i)).toBeInTheDocument()
    expect(screen.getByText(/A route with an embed child/i)).toBeNull()
  
    // verify page content for expected route after navigating
    await user.click(screen.getByText(/Route for embed children/i))
    expect(screen.getByText(/A route with an embed child/i)).toBeInTheDocument()

  })

  test('landing on a bad page', () => {
    const badRoute = '/some/bad/route'
  
    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Root />
      </MemoryRouter>,
    )
  
    // verify navigation to "Oops page not found" route
    expect(screen.getByText(/Oops page not found/i)).toBeInTheDocument()
  })

  test('use another route', () => {
    const otherRoute = '/other'
  
    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[otherRoute]}>
        <Root />
      </MemoryRouter>,
    )
  
    // verify navigation to "Other" route
    expect(screen.getByText(/Another route/i)).toBeInTheDocument()
  })