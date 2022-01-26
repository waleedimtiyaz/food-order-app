import { Fragment } from "react";
import Cakes from "./components/Cakes/Cakes";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Cakes />
      </main>
    </Fragment>
  );
}

export default App;
