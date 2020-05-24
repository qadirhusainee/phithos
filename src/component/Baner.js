import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { FunctionComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Dimensions,
} from "react-native";
import { isEmulator } from "react-native-device-info";

const { width, height } = Dimensions.get("window");

const Login: FunctionComponent = ({ navigation }) => {
  const showBaner = useSelector((state) => state.auth.showBaner);
  const [isDevice, setIsDevice] = useState("");

  useEffect(() => {
    isEmulator().then((value) => setIsDevice(!value));
  }, []);

  if (showBaner) {
    return (
      <View style={styles.container}>
        <Text>{!isDevice ? "Emulator" : "Device"}</Text>
      </View>
    );
  } else {
    return <View />;
  }
};

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
  },
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
