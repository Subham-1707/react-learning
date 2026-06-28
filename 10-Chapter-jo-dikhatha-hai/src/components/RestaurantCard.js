import { imagePath } from '../../../public/common/constant'
import "../styles/RestaurantCard.css"

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId, platformCharge}) => {
    return (
        <div className='restaurant-card '>       
            <img src = {imagePath + cloudinaryImageId}  alt = 'restaurant-image' className="restaurant-image" />
            <div className="restaurant-details">
             <h3 className='restaurant-name font-bold text-l'>{ name.length > 23 ? name.slice(0, 20) + "..." : name.slice(0, 24)}</h3>
            <p className="cousine"> {cuisines.join(", ").length > 32
            ? cuisines.join(", ").slice(0, 28) + "..."
            : cuisines.join(", ").slice(0, 32)}</p>
            <p>Rating: { avgRating || 3.5}</p>
            <p>Platform charge: {platformCharge || 0}</p>
            </div>
        </div>
    )
}

export default RestaurantCard