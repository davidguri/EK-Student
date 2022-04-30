import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";
import CalendarHeader from "../components/Calendar/CalendarHeader";

import CalendarListModal from "../components/Calendar/CalendarListModal";
import CalendarAgendaModal from "../components/Calendar/CalendarAgendaModal";

import { CalendarList, Agenda } from "react-native-calendars";

const CalendarScreen = (props) => {
  const [selected, setSelected] = useState(1);

  const [isOpenModalAgenda, setIsOpenModalAgenda] = useState(false);
  const [isOpenModalList, setIsOpenModalList] = useState(true);

  if (selected == 1) {
    var iconColor1 = "black";
    var iconColor2 = Colors.primary;
    {
      /* isOpenModalList(true)
        isOpenModalAgenda(false) */
    }
  } else {
    var iconColor2 = "black";
    var iconColor1 = Colors.primary;
    {
      /* isOpenModalAgenda(true)
        isOpenModalList(false) */
    }
  }

  return (
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
      <CalendarList
        minDate={"2021-09-13"}
        maxDate={"2022-06-21"}
        onDayPress={(day) => {
          /* console.log("selected day", day); */
        }}
        onDayLongPress={(day) => {}}
        firstDay={1}
        disableAllTouchEventsForDisabledDays={true}
        displayLoadingIndicator={false}
        markingType={"period"}
        markedDates={{}}
        style={{
          height: "100%",
          backgroundColor: "#000",
          color: "#fff",
        }}
        theme={{
          backgroundColor: "#000",
          calendarBackground: "#000",
          textSectionTitleColor: "#b6c1cd",
          todayTextColor: Colors.accent,
          dayTextColor: "#d9e1e8",
          textDisabledColor: "#2d4150",
          monthTextColor: Colors.primary,
          indicatorColor: "white",
          textDayFontWeight: "300",
          textMonthFontWeight: "700",
          textDayHeaderFontWeight: "400",
          textDayFontSize: 17.5,
          textMonthFontSize: 30,
          textDayHeaderFontSize: 15,
          textDayHeaderFontWeight: "600",
        }}
      />
    </View>
  );
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

export default CalendarScreen;
