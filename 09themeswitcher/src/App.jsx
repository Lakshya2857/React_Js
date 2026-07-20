import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/themeButton' // Path check kar lena

function App() {
  const [themeMode, setThemeMode] = useState("light")

  // Functions ke naam exact match hain ab context se
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // Tailwind ke liye theme class change karne ka logic
  useEffect(() => {
    const htmlElement = document.querySelector('html')
    htmlElement.classList.remove("light", "dark")
    htmlElement.classList.add(themeMode)
  }, [themeMode])

  return (
    // Double curly braces mein object pass kiya hai
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-gray-900 transition-all duration-300">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Yahan aapka Card Component aa jayega */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-900 dark:text-white text-center">
              <h1 className="text-xl font-bold">Theme Box</h1>
              <p className="mt-2 text-sm">Current Mode: {themeMode}</p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App