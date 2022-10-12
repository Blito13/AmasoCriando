import React from "react";
import styles from "./NavBar.module.css"

const NavBar = () => {
    return(
        <div className={styles.container}>
        <p className={styles.logo}>Amaso Criando{/* <br> */}Pasteleria Integral Vegana</p>
        <nav className={styles.nav}>
            <a /* href="index.html" */>Inicio</a>
            <a href="#hero">Quienes Somos?</a>
            <a /* href="#prod" */>Nuestros Productos</a>
            <a /* href="#contact" */>Contactanos</a>
        </nav>
    </div>
    )
}
export default NavBar