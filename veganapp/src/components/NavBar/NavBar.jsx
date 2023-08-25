import React, { useState } from "react";
import styles from "./NavBar.module.css"
import { Link  } from "react-router-dom";
import { useRef } from "react";
import * as AllImages from '../../media/realMedia/indexMedia.js';
const NavBar = () => {

    return(
        <div className={styles.container}>
            <div className={styles.logo}>
            <img className={styles.img} src={AllImages.logo} alt="none"></img>
            </div>
        <nav className={styles.nav}>
            <a to = "/">Inicio</a>
            <a href="#">Quienes Somos?</a>
            <a href="#">Nuestros Productos</a>
            <a href="#">Contactanos</a>
        </nav>
    </div>
    )
}   
export default NavBar;