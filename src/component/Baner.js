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
  Platform,
} from "react-native";
import { isEmulator } from "react-native-device-info";
const { width, height } = Dimensions.get("window");

const CustomBaner: FunctionComponent = ({ navigation }) => {
  const showBaner = useSelector((state) => state.auth.showBaner);
  const [isDevice, setIsDevice] = useState("");
  const [banerVisible, setBanerVisible] = useState(true);

  useEffect(() => {
    getDeviceInfo();
  }, []);

  const getDeviceInfo = async () => {
    const response = await isEmulator();
    setIsDevice(!response);
  };

  if (showBaner && banerVisible) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, paddingTop: 5 }}>
          {isDevice
            ? "Device"
            : Platform.OS == "ios"
            ? "Simulator(IOS)"
            : "Emulator(Android)"}
        </Text>
        <View
          style={{
            width: width,
            justifyContent: "flex-end",
            flexDirection: "row",
            marginRight: 20,
          }}
        >
          <Button onPress={() => setBanerVisible(false)} title="Close" />
        </View>
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
    height: 80,
    borderWidth: 0.5,
    borderColor: "grey",
    backgroundColor: "#f2f2f2",
  },

  error: {
    color: "red",
  },
  button: {
    marginTop: 20,
  },
});

export default CustomBaner;
