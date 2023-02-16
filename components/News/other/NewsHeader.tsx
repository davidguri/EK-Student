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

import Colors from "../../../constants/colors";
import SettingsScreen from "../../../screens/SettingsScreen";

const NewsHeader = (props) => {
  const [isOpenSettings, setIsOpenSettings] = useState(false);

  const closeModalHandler = () => {
    setIsOpenSettings(false);
  };

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerTitle}>{props.title}</Text>
        <Text style={styles.headerSubtitle}>{props.sub}</Text>
      </View>

      <TouchableOpacity onPress={() => setIsOpenSettings(true)}>
        <Ionicons
          name="person-circle-outline"
          color={Colors.primary}
          size={68}
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
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 12,
  },

  headerSubtitle: {
    color: "#666",
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 12,
  },
});

export default NewsHeader;
