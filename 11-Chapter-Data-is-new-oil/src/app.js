import React, { lazy, Suspense, use, useEffect, useState } from 'react'
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
import UserContext from '../../utils/UserContext'

const Instamart = lazy(() => import('./components/Instamart'))


// React component - It is a function that returns a React element
// component composition - It is the process of combining multiple components to create a new component. It is a way to reuse code and create complex UIs from simple components.

// chunking
//  code splitting
//  dynamic Bundling
//  on demand loading
//  dynamic import
//  lazy loading

//  to getting a user details after login and pass it to all the components without prop drilling we can use context api. 
// It is a way to share data between components without passing props down manually at every level. It is a way to avoid prop drilling and make the code more readable and maintainable.
// State & hooks - State is a way to store data in a component. It is a way to make the component dynamic and interactive. Hooks are functions that allow you to use state and other React features in functional components. They are a way to reuse stateful logic between components and make the code more readable and maintainable.
//  hooks alway created in the top level of the component. It should not be created inside a function, loop or condition. It should be created in the top level of the component so that it can be used in the entire component and not just in a specific function, loop or condition. and can't create outside component.


const AppLayout = () => {
   const [user, setUser] = useState({
      name: "subham kumar",
      email: "subham@gmail.com"
   })
   // user details is actually coming from api after login and we are passing it to all the components using context api. so that we can access it in any component without prop drilling.
//   useEffect(() => {
   //   api call to get user details after login and set it to user state.
   //  setUser of user details after login from api call.
//   }, [])

   return (
     <div className="w-full flex flex-col justify-between items-center mt-[120px] min-h-[calc(100vh-120px)]">  
       <UserContext.Provider value = {
         {
            user: user,
            setUser: setUser
         }
       }>
        <Header />
         <Outlet />
        <Footer />
      </UserContext.Provider>
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