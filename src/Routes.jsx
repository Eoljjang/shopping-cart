import { Navigate } from "react-router-dom";
import App from "./App";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

// Import the other page components here
// Note: There's a "page" folder which has components. Everything is a component, 
// it's just semantics that we treat it as a "page".

const routes = [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true, // Note: This makes the default child route to "/home" instead of "/".
          element: <Navigate to="/home" />,
        },
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'shop',
          element: <Shop />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
      ],
    },
  ];
  
  export default routes;