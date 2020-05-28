import React from "react";
import { render } from "react-native-testing-library";
import renderer from "react-test-renderer";

import Baner from "./Baner";

jest.mock("react-redux", () => {
  const ActualReactRedux = require.requireActual("react-redux");
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(() => {
      return { showBaner: true };
    }),
  };
});
describe("Baner", () => {
  it("Matches Snapshot", async () => {
    const tree = await renderer.create(<Baner />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Showing device or emulator", async () => {
    const { queryByText } = render(<Baner />);

    const element = queryByText("Emulator(Android)");
    expect(element).toBeDefined();
  });
});
