import React from "react";
import { StyleSheet, TextInput } from "react-native";

import Colors from "../../../constants/colors";

export default function Input(props): any {
  return (
    <TextInput
      secureTextEntry={props.bool}
      {...props}
      style={{ ...styles.input, ...props.style }}
      keyboardAppearance="dark"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 55,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 22,
    marginVertical: 10,
  },
});
