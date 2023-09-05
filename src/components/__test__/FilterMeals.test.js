import { render, fireEvent, screen } from "@testing-library/react";

import FilterMeals from "../FilterMeals/FilterMeals";

test("initially renders the input element", () => {
  //render component in the virtual DOM
  render(<FilterMeals />);

  //select element to interact
  const inputBox = screen.getByTestId("search");
  expect(inputBox.placeholder).toBe("Search Meal...");
});

test("changes the input value when the user types", () => {
  //render component in the virtual DOM
  render(<FilterMeals />);

  //select element to interact
  const inputBox = screen.getByTestId("search");

  //interact with element
  fireEvent.change(inputBox, { target: { value: "Chicken" } });

  expect(inputBox.value).toBe("Chicken");
});
