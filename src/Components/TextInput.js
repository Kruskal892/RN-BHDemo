import React from "react";
import { View, StyleSheet, Text, TextInput as Input } from "react-native";
// import { TextInput as Input } from 'react-native'
import { theme } from "../style/theme";

export default function TextInput({
  control,
  name,
  touched,
  label,
  errorText,
  description,
  ...props
}) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange, onBlur } }) => (
          <Input
            style={styles.input}
            selectionColor={theme.colors.primary}
            underlineColor="transparent"
            mode="outlined"
            {...props}
          />
        )}
      />

      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText && touched ? (
        <Text style={styles.error}>{errorText}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    paddingBottom: 8,
  },
  container: {
    width: "100%",
    // marginVertical: 12,
  },
  input: {
    backgroundColor: "white",
    height: 50,
    borderWidth: 1,
    // borderRadius: 10,
    width: 250,
    paddingLeft: 20,
  },
  description: {
    fontSize: 13,
    color: theme.colors.secondary,
    paddingTop: 8,
    fontWeight: "bold",
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingBottom: 15,
  },
});
