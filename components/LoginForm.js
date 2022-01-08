import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import Input from "../Input";

const LoginForm = (props) => {
  return (
      <View style={styles.inputContainer}>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="on"
          autoCorrect={false}
          keyboardType="alphabet"
        />
      </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: "64%",
    textAlign: "center",
  },
});

export default LoginForm;
