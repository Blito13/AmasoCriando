import React from "react";
import styles from "./NavBar.module.css"
import { Link  } from "react-router-dom";
import { useRef } from "react";
const NavBar = ({fun}) => {
console.log({fun});
const handleFuncion=() => {
    fun()
}
    return(
        <div className={styles.container}>
        <p className={styles.logo}>AmasoCriando</p>
        <button onClick={handleFuncion}></button>
        <nav className={styles.nav}>
            <Link to = "/">Inicio</Link>
            <Link to = "/about">Quienes Somos?</Link>
            <Link to = "/products">Nuestros Productos</Link>
            <Link to = "/contact">Contactanos</Link>
        </nav>
    </div>
    )
}
export default NavBar;