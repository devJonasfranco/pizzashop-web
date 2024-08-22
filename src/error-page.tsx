import { useRouteError } from 'react-router-dom'

export function ErrorPage() {
  const error = useRouteError()

  console.log(error)
  return (
    <div id="error-page">
      <h1 className="flex justify-center bg-red-500 text-2xl font-bold text-red-200">
        Oops!
      </h1>
      <div className="flex flex-col items-center justify-center gap-5 text-5xl">
        <p>Descupe, erro inesperado</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  )
}
