import classes from "./AvailableCakes.module.css";
import Card from "../UI/Card";
import CakeItem from "./CakeItem/CakeItem";

const DUMMY_CAKES = [
  {
    id: "c1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "c2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "c3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "c4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableCakes = () => {
  const cakesList = DUMMY_CAKES.map((cake) => (
    <CakeItem
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
