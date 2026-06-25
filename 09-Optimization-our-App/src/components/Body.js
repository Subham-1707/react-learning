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
    <>
      <div className='search-container'>
        <input
          type='text'
          className='search-input'
          placeholder='Search'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className='search-btn'
          onClick={() => {
            const filtered = filteredData(allRestaurants, searchText)
            setFilteredRestaurants(filtered)
          }}
        >
          Search
        </button>
      </div>

      <div className='restaurant-list'>
        {filteredRestaurants.map((restaurant) => (
          <Link to = {"/restaurant/" + restaurant?.info?.id}  key={restaurant?.info?.id}> 
          <RestaurantCard
            {...restaurant.info}
            platformCharge='5'
          />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Body