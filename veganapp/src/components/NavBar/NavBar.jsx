import React, { useState } from "react";
import styles from "./NavBar.module.css"
import { Link  } from "react-router-dom";
import { useRef } from "react";
import * as AllImages from '../../media/realMedia/indexMedia.js';
const NavBar = () => {

    return(
        <div className={styles.container}>
        <img className={styles.logo} src={AllImages.logo}></img>
        <nav className={styles.nav}>
            <a to = "/">Inicio</a>
            <a href="#hero">Quienes Somos?</a>
            <a href="#prod">Nuestros Productos</a>
            <a href="#contact">Contactanos</a>
        </nav>
    </div>
    )
}   
export default NavBar;