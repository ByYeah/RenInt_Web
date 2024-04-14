//Import css styles and component react
import React from 'react'
import '../SideBarSection/Sidebar.css'
import '../Dashboard.css'
import { Link } from 'react-router-dom'


function Sidebar() {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
      <ion-icon name="stats-chart"></ion-icon>
        <h2>Empresarios Int.</h2>
      </div>

      <div className="menuDiv">
        <h3 className='divTitle text-lg font-semibold'>
          | Menú rapido
        </h3>
        <ul className='menuList grid'>

           <li className='listItem'>
              <a href='/Dashboard' className='menuLink flex'>
              <ion-icon name="easel-outline" className="icon"></ion-icon>
              <span className='smallText'>
                | Dashboard
              </span>
              </a>
           </li>

           <li className='listItem'>
              <a href='#' className='menuLink flex'>
              <ion-icon name="storefront-outline" className="icon"></ion-icon>
              <span className='smallText'>
               | Perfil empresarial
              </span>
              </a>
           </li>

           <li className='listItem'>
              <Link to={'/Follows'} className='menuLink flex'>
              <ion-icon name="today-outline" className="icon"></ion-icon>
              <span className='smallText'>
               | Seguimientos
              </span>
              </Link>
           </li>

           <li className='listItem'>
              <a href='#' className='menuLink flex'>
              <ion-icon name="settings-outline" className="icon"></ion-icon>
              <span className='smallText'>
               | Configuración
              </span>
              </a>
           </li>

        </ul>

      </div>

      <hr />

      <div className="settingsDiv">
        <h3 className='divTitle text-lg font-semibold'>
          | Adicionales
        </h3>
        <ul className='menuList grid'>

           <li className='listItem'>
              <a href='#' className='menuLink flex'>
              <ion-icon name="alert-circle-outline" className="icon"></ion-icon>
              <span className='smallText'>
                 | ¿Necesitas ayuda?
              </span>
              </a>
           </li>

           <li className='listItem'>
              <a href='#' className='menuLink flex'>
              <ion-icon name="bug-outline" className="icon"></ion-icon>
              <span className='smallText'>
                | Reporte de problemas
              </span>
              </a>
           </li>

           <li className='listItem'>
              <a href='/Login' className='menuLink flex'>
              <ion-icon name="power-outline" className="icon"></ion-icon>
              <span className='smallText'>
                | Cerrar sección
              </span>
              </a>
           </li>

        </ul>

      </div>
    </div>
  )
}

export default Sidebar