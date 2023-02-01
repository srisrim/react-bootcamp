import { imgSrc } from "../constants";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
    // in above line its just we are destructring the object as many props like name, cusines etc. 
    return (
        <div className="card">
            <img
                alt="logo"
                src={`${imgSrc}${cloudinaryImageId}`} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}

export default RestaurantCard;