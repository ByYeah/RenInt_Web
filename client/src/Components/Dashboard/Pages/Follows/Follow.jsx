//Import css styles and components
import React from 'react'
import '../../Dashboard.css'
import '../../SideBarSection/Sidebar.css'
import "./Follow.css";
import Survey from './surveys/SurveyComponent';
import Sidebar from '../../SideBarSection/Sidebar'

function Follow() {
    return (
        <>
        <div className='follows grid'>
        <div className='followSection flex'>
            <Sidebar/>
            <div className="nuevoSeguimiento">
                <a href='/Survey'>Nuevo Seguimiento</a>
            </div>
        </div> 
        </div>  
        </>
    )
}
 

export default Follow