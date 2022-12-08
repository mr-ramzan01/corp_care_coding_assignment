import React from 'react'
import { Home } from '../pages/Home'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
    </Routes>
  )
}
