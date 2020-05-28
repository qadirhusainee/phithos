import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "react-native-testing-library";

import Setting from "./Setting";

jest.mock("react-redux", () => {
  const ActualReactRedux = require.requireActual("react-redux");
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(() => {
      return { showBaner: true };
    }),
    useDispatch: jest.fn().mockImplementation(() => jest.fn()),
  };
});

describe("Setting", () => {
  it("Matches Snapshot", () => {
    const tree = renderer.create(<Setting />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Showing Baner", () => {
    const { queryByText } = render(<Setting />);

    const element = queryByText("Emulator");
    expect(element).toBeDefined();
  });
});
