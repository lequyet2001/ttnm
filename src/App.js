import React from 'react'
// import { Container } from '@mui/material'
import router from './router/router'
import {RouterProvider} from 'react-router-dom'


export default function App() {
  return (
    <React.StrictMode>
      {/* <Container maxWidth='lg' sx={{ textAlign: 'center', marginTop: '50px' }}> */}
        <RouterProvider router={router} />
      {/* </Container> */}
    </React.StrictMode>
  )
}
