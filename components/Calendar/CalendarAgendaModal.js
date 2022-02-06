import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Modal,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Colors from "../../constants/colors";
import CalendarHeader from "./CalendarHeader";
import { Agenda } from "react-native-calendars";

const CalendarAgendaModal = (props) => {
  const [selected, setSelected] = useState(1);

  if (selected == 1) {
    var iconColor1 = "black";
    var iconColor2 = Colors.primary;
  } else {
    var iconColor2 = "black";
    var iconColor1 = Colors.primary;
  }

  <View style={styles.screen}>
    <View style={styles.header}>
      <CalendarHeader />
      <View style={styles.headerButtonContainer}>
        <TouchableHighlight
          onPress={() => setSelected(1)}
          style={[
            styles.buttonLeftContainer,
            selected === 1 ? { backgroundColor: Colors.primary } : null,
          ]}
        >
          <Ionicons
            name="calendar"
            color={iconColor1}
            size={22.75}
            style={{ padding: 2.75 }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => setSelected(2)}
          style={[
            styles.buttonRightContainer,
            selected === 2 ? { backgroundColor: Colors.primary } : null,
          ]}
        >
          <Ionicons
            name="list"
            color={iconColor2}
            size={22.75}
            style={{ padding: 2.75 }}
          />
        </TouchableHighlight>
      </View>
    </View>
    {/* <Agenda /> here!!!! */}
  </View>;
};

const styles = StyleSheet.create({
  screen: {
    padding: 7.5,
  },

  header: {
    width: "90%",
    marginHorizontal: "5%",
    paddingBottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(79, 255, 227, 0.2)",
  },

  headerButtonContainer: {
    width: "auto",
    flexDirection: "row",
    height: "auto",
  },

  buttonLeftContainer: {
    borderWidth: 2.5,
    borderRightWidth: 1.35,
    borderColor: Colors.primary,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 4.75,
    paddingHorizontal: 5.3,
  },

  buttonRightContainer: {
    borderWidth: 2.5,
    borderLeftWidth: 1.35,
    borderColor: Colors.primary,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 4.75,
    paddingHorizontal: 5.3,
  },
});

export default CalendarAgendaModal;
