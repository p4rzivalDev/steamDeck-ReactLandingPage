import { Navbar } from './components'
import { AppRouter } from './Router/AppRouter'

import './App.css'

export const App = () => {
  return (
    <>
      <Navbar/>
      <AppRouter />
    </>
  )
}
