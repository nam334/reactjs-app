import { createContext } from "react";

const ThemeContext = createContext({
    theme:"theme",
    setTheme:()=>{}
})

export default ThemeContext