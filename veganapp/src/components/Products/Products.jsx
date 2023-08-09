import styles from "./Products.module.css";
import productos from "../../utils/utils";
import { Link } from "react-router-dom";
const Products = () =>{
console.log(productos);
return (
    <div className={styles.container}>
        <h1>Our Products</h1>
      {
        productos.map( elem => 
            <ul key={elem.texto}>
                <li key={elem.texto}>
                <Link key={elem.texto} to = {`/detail/${elem.texto}`}>{elem.texto}</Link>
                </li>
            </ul>
        
        )
      }
    </div>
)
};
export default Products;