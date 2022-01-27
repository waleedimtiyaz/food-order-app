import CakeItemForm from "./CakeItemForm";
import classes from "./CakeItem.module.css";

const CakeItem = (props) => {
  const price = `Rs ${props.price.toFixed(2)}`;

  return (
    <li className={classes.cake}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <CakeItemForm id={props.id}/>
      </div>
    </li>
  );
};

export default CakeItem;
