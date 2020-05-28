import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "react-native-testing-library";

import Login from "./Login";

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

describe("Login", () => {
  it("Matches Snapshot", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Showing Baner", () => {
    const { queryByText } = render(<Login />);

    const element = queryByText("Emulator");
    expect(element).toBeDefined();
  });

  it("Verifying entered input values", () => {
    const dispatch = jest.fn();
    const { getAllByA11yLabel, queryByText, queryByDisplayValue } = render(
      <Login />
    );

    const email = getAllByA11yLabel("email");
    const password = getAllByA11yLabel("password");

    fireEvent.changeText(email[0], "qadirhusainee@gmail.com");
    fireEvent.changeText(password[0], "Password@123");
    const inputEmail = queryByDisplayValue("qadirhusainee@gmail.com");
    const inpupassword = queryByDisplayValue("Password@123");
    fireEvent.press(queryByText("Login"));
    expect(inputEmail).toBeDefined();
    expect(inpupassword).toBeDefined();
  });
});
