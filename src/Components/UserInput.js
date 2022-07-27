import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

// User input styles for login screen

const UserInput = ({
  label,
  value,
  placeholder,
  isSecure,
  inputStyle,
  onChangeText,
  ...props
}) => {
  return (
    <View style={{marginBottom: 16}}>
      <Text style={{ fontSize: 16, marginBottom: 8, fontWeight: "bold" }}>
        {label}
      </Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        placeholderTextColor="gray"
        // secureTextEntry={true}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 48,
    borderWidth: 1,
    borderColor: "gray",
    color: "black",
    paddingHorizontal: 16,

  },
});

export default UserInput;
