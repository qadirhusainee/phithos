import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { FunctionComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Dimensions,
  SafeAreaView,
} from "react-native";

import { updateLoggedIn, updateUserDetail } from "../redux/actions/auth";
import Baner from "../component/Baner";

const { width, height } = Dimensions.get("window");

const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const passwordPattern = /^.{6,100}$/;

const Login: FunctionComponent = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const _onLogin = () => {
    let valid = false;
    if (
      email &&
      password &&
      emailPattern.test(email) &&
      passwordPattern.test(password) &&
      email.toLocaleLowerCase() === "qadirhusainee@gmail.com" &&
      password === "Password@123"
    ) {
      dispatch(updateLoggedIn(true));
      dispatch(updateUserDetail({ email, password }));
    } else {
      setError("Please enter valid credentials");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Baner />
      <View style={{ flex: 1, alignItems: "center", marginTop: height / 4 }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
        />
        {error ? <Text style={styles.error}>{error}</Text> : <View />}
        <Button
          style={styles.button}
          title="Login"
          onPress={() => {
            _onLogin();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    width: width - 100,
    height: 50,
    padding: 10,
    marginVertical: 10,
  },
  error: {
    color: "red",
  },
  button: {
    marginTop: 20,
  },
});

export default Login;
