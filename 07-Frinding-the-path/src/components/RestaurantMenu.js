import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { mockMenuData } from "../../../lib/mockMenuData";
import { ITEM_IMG_CDN_URL} from '../../../public/common/constant'
import Shimmer from "./ShimmerUi";


const RestaurantMenu = () => {
  const { id } = useParams();

 const [restaurant, setRestaurant] = useState(null)
//  const [menuItem, setMenuItem] = useState([])

useEffect(() => {
    getRestaurantInfo()
}, [])

  async function getRestaurantInfo(){
   try {
    //  When we use online api 
//    const response = await fetch(
//       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.6900707&lng=86.1527675&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }
//     )

//     const jsonData = await response?.json() || null
//     if(jsonData?.data && jsonData?.data?.length > 0){
//       setRestaurant(jsonData?.data)
//     }else{
//         setRestaurant(mockMenuData)
//         console.log("else mockdata:::", restaurant)
//     }

 setRestaurant(mockMenuData?.[id])
    
    
  } catch (error) {
    console.log('Error:', error)
  }
  }



  return (!restaurant) ? <Shimmer /> : (
    <div className="restaurant-menu-card">     
    <div className="restaurant-menu">
      <h1>Restaurant Id : {id}</h1>
      <h2>{restaurant?.name}</h2>
       <img src = {ITEM_IMG_CDN_URL + restaurant?.cloudinaryImageId} />
       <h3>{restaurant?.area}</h3>
       <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
       <h3>{restaurant?.costForTwoMessage}</h3>
    </div>
       <div className="menu-list">
       <h1> Menu:</h1>
             {restaurant?.categories?.map((category) => (
                <div  key= {category?.title}> 
                  <h3>{category?.title}</h3>

                  <ul> 
                     {category?.itemCards?.map((item) => {
                        const itemInfo = item?.card?.info
                        console.log('>>>itemInfo>>>>', itemInfo)
                        return (
                            <li key={itemInfo.id}>
                                <h4>{itemInfo.name}</h4>
                                <p>₹{itemInfo.price / 100}</p>
                                <p>{itemInfo.description}</p>
                            </li>
                        )
                  })}
                  </ul>
                </div>
             ) )}
       </div>
       
    </div>
  );
};  

export default RestaurantMenu;