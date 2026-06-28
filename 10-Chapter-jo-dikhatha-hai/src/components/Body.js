import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import { restaurantList } from '../../../lib/mockData'
import Shimmer from './ShimmerUi'
import { Link } from 'react-router-dom'
import { filteredData } from '../../../utils/helper'
import useOnline from '../../../utils/useOnline'


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    getRestaurants()
  }, [])

  async function getRestaurants() {
    try {
      const response = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6900707&lng=86.1527675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      )
      const json = await response.json()
      const data = json?.data?.cards
      let list = checkJsonData(data)

      // Api is not working so we are using mock data else condition.
      list = []

      if (list && list.length > 0) {
        setAllRestaurants(list)
        setFilteredRestaurants(list)
      }else{
        console.log("else condition Mock data")
        setAllRestaurants(restaurantList)
        setFilteredRestaurants(restaurantList)
      }
    } catch (error) {
      console.log(error)
      setAllRestaurants(restaurantList)
      setFilteredRestaurants(restaurantList)
    } 
  }

  // check online or offline
  const isOnline = useOnline()

  if(!isOnline){
    return ( <h1> 🔴You are offline. Please check Internet 🔴</h1>)
  }

  function checkJsonData(data) {
    if (!data) return []
    for (let i = 0; i < data.length; i++) {
      if (data[i]?.card?.card?.id === 'restaurant_grid_listing_v2') {
        return data[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      }
    }
    return []
  }

  // no rendering if data is not present, early return
  if (!allRestaurants) return null
  return allRestaurants?.length === 0 ? <Shimmer /> : (
    <div className="w-[90%] flex flex-col items-center transition-all">
      <div className="w-[80%] flex justify-between items-center mb-[30px]">
      <div className='w-[70%] flex justify-center items-center'>
        <input
          type='text'
          className='search-input w-[70%] px-4 py-2 text-lg text-gray-700 bg-white border border-gray-400 rounded-l-lg outline-none focus:border-orange-500'
          placeholder='Search'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className='search-btn className="px-5 py-2 bg-orange-500 text-white font-medium rounded-r-lg border border-orange-500 hover:bg-green-700 transition-all duration-300 cursor-pointer'
          onClick={() => {
            const filtered = filteredData(allRestaurants, searchText)
            setFilteredRestaurants(filtered)
          }}
        >
          Search
        </button>
      </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-[1.5%] gap-y-[25px]" >
        {filteredRestaurants.map((restaurant) => (
          <Link to = {"/restaurant/" + restaurant?.info?.id}  key={restaurant?.info?.id}> 
          <RestaurantCard
            {...restaurant.info}
            platformCharge='5'
          />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body