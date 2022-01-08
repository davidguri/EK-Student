import React from "react";
import { StyleSheet, TextInput } from "react-native";

import Colors from "../constants/colors";

const Input = (props) => {
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
    height: 50,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 20,
    marginVertical: 10,
  },
});

export default Input;
