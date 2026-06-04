import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

// React component - It is a function that returns a React element
// component composition - It is the process of combining multiple components to create a new component. It is a way to reuse code and create complex UIs from simple components.

const AppLayout = () => {
   return (
     <>  
        <Header />
        <Body />
        <Footer />
     </>
   )
}
 

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)