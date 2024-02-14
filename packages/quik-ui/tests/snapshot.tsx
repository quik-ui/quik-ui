import React from "react";
import renderer from "react-test-renderer";

import { Container } from "../src";

test("renders correctly", () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
