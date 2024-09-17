import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import authService from './appwrite/Auth'
import { login, logout } from './store/AuthSlice'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme.js'

function App() {

  const [loading, SetLoading] = useState(true)
  const [themeMode, setThemeMode] = useState("light")
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => SetLoading(false))
  }, [])

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }
  
  //actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return !loading ? (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='min-h-screen flex flex-wrap content-between text-2xl justify-center'>
        <div className='w-full block'>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  ) : null

}

export default App
