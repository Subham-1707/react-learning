import { useState } from 'react'
import { Link } from  'react-router-dom'

export const Title = () => ( 
   <Link to='/'>
    <img 
     className='logo'
     src='https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj'
      alt='logo'
     />
    </Link>
 )


//  SPA - Single Page Application - It is a web application that loads a single HTML page and dynamically updates the content as the user 
// interacts with the app. It is a way to create a fast and responsive user experience by avoiding full page reloads.

// Client side routing - It is a technique used in SPA to handle navigation between different views or pages without reloading the entire page. It is achieved by using JavaScript to manipulate the browser's history and update the URL without triggering a full page reload. This allows for a smoother and faster user experience.
// Server side routing - It is a technique used in traditional web applications to handle navigation between different views or pages by sending a new request to the server for each page. The server then responds with a new HTML page, which is rendered in the browser. This approach can result in slower page loads and a less responsive user experience compared to client side routing.
 const Header =  () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className='header'>  
            <Title />
             <div className='nav-item'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <li><Link to='/instamart'>Instamart</Link></li>
                </ul>
             </div>
              {
              isLoggedIn 
              ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>
              : <button onClick={() => setIsLoggedIn(true)}>Login</button>
              }             
               
        </div>
     
    )
}

export default Header