import Input from "../../UI/Input";
import classes from "./CakeItemForm.module.css";
const CakeItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          min: "1",
          max: "7",
          type: "number",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default CakeItemForm;
