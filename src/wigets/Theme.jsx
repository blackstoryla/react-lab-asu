import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { createContext, useEffect, useState } from 'react';


const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


export const ThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
    const [savedTheme, setSavedTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', savedTheme);
    }, [savedTheme]);

    const changeThemeOnClick = () => {
        const newTheme = savedTheme === 'light' ? 'dark' : 'light';
        setSavedTheme(newTheme);
    };

    console.log(savedTheme)

    return (
        <ThemeContext.Provider value={{ changeThemeOnClick }}>
            <ThemeProvider theme={savedTheme === 'dark' ? darkTheme : lightTheme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}