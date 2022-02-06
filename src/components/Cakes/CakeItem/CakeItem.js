import { useContext } from "react";
import CakeItemForm from "./CakeItemForm";
import classes from "./CakeItem.module.css";
import CartContext from "../../../store/cart-context";

const CakeItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `Rs ${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.cake}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <CakeItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default CakeItem;
