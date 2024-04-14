//Import css and pages components
import React from 'react'
import './Top.css'

//Import Videos and images
import Video from '../../Assets/laptop.mp4'


//Top section (banner, etc)
function Top() {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Bienvenido a Rentabilidades Int.</h1>
          <p>Hola usuario, bienvenido de vuelta!</p>
        </div>

        <div className="adminDiv flex">
          <ion-icon name="notifications"></ion-icon>
          <ion-icon name="person"></ion-icon>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Conoce y has seguimiento de tus ingresos</h1>
          <p>Tan sencillo con ingresar datos y proseguir tus datos</p>

          <div className="buttons flex">
              <button className='btn'>Descubre Como</button>
              <button className='btn transparent'>Calendario</button>
          </div>

          <div className="videoDiv">
            <video src={Video} autoPlay loop muted ></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top