import './App.css';
import BodyComponent from './components/BodyComponent';
import CardComponent from './components/CardComponent';
import Header from './components/Header';
import Heading from './components/Heading';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import ErrorComponent from './components/ErrorComponent';
import TeamMemberDetails from './components/TeamMemberDetails';
import About from './components/About';

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
      }
    ]
  },
  
  
])
export default App;
