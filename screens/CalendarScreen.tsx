import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../constants/colors";
import CalendarHeader from "../components/Calendar/CalendarHeader";

import { CalendarList } from "react-native-calendars";

export default function CalendarScreen(props): any {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <CalendarHeader />
      </View>
      <CalendarList
        minDate={"2021-09-13"}
        maxDate={"2022-06-10"}
        futureScrollRange={12}
        pastScrollRange={12}
        onDayPress={(day) => {
          /* console.log("selected day", day); */
        }}
        onDayLongPress={(day) => { }}
        firstDay={1}
        disableAllTouchEventsForDisabledDays={true}
        displayLoadingIndicator={false}
        markingType={"period"}
        markedDates={{}}
        style={{
          height: "100%",
          backgroundColor: "#000",
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
    padding: 5,
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

