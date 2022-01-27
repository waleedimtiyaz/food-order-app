import classes from "./AvailableCakes.module.css";
import Card from "../UI/Card";
import CakeItem from "./CakeItem/CakeItem";

const DUMMY_CAKES = [
  {
    id: "c1",
    name: "Pineapple Cake",
    description: "Finest pineapple and cream",
    price: 299,
  },
  {
    id: "c2",
    name: "Black Forest",
    description: "A chocolate delicacy!",
    price: 49.99,
  },
  {
    id: "c3",
    name: "White Forest",
    description: "Vanilla flavoured chips",
    price: 39.99,
  },
  {
    id: "c4",
    name: "Strawberry Cake",
    description: "Healthy, super sweet....",
    price: 499.99,
  },
];

const AvailableCakes = () => {
  const cakesList = DUMMY_CAKES.map((cake) => (
    <CakeItem
      id={cake.id}
      name={cake.name}
      description={cake.description}
      price={cake.price}
      key={cake.id}
    />
  ));

  return (
    <section className={classes.cakes}>
      <Card>
        <ul>{cakesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableCakes;
