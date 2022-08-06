import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import TextInput from "../../Components/TextInput";
import { loginSuccess } from "../../Redux/redux";
import { login } from "../../Redux/actions";
import Background from "../../Components/Background";
import { useForm, Controller } from "react-hook-form";

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required("Username can not be empty")
      .min(2, "Password longer than 2 characters"),
    password: yup
      .string()
      .min(5)
      .required("Password can not be empty")
      .min(6, "Password longer than 6 characters"),
  });
  const {
    // values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    // errors,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    onSubmit: () => {
      setIsLoading(true);
      dispatch(
        login({
          name: values.username,
          password: values.password,
          loggedIn: true,
        })
      );
      if (
        values.username &&
        values.password &&
        values.username === "minh123" &&
        values.password === "123456"
      ) {
      } else {
        setIsLoading(false);
        alert("Name or password is incorrect");
      }
    },
    validationSchema,
  });
  return (
    <Background>
      <View style={styles.container}>
        <Header>YOUR ART MUSEUM</Header>
        <Text
          style={{
            color: "white",
            textAlign: "left",
            marginLeft: -100,
            paddingVertical: 20,
          }}
        >
          151 3rd St{"\n"}
          San Francisco, CA 94103
        </Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, values } }) => (
            <TextInput
              label="name"
              placeholder="Username"
              value={values.username}
              onChangeText={useCallback(handleChange("username"), [])}
              autoCompleteType="name"
              errorText={errors.username}
              onBlur={handleBlur("username")}
              touched={touched.username}
            />
          )}
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, values } }) => (
            <TextInput
              label="password"
              placeholder="Password"
              returnKeyType="done"
              value={values.password}
              onChangeText={useCallback(handleChange("password"), [])}
              secureTextEntry
              errorText={errors.password}
              onBlur={handleBlur("password")}
              touched={touched.password}
            />
          )}
        />

        {/* <TextInput
          label="name"
          placeholder="Username"
          value={values.username}
          onChangeText={useCallback(handleChange("username"), [])}
          autoCompleteType="name"
          errorText={errors.username}
          onBlur={handleBlur("username")}
          touched={touched.username}
        />
        <TextInput
          label="password"
          placeholder="Password"
          returnKeyType="done"
          value={values.password}
          onChangeText={useCallback(handleChange("password"), [])}
          secureTextEntry
          errorText={errors.password}
          onBlur={handleBlur("password")}
          touched={touched.password}
        /> */}

        <Text
          onPress={() => {}}
          style={{
            color: "white",
            fontSize: "12px",
            marginRight: -120,
            paddingTop: 5,
          }}
        >
          Forgot your password?
        </Text>

        <Button title="Submit" mode="contained" onPress={handleSubmit(onSubmit)}>
          Login
        </Button>

        <Text
          onPress={() => {}}
          style={{
            color: "white",
            fontSize: "12px",
            marginLeft: -120,
            paddingTop: 5,
          }}
        >
          Don't have an account!
        </Text>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#F5FCFF",
    padding: 24,
    textAlign: "center",
    // backgroundColor: "white",
    // fontSize: 30,
  },
});
