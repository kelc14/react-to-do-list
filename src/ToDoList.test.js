import { render, fireEvent, getByRole } from "@testing-library/react";
import ToDoList from "./ToDoList";

// smoke test
it("renders without crashing", function () {
  render(<ToDoList />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<ToDoList />);
  expect(asFragment()).toMatchSnapshot();
});

// functionality tests
it("can add a new box", function () {
  const { getByLabelText, queryByText } = render(<ToDoList />);

  // no boxes yet  (so no remove buttons)
  expect(queryByText("Test Item")).not.toBeInTheDocument();

  const nameInput = getByLabelText("Task:");
  const addBtn = queryByText("Add to List");

  // fill out the form:
  fireEvent.change(nameInput, { target: { value: "Test Item" } });
  fireEvent.click(addBtn);

  // item exists (remove button)
  expect(queryByText("Test Item")).toBeInTheDocument();
});
