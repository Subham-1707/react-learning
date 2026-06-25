import React, { useEffect, useState } from 'react'
import { mockMenuData } from '../lib/mockMenuData'
import {FETCH_MENU_URL} from '../public/common/constant'

const useRestaurant = (id) => {
   
    const [restaurant, setRestaurant] = useState(null)
    useEffect(() => {
    getRestaurantInfo()
}, [])

  async function getRestaurantInfo(){
   try {
    //  When we use online api 
//    const response = await fetch(
//                    FETCH_MENU_URL  + id,
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

    return restaurant
}

export default useRestaurant