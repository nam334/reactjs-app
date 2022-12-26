import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import { lazy, Suspense } from 'react';

import '../App.css'
import App from '../App';
import BodyComponent from '../components/BodyComponent';
import ErrorComponent from '../components/ErrorComponent';
import TeamMemberDetails from '../components/TeamMemberDetails';
import ProfileComponent from '../components/ProfileComponent'
import NestedProfile from '../components/NestedProfile';
import Login from '../components/Login';

const About = lazy(()=>import("../components/About"))
export const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      errorElement: <ErrorComponent/>,
      children:[
        {
          path:"/team/:id",
          element:<TeamMemberDetails/>,
        },
        { 
          path:"/search",
          element:<BodyComponent />,
        },
        { 
          path:"/login",
          element:<Login/>,
        },
        {
          path:"/about",
          element:<Suspense fallback={<h1>Loading..</h1>}><About/></Suspense>,
          errorElement: <ErrorComponent/>,
          children:[
            {
              path:"profile",
              element:<ProfileComponent name="Namrata Das" />,
              children:[
                {
                  path:"nestedprofile",
                  element: <NestedProfile/>
                }
              ]
            }
          ]
        }
      ]
    },
    
    
  ])