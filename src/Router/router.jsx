import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import TopDeals from "../Pages/Home/TopDeals/TopDeals";
import DealsDay from "../Pages/Home/DealsDay/DealsDay";
import ProductDetails from "../Pages/Home/ProductDetails/ProductDetails";
import Products from "../Pages/Home/Products/Products";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                children:[
                    {
                        path:'topdeals',
                        element:<TopDeals></TopDeals>,
                    },
                    {
                        path:'dealsday',
                        element:<DealsDay></DealsDay>
                    }

                ]
                
            },
            {
                path:'products',
                element:<Products></Products>
            },
            {
                path:'productdetails/:itemId',
                element:<ProductDetails></ProductDetails>
            }
        ]
    }
])
export default router