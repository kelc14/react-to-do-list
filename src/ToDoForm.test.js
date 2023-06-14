import { render, fireEvent } from "@testing-library/react";
import ToDoForm from "./ToDoForm";

// smoke test
it("renders without crashing", function () {
  render(<ToDoForm />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<ToDoForm />);
  expect(asFragment()).toMatchSnapshot();
});
