import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "./App";
import BodyComponent from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <BodyComponent />,
                errorElement: <Error />
            },
            {
                path: '/about',
                element: <About />,
                errorElement: <Error />
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu />,
                errorElement: <Error />
            }
        ]
    },
    
])

export default AppRouter;