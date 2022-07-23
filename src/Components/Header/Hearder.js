import React from 'react'
import Caroussel from '../Caroussel/Caroussel'
import NavBar from '../NavBar/NavBar'

const Hearder = () => {
  return (
    <header>
        {/* <div>
            <img src="assets/images/logo.svg" alt="logo paris event" />
        </div> */}
        <NavBar/>
        <Caroussel/>
    </header>
  )
}

export default Hearder