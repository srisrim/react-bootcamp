import RestaurantCard from "./ReastaurantCard";
import { restaurantData } from "../constants";
import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const BodyComponent = () => {
    const [searchTxt, setSearchTxt] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [isError, SetError] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, [])

    async function getRestaurants() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.7409127&lng=77.8252923&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[1]?.data?.data?.cards);
        setfilteredRestaurants(json?.data?.cards[1]?.data?.data?.cards);
    }
    if(!allRestaurants) return null;
    return (filteredRestaurants?.length === 0 ? (<Shimmer />) : (
        <React.Fragment>
            <div className="search-container">
                <input type="text"
                    className="search-input"
                    placeholder="search"
                    value={searchTxt}
                    onChange={
                        (e) => setSearchTxt(e.target.value)
                    } />
                <button onClick={
                    () => {
                        const filteredData = filterData(searchTxt, allRestaurants);
                        setfilteredRestaurants(filteredData);
                    }
                }>Search</button>
            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurants.length === 0 ? <h1>Error</h1> :
                    filteredRestaurants.map((restaurant) => {
                        return <Link to={"/restaurant/"+restaurant?.data?.id} key={restaurant?.data?.id}>
                            <RestaurantCard {...restaurant?.data}  />
                        </Link> 
                        // up above we actually providing the individual props by just using spred operatopr(...), so in genenral
                        // it does same as <RestaurantCard name={restaurantData[0].data.name} cusines={restaurantData[0].data.cusines} />
                    })
                }
            </div>
        </React.Fragment >
    ))
}

function filterData(searchText, restaurants) {
    if (searchText) {
        const filteredData = restaurants?.filter((restaurant) =>
            restaurant?.data?.name?.toLowerCase().includes(searchText)
        )

        return filteredData;
    } else {
        return restaurantData;
    }
}

export default BodyComponent;