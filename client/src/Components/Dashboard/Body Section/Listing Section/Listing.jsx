//Import css styles and pages components
import React from 'react'
import './Listing.css'
import { Link } from 'react-router-dom'

//Import images and icons
import Documents from '../../Assets/Documents1.png'
import Añadir from '../../Assets/añadir.png'

//Follows Section (Follows)
function Listing() {

  return (
    <div className='listingSection'>
      <div className='heading flex'>
        <h1><ion-icon name="receipt-outline"></ion-icon> | Ultimos seguimientos! </h1>
        <button className='btn flex'>
          Verlos todos!  <ion-icon name="caret-forward-outline"> </ion-icon>
        </button>
      </div>
      
      <div className="secContainer flex">
        <div className="singleItem">
            <ion-icon name="receipt-outline"></ion-icon>
            <img src={Documents} alt="Documentos" className='doc'/>
            <h3>Seguimiento</h3>
        </div>

        <div className="singleItem">

            <ion-icon name="receipt-outline"></ion-icon>
            <img src={Documents} alt="Documentos" className='doc'/>
            <h3>Seguimiento</h3>

        </div>

        <div className="singleItem">

            <ion-icon name="receipt-outline"></ion-icon>
            <img src={Documents} alt="Documentos" className='doc'/>
            <h3>Seguimiento</h3>

        </div>

        <div className="singleItem">

            <ion-icon name="receipt-outline"></ion-icon>
            <img src={Añadir} alt="Añadir" className='mas'/>
            <h3>Añadir</h3>

        </div>
      </div>
    </div>
  )
}

export default Listing