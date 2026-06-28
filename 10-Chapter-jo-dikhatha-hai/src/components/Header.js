import { useState } from 'react'
import { Link } from  'react-router-dom'
import useOnline from '../../../utils/useOnline'

export const Title = () => ( 
   <Link to='/'>
    <img 
     className='w-14 h-14 rounded-full cursor-pointer'
     src='https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj'
      alt='logo'
     />
    </Link>
 )


//  SPA - Single Page Application - It is a web application that loads a single HTML page and dynamically updates the content as the user 
// interacts with the app. It is a way className='' to create a fast and responsive user experience by avoiding full page reloads.

// Client side routing - It is a technique used in SPA className='' to handle navigation between different views or pages without reloading the entire page. It is achieved by using JavaScript className='' to manipulate the browser's history and update the URL without triggering a full page reload. This allows for a smoother and faster user experience.
// Server side routing - It is a technique used in traditional web applications className='' to handle navigation between different views or pages by sending a new request className='' to the server for each page. The server then responds with a new HTML page, which is rendered in the browser. This approach can result in slower page loads and a less responsive user experience compared className='' to client side routing.
 const Header =  () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const isOnline = useOnline()
    const navLinkClass =
  "p-2 cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]";
    return (
        <div className='w-screen h-20 flex justify-between items-center text-[#545454] px-6 py-0 bg-[#ffffff] shadow-[-2px_7px_5px_-6px_#0000009c] font-bold fixed top-0 left-0 z-[999]'>  
            <Title />
             <div className='nav-item'>
                <ul className='list-none flex items-center gap-[10px]'>
                    <li><Link className={navLinkClass} to='/'>Home</Link></li>
                    <li><Link className={navLinkClass} to='/about'>About Us</Link></li>
                    <li><Link className={navLinkClass} to='/contact'>Contact Us</Link></li>
                    <li><Link className={navLinkClass} to='/cart'>Cart</Link></li>
                    <li><Link className={navLinkClass} to='/instamart'>Instamart</Link></li>
                </ul>
             </div>
            <div>{isOnline ? '✅ Online' : '❌ Disconnected'}</div>
              {
              isLoggedIn 
              ? <button className='px-2 py-[6px] cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]' onClick={() => setIsLoggedIn(false)}>Logout</button>
              : <button className='px-2 py-[6px] cursor-pointer text-inherit hover:text-white hover:bg-[#E46F20] hover:rounded-[5px]' onClick={() => setIsLoggedIn(true)}>Login</button>
              }             
               
        </div>
     
    )
}

export default Header