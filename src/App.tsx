import "normalize.css";
import "./styles/border.css";
import "./styles/base.css";

import {createHashRouter, RouterProvider} from  "react-router-dom";

import Guide from "./containers/Guide";
import Login from "./containers/Account/Login";
import Register from "./containers/Account/Register";
import Account from "./containers/Account";
import Home from "./containers/Home";


function App() {
  const routers=createHashRouter([
    {
      path:"/",
      element:<Guide />
    },{
      path:"/account",
      element: <Account/>,
      children:[
        {
          path:"/account/login",
          element:<Login />
        },{
          path:"/account/register",
          element:<Register />
        }
      ]
    },{
      path:"/home",
      element: <Home />
    }
  ])
  return (
         <RouterProvider router={routers} />
  );
}

export default App;
