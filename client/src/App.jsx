//Import Pages
import './App.css'
import Login from './Components/Auth/Login'
import Contacs from './Components/Contacts/Contacs'
import Home from './Components/PageHome/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import Register from './Components/Auth-Register/Register'
import Follows from './Components/Dashboard/Pages/Follows/Follow'
import Survey from './Components/Dashboard/Pages/Follows/surveys/SurveyComponent.jsx'

//Import librarys
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


//Make Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Home/></div>
  },
  {
    path: '/Login',
    element: <div><Login/></div>
  },
  {
    path:'/Register',
    element: <div><Register/></div>
  },
  {
    path:'/Contacs',
    element: <div><Contacs/></div>
  },
  {
    path:'/Dashboard',
    element: <div><Dashboard/></div>
  },
  {
    path:'/Follows',
    element: <div><Follows/></div>
  },
  {
    path:'/Survey',
    element: <div><Survey/></div>
  }
])

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
