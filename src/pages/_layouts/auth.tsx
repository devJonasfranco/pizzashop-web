import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <>
      <div>Página de login</div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
