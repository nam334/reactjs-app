import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import {Outlet} from 'react-router-dom'
import UserContext from './context/UserContext';
import ThemeContext from './context/ThemeContext';
import { Provider } from 'react-redux';
import store from './components/store';

function App() {
 //const [email, setEmail] = useState("test@gmail.com")
 const [theme, setTheme] = useState("light")
  return (
    <>
    <Provider store={store}>
    <ThemeContext.Provider value={{theme:theme, setTheme:setTheme}}>
    {/* <UserContext.Provider value={{email:email, setEmail: setEmail}}> */}
    <Header/>
    <Outlet/>
    {/* </UserContext.Provider> */}
    </ThemeContext.Provider>
    </Provider>
    </>
  );
}
 

export default App;
