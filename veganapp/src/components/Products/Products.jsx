import styles from "./Products.module.css";
import {mock ,productos} from "../../utils/utils";
import { Link  , Outlet} from "react-router-dom";
const Products = () =>{
console.log(productos)
return (
    <div className={styles.container}>
        <h1>Our Products</h1>
      {
        productos.map( elem => 
            <ul key={elem.texto}>
                <li key={elem.texto}>
                <Link key={elem.texto} to = {`  detail/${elem.name}`}>{elem.name}</Link>
                </li>
            </ul>
        )
      }
      <Outlet/>
    </div>
)
};
export default Products;
