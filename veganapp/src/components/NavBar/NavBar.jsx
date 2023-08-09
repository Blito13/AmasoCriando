import React, { useState } from "react";
import styles from "./NavBar.module.css"
import { Link  } from "react-router-dom";
import { useRef } from "react";
const NavBar = () => {

    return(
        <div className={styles.container}>
        <p className={styles.logo}>AmasoCriando</p>
        <nav className={styles.nav}>
            <Link to = "/">Home</Link>
            <Link to = "/about">About Us</Link>
            <Link to = "/contact">Contact</Link>
            <Link to = "/products">Our Products</Link>
        </nav>
    </div>
    )
}   
export default NavBar;