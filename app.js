import React from 'react'
import ReactDOM from 'react-dom/client'

import {restaurantList} from './lib/restaurantApi'

const Title = () => ( 
   <a href = '/'>
    <img 
     className='logo'
     alt='logo'
     src='https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj'/>
    </a>
 )
// React component - It is a function that returns a React element
// component composition - It is the process of combining multiple components to create a new component. It is a way to reuse code and create complex UIs from simple components.
const Header =  () => {
    return (
        <div className='header'>  
            <Title />
             <div className='nav-item'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
             </div>
               
        </div>
     
    )
}

const imagePath = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId, platformCharge}) => {
    return (
        <div className='restaurant-card'>       
            <img src = {imagePath + cloudinaryImageId}  alt = 'restaurant-image' />
            <h4>{cuisines.join(', ')}</h4>
            <p>{ name}</p>
            <p>Rating: { avgRating || 3.5}</p>
            <p>Platform charge: {platformCharge || 0}</p>
        </div>
    )
}

const Body = () => {
    return (
        <div className='restaurant-list'> 
          {
            restaurantList.map( restaurant => {
                return <RestaurantCard  key={restaurant.data.id} {...restaurant.data}  platformCharge = '5' />
            })
          }
          
        </div>
    )
}

const Footer = () => {
    return (
        <div className='footer'> 
          <h2>Footer Content</h2>
        </div>
    )
}



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