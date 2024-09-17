import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import {AuthLayout, Login, Features, UserGuideLine, HelpCenter, AddPost } from './components/index.js'
import {Post, Home, AllPost, EditPost, ContactUs, AboutUs, SignUp, Profile} from './Pages'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'/',
        element: <Home/>,
      },
      {
        path:'/login',
        element:(
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path:'/signUp',
        element:(
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        )
      },
      {
        path:'/all-posts',
        element:(
          <AuthLayout authentication>
            <AllPost />
          </AuthLayout>
        )
      },
      {
        path:'/add-post',
        element:(
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout> 
        )
      },
      {
        path:'/edit-post/:slug',
        element:(
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path:'/post/:slug',
        element: <Post />
      },
      {
        path:'/contact',
        element: (
            <ContactUs />
        )
      },
      {
        path:'/about',
        element: <AboutUs />
      },
      {
        path:'/helpcenter',
        element: <HelpCenter />
      },
      {
        path:'/userguideline',
        element: <UserGuideLine />
      },
      {
        path:'/features',
        element: <Features />
      },
      {
        path:'/profile',
        element:(
          <AuthLayout authentication>
            <Profile />
          </AuthLayout> 
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider  router={router}/>
      </Provider>
  </React.StrictMode>
)
