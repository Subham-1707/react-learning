import {restaurantList} from '../../lib/restaurantApi'
import RestaurantCard from './RestaurantCard'
import {useState } from 'react'

function filteredData (restaurantList, searchText) {
  return restaurantList.filter((restaurant) => {
    return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  })
}

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList)
  const [searchText, setSearchText] = useState('')
    return (
        <>
        <div className='search-container '> 
            <input type='text' className='search-input' 
            placeholder='Search'
            value = {searchText}
            onChange = {(e) => {
                setSearchText(e.target.value)
            }}
             />
            <button className='search-btn' onClick={
              () => {
                //  need to filter the restaurant list
                    const filtered = filteredData(filteredRestaurants, searchText )
                // update the state of restaurant
                  setFilteredRestaurants(filtered)
              }
            }>Search</button>
        </div>
        <div className='restaurant-list'> 
          {
            filteredRestaurants.map( restaurant => {
                return <RestaurantCard  key={restaurant.data.id} {...restaurant.data}  platformCharge = '5' />
            })
          }
          
        </div>
        </>

    )
}

export default Body