import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import UserInput from "../../Components/UserInput";
import Button from "../../Components/Button";
import validator from "../Ultis/Validation";
import {  popUpError } from "../Ultis/PopupWarning";

const Login = ({ navigation }) => {
  const [state, setState] = useState({
    isLoading: false,
    email: "",
    password: "",
    isSecure: true,
  });

  const { isSecure, isLoading, email, password } = state;

  const updateState = (data) => setState(() => ({ ...state, ...data }));

  // Check if the email and password are valid
  const isValidData = () => {
    const error = validator({
      email,
      password,
    });
    if (error) {
      popUpError(error);
      return false;
    }
    return true;
  };

  // Check if the user has typed valid email and password
  const onLoginClick = () => {
    const checkValid = isValidData();
    if (checkValid) {
      navigation.navigate("Logout");
    }
  };

  // Login Screen
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <ScrollView>

        <UserInput
          label={"Email"}
          placeholder={"Enter your email"}
          onChangeText={(email) => updateState({ email })}
        />
        <UserInput
          label={"Password"}
          placeholder={"Enter your password"}
          secureTextEntry={true}
          onChangeText={(password) => updateState({ password })}
        />

        <Button text={"Login"} onPress={onLoginClick} />
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

export default Login;
