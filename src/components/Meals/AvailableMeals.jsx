import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Tangy Jalapino",
    description: "Tangy and juicy. Beef or Chicken",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Cheesy Mushroom",
    description: "Cheesy and Meaty. Beef or Chicken",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Signature",
    description: "Burger Cottege's Specialty beef only",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Classic",
    description: "Classic veggies with Beef or Chicken",
    price: 18.99,
  },
  {
    id: "m5",
    name: "The BBQ-UED",
    description: "Classic smoky flavour beef only",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
