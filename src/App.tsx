/* eslint-disable import/no-unresolved */
import './App.css'
import useRouteElements from './pages/useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return (
    <>
      <div>{routeElements}</div>
    </>
  )
}

export default App
