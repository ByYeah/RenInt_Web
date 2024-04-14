//Import Components & Styles
import React from 'react'
import './Login.css'
import '../../App.css'

//Import assets (Videos, Icons, Logos...)
import Video from '../../assets/Video.mp4'
import {FaUserTie} from 'react-icons/fa'
import {RiLockPasswordLine} from 'react-icons/ri'
import { CgLogIn } from "react-icons/cg";
import { MdHome } from "react-icons/md";

export const Login = () => {
  return (

    <>
    //*Home Button
    <div className='return'>
        <a href='/'>
          <button type='submit' className='btn flex'>
            <MdHome className='icon' />
            <span>Inicio</span>
          </button>
        </a>
    </div>

    //* Main container Login
    <div className='loginPage flex '>
      <div className="container flex">

        <div className="videoDiv">
          <video src={Video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className='title'>Rentabiliza "Inteligentemente" la confianza de tu economía</h2>
            <p>Por ello, Unetenos!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">¿No tienes cuenta?</span>
            <a href='/Register'>
            <button className='btn'>Prueba Gratuita</button>
            </a>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <h3>Bienvenido de vuelta!</h3>
          </div>

          <form action="" className='form grid'>
            <span className='showMessage'>Tu estado de seccion</span>

            <div className="inputDiv">
              <label htmlFor="username">Usuario</label>
              <div className="input flex">
                <FaUserTie className="icon"/>
                <input type="text" 
                id="username" 
                placeholder='Nombre de Usuario..'/>
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Contraseña</label>
              <div className="input flex">
              <RiLockPasswordLine className='icon'/>
                <input type="password" id="password" placeholder='Contraseña..'/>
              </div>
            </div>
          </form>

          <button type='submit' className='btn flex'>
            <span>Ingresar</span>
            <CgLogIn className='icon'/>
          </button>

          <span className='forgotPassword'>
            ¿Olvidaste tu Contraseña? <a href="/dashboard">Presiona acá</a>
          </span>

        </div>
      </div>
    </div>

    </>
  )
}

export default Login