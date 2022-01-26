import { Fragment } from "react";
import BBImage from "../../assets/BB.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Buns & Bagels</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={BBImage} alt="Best cakes in the city!" />
      </div>
    </Fragment>
  );
};

export default Header;
