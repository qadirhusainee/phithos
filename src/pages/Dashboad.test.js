import React from "react";
import renderer from "react-test-renderer";
import { render } from "react-native-testing-library";

import Dashboard from "./Dashboard";

jest.mock("react-redux", () => {
  const ActualReactRedux = require.requireActual("react-redux");
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(() => {
      return { email: "qadirhusainee@gmail.com" };
    }),
  };
});

describe("Dashboard", () => {
  it("Matches Snapshot", () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Showing Baner", () => {
    const { queryByText } = render(<Dashboard />);

    const element = queryByText("Emulator");
    expect(element).toBeDefined();
  });

  it("Showing Email", () => {
    const { queryByText } = render(<Dashboard />);

    const element2 = queryByText("qadirhusainee@gmail.com");
    expect(element2).toBeDefined();
  });
});
