import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from "react-native";
import React from "react";

// Create a Button instance 

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle} >
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnStyle: {
    height: 48,
    borderWidth: 1,
    backgroundColor: "blue",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
  },
});
