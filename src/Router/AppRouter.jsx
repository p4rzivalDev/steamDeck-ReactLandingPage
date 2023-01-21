import { Navigate, Route, Routes } from 'react-router-dom'
import { Dock, Hardware, Home, Software, TechSpecs } from '../pages'

export const AppRouter = () => {
  return (
   <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/hardware" element={ <Hardware /> } />
    <Route path="/software" element={ <Software /> } />
    <Route path="/dock" element={ <Dock /> } />
    <Route path="/tech" element={ <TechSpecs /> } />

    <Route path="/*" element={ <Navigate to="/" /> } />
   </Routes>
  )
}
