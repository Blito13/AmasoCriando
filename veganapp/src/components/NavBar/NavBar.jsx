import React from "react";
import styles from "./NavBar.module.css"
import { Link  } from "react-router-dom";
import { useRef } from "react";
const NavBar = ({props ,  select , options}) => {
const handleSelection =() =>{
props();
};
    return(
        <div className={styles.container}>
        <p className={styles.logo}>AmasoCriando</p>
        <nav className={styles.nav}>
        <Link to="/contact">
          Contact
        </Link>
        <Link to="/about">
          About Us
        </Link>
        <Link to="/products">
          Products
        </Link>
        </nav>
    </div>
    )
}
export default NavBar;