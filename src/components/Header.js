import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => { 
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    return (
    <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
            </ul>
        </div>
        {isLoggedIn ? 
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>: 
        <button onClick={() => setIsLoggedIn(true)}>Login</button>}
    </div>
    )
}

export const Title = () => (
    <div className="title">
        <a href="#"><img alt="logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cbbxaegl2u2fvrss6pec" /></a>
    </div>
)

export default HeaderComponent;