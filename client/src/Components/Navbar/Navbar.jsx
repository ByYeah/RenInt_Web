import React from 'react'
import { FaBars } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='flex justify-between bg-violet-100 text-center items-center w-[92%] mx-auto font-[Montserrat]'>
    <div className='nav-links duration-500 md:static fixed md:min-h-fit min-h-[20vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5'>
      <a class="flex md:flex-row flex-col text-2xl absolute top-0 right-0 h-[9%] w-[93%] cursor-pointer text-violet-900 md:items-center md:gap-[.5vw] " href='/'><ion-icon name="stats-chart-sharp"></ion-icon>Empresarios Int.</a>
    </div>
    <div
      class="nav-links duration-500 md:static fixed bg-white md:min-h-fit min-h-[20vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
      <ul class="flex md:flex-row flex-col  md:items-center md:gap-[4vw] gap-8 text-2xl absolute top-0 right-0 h-[9%] w-[37%] text-violet-800">
        <li>
          <a class="hover:text-violet-500" href="/">Inicio</a>
        </li>
        <li>
          <a class="hover:text-violet-500" href="/Login">Acceso</a>
        </li>
        <li>
          <a class="hover:text-violet-500" href="/Contacs">Contactanos</a>
        </li>
      </ul>
    </div>
    <div class="flex items-center gap-6 absolute top-0 right-0 h-[9%] w-[10%]">
      <FaBars onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></FaBars>
    </div>
  </div>
  )
}

export default Navbar