import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";

const Detail =() => {
    const {name} = useParams();
    console.log(name)
return (
    <div className={styles.container}>
       <h1>
        {name}
        </h1> 
    </div>
)
};
export default Detail;
