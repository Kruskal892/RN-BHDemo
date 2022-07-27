import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Button from "../../Components/Button";
import { popUpError } from "../Ultis/PopupWarning";

const Logout = ({ navigation }) => {
// Click to Logout
  const onLogOut = () => {
      navigation.navigate("Login Screen");
  };

  // Logout Screen
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Button text={"Logout"} onPress={onLogOut} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "white",
  },
});

export default Logout;
