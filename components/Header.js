import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";
import SettingsScreen from "../screens/SettingsScreen";

const Header = (props) => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);

  const closeModalHandler = () => {
    setIsOpenSettings(false);
  };

  var username = "David";

  var objDate = new Date();
  var hours = objDate.getHours();
  if (hours >= 0 && hours < 12) {
    var HelloText = "Good Morning," + " " + username;
  } else if (hours >= 12 && hours < 18) {
    var HelloText = "Good Afternoon," + " " + username;
  } else {
    var HelloText = "Good Evening," + " " + username;
  }

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerTitle}>{props.title}</Text>
        <Text style={styles.headerSubtitle}>{HelloText}</Text>
      </View>

      <TouchableOpacity onPress={() => setIsOpenSettings(true)}>
        <Ionicons
          name="person-circle-outline"
          color={Colors.primary}
          size={65}
        />
      </TouchableOpacity>
      <SettingsScreen visible={isOpenSettings} onCancel={closeModalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "90%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 12,
  },

  headerSubtitle: {
    color: "#666",
    fontSize: 21,
    fontWeight: "bold",
    paddingBottom: 12,
  },

  iconContainer: {
    borderWidth: 3,
    borderRadius: 50,
    borderColor: Colors.accent,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
