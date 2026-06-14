import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'

// React component - It is a function that returns a React element
// component composition - It is the process of combining multiple components to create a new component. It is a way to reuse code and create complex UIs from simple components.

const AppLayout = () => {
   return (
     <>  
        <Header />
         <Outlet />
        <Footer />
     </>
   )
}

const appRouter = createBrowserRouter([
   {
      path: '/',
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
         {
           path: '/',
           element: <Body />
         },
   {
      path: '/about',
      element: <About />
   },
   {
      path: '/contact',
      element: <Contact />
   },
   {
      path: '/cart',
      element: <Cart />
   },
   {
      path: '/restaurant/:id',
      element: <RestaurantMenu />
   }
      ]
   }
   
])
 

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(< RouterProvider router = {appRouter} /> )