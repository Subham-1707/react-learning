import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import Shimmer from './shimmerUi'

function filteredData(restaurants, searchText) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  )
}

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
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      )
      const json = await response.json()
      const data = json?.data?.cards
      const list = checkJsonData(data)

      if (list && list.length > 0) {
        setAllRestaurants(list)
        setFilteredRestaurants(list)
      }
    } catch (error) {
      console.log(error)
    } 
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
          <RestaurantCard
            key={restaurant.info.id}
            {...restaurant.info}
            platformCharge='5'
          />
        ))}
      </div>
    </>
  )
}

export default Body