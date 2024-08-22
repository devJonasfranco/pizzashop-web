import './global.css'

import { RouterProvider } from 'react-router-dom'

import { rounter } from './routes'

export function App() {
  return <RouterProvider router={rounter} />
}
