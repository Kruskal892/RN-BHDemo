import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../style/theme";

export default function Header(props) {
  return <Text style={styles.header} {...props} />;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: "white",
    // fontWeight: "bold",
    paddingVertical: 12,
    // flex: 1,
    // flexShrink: 1,
    width: '80%',
    marginLeft: -50,
    lineHeight: 50,
    marginBottom: 30
  },
});
