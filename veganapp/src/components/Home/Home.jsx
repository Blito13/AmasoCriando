import React from "react";
import bagels from "../../media/baggles.jpg" 
import styles from "./Home.module.css"
import About from "../About/AboutUs";
const Home = () => {
    return (
        <div>
             <About></About>
    <section  >
        {/* a esto hay que hacer con  cartas y map */}
        <div className={styles.container}>
         <h2>Algunos de Nuestros Productos</h2>
            <h3>Panes</h3>
            <div className={styles.card}>
                <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita corrupti corporis labore debitis? Dolorem cupiditate aspernatur quidem excepturi hic perferendis aliquid accusamus non, iste odit dicta tempore asperiores ipsam quod!</p>
            </div>
            <h3>Brownies</h3>
            <div className={styles.card}>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam incidunt dignissimos velit aspernatur asperiores distinctio. Necessitatibus porro, cum nam earum explicabo excepturi vero facilis quibusdam repellat, dolorum reprehenderit odio quisquam.</p>
            </div>
            <h3>Baggles</h3>
            <div className={styles.card}>
                <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sapiente aperiam esse, deserunt blanditiis similique temporibus nulla rem ab at nisi quisquam distinctio iusto id ea animi enim consequuntur recusandae!</p>
            </div>
        
        </div>

    </section>
    {/* Aca se debe renderizar el componente Contact */}
        </div>
    )
}
export default Home;