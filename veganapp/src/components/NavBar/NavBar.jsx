import React from "react";
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <div className={styles.container}>
        <p className={styles.logo}>Amaso Criando</p>
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