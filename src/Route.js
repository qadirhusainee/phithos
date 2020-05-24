import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Setting from "./pages/Setting";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <AuthenticatedRoute />
    </NavigationContainer>
  );
};

const AuthenticatedRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <>
      {!isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={Login}
            options={{
              title: "Login in",
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: !isLoggedIn ? "pop" : "push",
            }}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
      )}
    </>
  );
};

export default Route;
