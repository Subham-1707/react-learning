import { imagePath } from './constant'

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId, platformCharge}) => {
    return (
        <div className='restaurant-card'>       
            <img src = {imagePath + cloudinaryImageId}  alt = 'restaurant-image' />
             <h4>{ name}</h4>
            <p>{cuisines.join(', ')}</p>
            <p>Rating: { avgRating || 3.5}</p>
            <p>Platform charge: {platformCharge || 0}</p>
        </div>
    )
}

export default RestaurantCard