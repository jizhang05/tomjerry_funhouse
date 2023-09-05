import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Meals from "../Meals/Meals";

const mockMealsData = [
  {
    id: "1",
    title: "House Cheese Curds",
    desc: "Lightly battered and fried and served with T.J. house sauce.",
    price: 13.0,
    img: "/img/meals/cheese_curds.jpg",
  },
  {
    id: "2",
    title: "The Bone-in Wings",
    desc: "Offers Boneless option as well.",
    price: 12.0,
    img: "/img/meals/wings.jpg",
  },
];

describe("Meals component", () => {
  it("renders a list of meals", () => {
    render(<Meals mealsData={mockMealsData} />);

    const mealElements = screen.getAllByTestId("meal");
    expect(mealElements).toHaveLength(mockMealsData.length);
  });

  it("renders the meals data correctly", () => {
    render(<Meals mealsData={mockMealsData} />);

    mockMealsData.forEach((meal) => {
      const mealElement = screen.getByText(meal.title);
      expect(mealElement).toBeInTheDocument();
    });
  });

  it("renders the parent div with the correct test id", () => {
    render(<Meals mealsData={mockMealsData} />);

    const mealsContainer = screen.getByTestId("meals");
    expect(mealsContainer).toBeInTheDocument();
  });
});
