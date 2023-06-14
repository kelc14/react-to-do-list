import { render, fireEvent } from "@testing-library/react";
import ToDo from "./ToDo";

// smoke test
it("renders without crashing", function () {
  render(<ToDo name="Test To Do" id={1} />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<ToDo name="Test To Do" id={1} />);
  expect(asFragment()).toMatchSnapshot();
});
