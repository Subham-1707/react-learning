import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Profile from './components/Profile'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Shimmer from './components/ShimmerUi'
import "./index.css"

const Instamart = lazy(() => import('./components/Instamart'))


// React component - It is a function that returns a React element
// component composition - It is the process of combining multiple components to create a new component. It is a way to reuse code and create complex UIs from simple components.

// chunking
//  code splitting
//  dynamic Bundling
//  on demand loading
//  dynamic import
//  lazy loading


const AppLayout = () => {
   return (
     <div className="w-full flex flex-col justify-between items-center mt-[120px] min-h-[calc(100vh-120px)]">  
        <Header />
         <Outlet />
        <Footer />
      </div>
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
            path: '/about',  //localhost:123/about
            element: <About />,
            children: [
               {
                  path: 'profile', //localhost:123/about/profile
                  element: <Profile />
               }
            ]
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
            path: '/instamart',
            element: <Suspense fallback = {<Shimmer/>}> <Instamart /></Suspense>
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