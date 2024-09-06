import React from 'react';

const ThemeContext = React.createContext('light');

const ThemeContextProvider =  ({children}) => {
    const [theme, setTheme] = React.useState('light');


    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => {
    return React.useContext(ThemeContext);
}

export default ThemeContextProvider;