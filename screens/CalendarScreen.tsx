import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";
import CalendarHeader from "../components/Calendar/CalendarHeader";

import { Calendar } from "react-native-calendars";

const events = [
  { title: 'Event 1', date: '2023-04-01' },
  { title: 'Event 2', date: '2023-04-01' },
  { title: 'Event 3', date: '2023-04-02' },
  { title: 'Event 4', date: '2023-04-03' },
];

const CalendarObject = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));

  const getEventsForDay = (date: any) => {
    return events.filter((event) => event.date === date);
  };

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };

  let currentDate = (new Date()).toISOString().split('T')[0]

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <Calendar
        enableSwipeMonths={true}
        minDate={"2023-01-01"}
        maxDate={"2023-06-16"}
        futureScrollRange={9}
        pastScrollRange={9}
        firstDay={1}
        current={currentDate}
        onDayPress={onDayPress}
        disableAllTouchEventsForDisabledDays={true}
        displayLoadingIndicator={false}
        markingType={"multi-dot"}
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
          textDayFontWeight: "500",
          textMonthFontWeight: "700",
          textDayFontSize: 18,
          textMonthFontSize: 34,
          textDayHeaderFontSize: 14,
          textDayHeaderFontWeight: "700",
          arrowColor: "#fff",
          disabledArrowColor: '#2d4150',
        }}
      />
      <Text style={{ color: "white", fontSize: 15 }}>Events for {selectedDate}:</Text>
      {getEventsForDay(selectedDate).map((event, index) => (
        <Text style={{ color: "white", fontSize: 15 }} key={index}>{event.title}</Text>
      ))}
    </View>
  );
}

const TimetableObject = () => {
  return (
    <Text style={{ color: "white" }}>Timetable</Text>
  );
}

export default function CalendarScreen(props): any {

  const [selected, setSelected] = useState(1);

  let iconColor1: string, iconColor2: string;
  if (selected == 1) {
    iconColor1 = "black";
    iconColor2 = Colors.primary;
  } else {
    iconColor2 = "black";
    iconColor1 = Colors.primary;
  }

  const [isOpenTimetable, setIsOpenTimetable] = useState(false)
  const [isOpenCalendar, setIsOpenCalendar] = useState(true)

  const toggleTimetableModal = () => {
    setSelected(2)
    setIsOpenTimetable(!isOpenTimetable)
    setIsOpenCalendar(!isOpenCalendar)
  }

  const toggleCalendarModal = () => {
    setSelected(1)
    setIsOpenCalendar(!isOpenCalendar)
    setIsOpenTimetable(!isOpenTimetable)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <CalendarHeader />
        <View style={styles.headerButtonContainer}>
          <TouchableHighlight
            onPress={toggleCalendarModal}
            style={[
              styles.buttonLeftContainer,
              selected === 1 ? { backgroundColor: Colors.primary } : null,
            ]}
          >
            <Ionicons
              name="calendar"
              color={iconColor1}
              size={25}
              style={{ padding: 5 }}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={toggleTimetableModal}
            style={[
              styles.buttonRightContainer,
              selected === 2 ? { backgroundColor: Colors.primary } : null,
            ]}
          >
            <Ionicons
              name="apps"
              color={iconColor2}
              size={25}
              style={{ padding: 5 }}
            />
          </TouchableHighlight>
        </View>
      </View>
      {isOpenCalendar ? (
        <CalendarObject />
      ) : (
        <TimetableObject />
      )}
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

