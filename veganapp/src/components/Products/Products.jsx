import styles from "./Products.module.css";
import {mock ,productos} from "../../utils/utils";
import { Link  , Outlet} from "react-router-dom";
const Products = () =>{
console.log(mock);
return (
    <div className={styles.container}>
        <h1>Our Products</h1>
      {
        mock.map( elem => 
            <ul key={elem.id}>
                <li key={elem.id}>
                <Link key={elem.od} to = {`detail/${elem.id}`}>{elem.name}</Link>
                </li>
            </ul>
        )
      }
      <Outlet/>
    </div>
)
};
export default Products;
