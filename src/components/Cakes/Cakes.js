import CakesSummary from "./CakesSummary";
import AvailableCakes from "./AvailableCakes";
import { Fragment } from "react";

const Cakes = () => {
  return (
    <Fragment>
      <CakesSummary />
      <AvailableCakes />
    </Fragment>
  );
};

export default Cakes;
