import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { imgSrc } from '../constants';
import Shimmer from './Shimmer';

const RestaurantMenu = (props) => {
    // const params = useParams();
    // const {id} = params;
    const {id} = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantDetails();
    }, [])

    async function getRestaurantDetails() {
        const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=12.7409127&lng=77.8252923&menuId='+id);
        const json = await data.json();
        setRestaurant(json.data)
    }

    return ( !restaurant ?<Shimmer /> : 
    <div className='restaurant-details'>
        <h1 className='restaurant-name'>{restaurant?.name}</h1>
        <img alt='img' src={`${imgSrc}${restaurant?.cloudinaryImageId}`} />

        <div className='menu'>
            <ul>
                {
                    Object.values(restaurant?.menu?.items).map((item) => (
                        <li key={item?.id}>
                            <div className='menu-card'>
                                <img alt='dish' src={`${imgSrc}${item?.cloudinaryImageId !== '' ? item?.cloudinaryImageId : 'h1xcxljrmaruquibx3ug'}`} />
                                <h2>{item?.name}</h2>
                                <p className='price'>{item?.price}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
    );
}

export default RestaurantMenu;