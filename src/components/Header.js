export const Title = () => ( 
   <a href = '/'>
    <img 
     className='logo'
     src='https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj'
     onError={(e) => {
       e.currentTarget.onerror = null
       e.currentTarget.src = '/lib/image/logo.jpg'
     }}
      alt='logo'
     />
    </a>
 )

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

export default Header