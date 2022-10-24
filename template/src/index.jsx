import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import './index.css'

import './i18n/i18n'

const container = document.getElementById('root')
const root = createRoot(container)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: (
      <div>
        Oops page not found <a href="/">Go back</a>
      </div>
    ),
    children: [
      {
        path: 'children', // Use <Outlet /> Component
        element: <h1>A route with an embed child</h1>,
      },
    ],
  },
  {
    path: 'other',
    element: (
      <div>
        Another route <a href="/">Go back</a>
      </div>
    ),
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
