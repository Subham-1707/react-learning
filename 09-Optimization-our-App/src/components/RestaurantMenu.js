import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { mockMenuData } from "../../../lib/mockMenuData";
import { ITEM_IMG_CDN_URL} from '../../../public/common/constant'
import Shimmer from "./ShimmerUi";
import useRestaurant from "../../../utils/useRestaurant";


const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id)


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
                        // console.log('>>>itemInfo>>>>', itemInfo)
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