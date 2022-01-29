import { Fragment, useState } from "react";
import Cakes from "./components/Cakes/Cakes";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Cakes />
      </main>
    </Fragment>
  );
}

export default App;
