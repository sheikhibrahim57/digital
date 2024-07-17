import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Graphic from './pages/Graphics_page/Graphics.jsx';
import Digitalpage from './pages/Digital_marketing_page/Digitalpage.jsx';
import Websoftware from './pages/Web&software_page/Websoftware.jsx';


const router = createBrowserRouter([
  {
    path: "/graphic",
    element: <Graphic/>,
  },
  {
    path: "/digital",
    element: <Digitalpage/>,
  },
  {
    path: "/web&soft",
    element: <Websoftware/>,
  },
 
  {
    path: "/",
    element: <Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
