//Import Components & Styles
import React, {useState} from 'react'
import '../Auth/Login.css'
import '../../App.css'
import { Link } from 'react-router-dom'
/*import Axios from 'axios'*/

//Import assets (Videos, Icons, Logos...)
import Video from '../../assets/Video.mp4'
import {FaUserTie} from 'react-icons/fa'
import {RiLockPasswordLine} from 'react-icons/ri'
import { CgLogIn } from "react-icons/cg";
import { MdHome } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function Register() {
 /* //UseState for hold user entrys
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  //OnClick to get user entrys
  const createUser = ()=>{
    //Axios for API create conects
    Axios.post('http://localhost:3006/register',{
      //Create Variables to send to the server 
      Email: email,
      userName: userName,
      password: password
    }).then(()=>{
      console.log('El usuario ha sido creaado con exito')
    })
  }*/

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

    //*Main Container Register
    <div className='registerPage flex'>
      <div className="container flex">

        <div className="videoDiv">
          <video src={Video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className='title'>Rentabiliza "Inteligentemente" la confianza de tu economía</h2>
            <p>Por ello, Unetenos!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">¿Ya tienes cuenta?</span>
            <Link to={'/Login'}>
            <button className='btn'>Inicia Sección</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <h3>Bienvenido, Nuevo usuario!</h3>
            <h2>Prueba gratuita de 7 días!</h2>
          </div>
          

          <form action="" className='form grid'>

          <div className="inputDiv">
              <label htmlFor="email">Correo Electronico</label>
              <div className="input flex">
                <MdEmail className="icon"/>
                <input type="text" 
                id="email" 
                placeholder='Correo Electronico..' 
                onChange={(event)=>{
                  setEmail(event.target.value)
                }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Usuario</label>
              <div className="input flex">
                <FaUserTie className="icon"/>
                <input type="text" 
                id="username" 
                placeholder='Nombre de Usuario..' 
                onChange={(event)=>{
                  setUserName(event.target.value)
                }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Contraseña</label>
              <div className="input flex">
              <RiLockPasswordLine className='icon'/>
                <input type="password" id="password" placeholder='Contraseña..'
                onChange={(event)=>{
                  setPassword(event.target.value)
                }}
                />
              </div>
            </div>
          </form>

            <div className='terms'>
              <input type="checkbox" name="my-checkbox" id="opt-in" />
              <label for="opt-in"> He leído <a href=''>los terminos y condiciones</a></label>
            </div>

          <button type='submit' className='btn flex' onClick={createUser}>
            <span>Registrarse</span>
            <CgLogIn className='icon'/>
          </button>

        </div>
      </div>
    </div>

    </>
  )
}

export default Register