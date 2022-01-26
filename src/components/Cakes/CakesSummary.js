import classes from "./CakesSummary.module.css";

const CakesSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Cakes, Delivered To You</h2>
      <p>
        Choose your favorite cake from our broad selection of available cakes
        and enjoy a delicacy at home.
      </p>
      <p>
        All our cakes are prepared with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default CakesSummary;
