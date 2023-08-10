import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import{mock , productos} from "../../utils/utils.js";
const Detail =() => {
    const {id} = useParams();
    console.log(id);
    let detailedProduct = id.length? mock.filter(e => e.id === Number(id)):"anfialfio";
    console.log(mock.filter(e => e.id === Number(id)));
return (
    <div className={styles.container}>
       <h1>
        {detailedProduct?.map(e => 
        <div>

        <h4>{e.texto}</h4>
        <img  className = {styles.imgn}src={e.imgn} alt="nowImg" />
        <h4>{e.name}</h4>
        </div>
        )}
        </h1> 
    </div>
)
};
export default Detail;
