import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { FunctionComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  Switch,
  SafeAreaView,
} from "react-native";

import { updateBaner, updateLoggedIn } from "../redux/actions/auth";
import Baner from "../component/Baner";

const Setting: FunctionComponent = () => {
  const dispatch = useDispatch();
  const showBaner = useSelector((state) => state.auth.showBaner);

  const onSubmit = () => {
    dispatch(updateLoggedIn(false));
  };
  const toggleSwitch = (value) => {
    dispatch(updateBaner(value));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Baner />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Toggle Baner</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={showBaner ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={showBaner}
        />
        <Button title="Log out" onPress={onSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Setting;
