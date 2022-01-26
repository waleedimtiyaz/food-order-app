import { Fragment } from "react";
import BBImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Buns & Bagels</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={BBImage} alt="Best cakes in the city!" />
      </div>
    </Fragment>
  );
};

export default Header;
