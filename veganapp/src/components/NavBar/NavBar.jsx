import React, { useState } from "react";
import styles from "./NavBar.module.css"
import { Link  } from "react-router-dom";
import { useRef } from "react";
const NavBar = () => {

    return(
        <div className={styles.container}>
        <p className={styles.logo}>Amaso Criando<br></br>Pasteleria Integral Vegana</p>
        <nav className={styles.nav}>
            
              <Link to = "/">
                Inicio
              </Link>
            
            <a href="#hero">Quienes Somos?</a>
            <a href="#prod">Nuestros Productos</a>
            <a href="#contact">Contactanos</a>
        </nav>
        {/* <div className={styles.container}>
        <p className={styles.logo}>AmasoCriando</p>
        <nav className={styles.nav}>
            <Link to = "/">Home</Link>
            <Link to = "/about">About Us</Link>
            <Link to = "/contact">Contact</Link>
            <Link to = "/products">Our Products</Link>
        </nav>
    </div> */}
    </div>
    )
}   
export default NavBar;