import React ,{useState}from "react";
import styles from "./Card.module.css";
const Card = ({name , id , imgn , texto}) => {
    console.log(texto)
    const [open ,setOpen] = useState ({ marginLeft: "200%"});
    const handleMove = () => {
        setOpen({transition:'3s' , marginLeft:"50%"});
    };
    const handleLeave = () => {
        setOpen({transition:'3s',marginLeft:"200%"});
    };
return (
<div className={styles.container} onMouseMove={handleMove}  onMouseLeave={handleLeave}>
   <img className={styles.imgCont} src={imgn} alt="" />
   <div className={styles.details} style={open? open : null} >
        <h4>{name}</h4>
        <p>{`${texto}`}</p>
    </div>
</div>
)
};
export default Card;