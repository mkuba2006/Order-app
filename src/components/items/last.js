import { Fragment } from 'react';
import MealsSummary from './summary';
import Meals from './meal/meals'

function Mealss() {
  return (
    <Fragment>
      <MealsSummary />
      <Meals />
    </Fragment>
  );
}
export default Mealss;