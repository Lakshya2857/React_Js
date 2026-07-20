import { createContext, useContext } from "react";

// 1. Default object ke sath context banaya
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// 2. Short-cut short name banaya Provider ka
export const ThemeProvider = ThemeContext.Provider

// 3. Custom hook banaya data nikalne ke liye
export default function useTheme() {
    return useContext(ThemeContext)
}