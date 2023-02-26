import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../constants/colors";
import CalendarHeader from "../components/Calendar/CalendarHeader";

import { CalendarList } from "react-native-calendars";

export default function CalendarScreen(props): any {

  const daysOff = { key: "dayOff", color: Colors.daysOff.main, selectedDotColor: Colors.daysOff.main }
  const classes = { key: "classes", color: Colors.classes.main, selectedDotColor: Colors.classes.main }
  const tests = { key: "tests", color: Colors.tests.main, selectedDotColor: Colors.tests.main }
  const events = { key: "events", color: Colors.events.main, selectedDotColor: Colors.events.main }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <CalendarHeader />
      </View>
      <CalendarList
        minDate={"2023-01-01"}
        maxDate={"2023-06-30"}
        futureScrollRange={9}
        pastScrollRange={9}
        onDayPress={(day) => {
          /* console.log("selected day", day); */
        }}
        onDayLongPress={(day) => { }}
        firstDay={1}
        disableAllTouchEventsForDisabledDays={true}
        displayLoadingIndicator={false}
        markingType={"multi-dot"}
        markedDates={{
          "2023-02-22": { dots: [events, daysOff], textColor: "black" },
          "2023-02-23": { color: Colors.tests.main, textColor: "black" },
          "2023-02-24": { color: Colors.events.main, textColor: "black" },
          "2023-02-25": { dots: [classes, tests] },
        }}
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
          textDayFontWeight: "500",
          textMonthFontWeight: "700",
          textDayFontSize: 18,
          textMonthFontSize: 34,
          textDayHeaderFontSize: 14,
          textDayHeaderFontWeight: "700",
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
    width: "92%",
    marginHorizontal: "4%",
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

