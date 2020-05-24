import React, { useState } from "react";
import type { FunctionComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
import { useSelector } from "react-redux";

import Baner from "../component/Baner";
import authReducer from "../redux/reducers/authReducer";

const Dashboard: FunctionComponent = () => {
  const { email } = useSelector((state) => state.auth.userDetails);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Baner />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{email} </Text>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
