import './App.css';
import BodyComponent from './components/BodyComponent';
import Header from './components/Header';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import ErrorComponent from './components/ErrorComponent';
import TeamMemberDetails from './components/TeamMemberDetails';
import About from './components/About';
import ProfileComponent from './components/ProfileComponent'
import NestedProfile from './components/NestedProfile';
function App() {
 
  return (
    <>
    <Header/>
    <Outlet/>
    {/* <BodyComponent /> */}
    </>
  );
}

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
        path:"/about",
        element:<About/>,
        errorElement: <ErrorComponent/>,
        children:[
          {
            path:"profile",
            element:<ProfileComponent name="Namrata Das" />,
            errorElement:<ErrorComponent/>,
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
export default App;
