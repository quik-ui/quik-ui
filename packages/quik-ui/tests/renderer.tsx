import "@testing-library/react-native/extend-expect";
import { render, screen } from "@testing-library/react-native";
import { Container } from "../src";

test("to be visible", () => {
  const allQuestions = ["q1", "q2"];
  const mockFn = jest.fn();

  render(<Container testID="container" />);

  const element = screen.getByTestId("container");

  expect(element).toBeVisible();
});
