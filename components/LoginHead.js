import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Platform,
} from "react-native";

import Logo from "../assets/icon-original-1024.png";

const LoginHead = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.head}>
        <Image source={Logo} style={{ width: 85, height: 45 }} />
        <Text style={styles.headTitle}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  head: {
    width: "90%",
    marginHorizontal: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headTitle: {
    fontSize: 20,
    color: "#fff",
    opacity: 0.45,
    fontWeight: "700",
    paddingRight: 12.5,
  },
});

export default LoginHead;
