import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight, Text, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";
import CalendarHeader from "../components/Calendar/CalendarHeader";
import Card from "../components/Other/Global/Card";

import { Calendar } from "react-native-calendars";

const EventComponent = ({ event, key }) => {
  const [isDetailed, setIsDetailed] = useState(false);
  const [isBlock, setIsBlock] = useState("none");

  function toggleView() {
    setIsDetailed(!isDetailed);
    if (isDetailed) {
      setIsBlock("flex")
    } else {
      setIsBlock("none")
    }
  }

  return (
    <TouchableOpacity onPress={toggleView} key={key}>
      <Card style={styles.eventItem}>
        <View>
          <Text style={styles.eventItemTitle}>{event.title}</Text>
          {/* @ts-ignore */}{/* This is to ignore the "display: `${isBlock}`" below as it threw an error. */}
          <Text style={{ display: `${isBlock}`, color: "white", marginTop: 5 }}>{event.details}</Text>
        </View>
        {isDetailed ? (
          <Ionicons
            name="chevron-up"
            color={Colors.primary}
            size={25}
          />
        ) : (
          <Ionicons
            name="chevron-down"
            color={Colors.primary}
            size={25}
          />
        )
        }
      </Card>
    </TouchableOpacity>
  )
}

const CalendarObject = () => {
  const events = [ // TODO: remove this from hardcoding (aka use firebase)
    { title: 'Maths Exam', date: '2023-04-17', time_start: "HH:MM", time_end: "HH:MM", duration: "HH:MM", teacher: "Ms. Sonila", details: "Lorem Ipsum Dolor Sit amet" },
    { title: 'English Quiz', date: '2023-04-17', time_start: "HH:MM", time_end: "HH:MM", duration: "HH:MM", teacher: "Ms. Morena", details: "Lorem Ipsum Dolor Sit amet" },
    { title: 'Albanian Essay', date: '2023-04-17', time_start: "HH:MM", time_end: "HH:MM", duration: "HH:MM", teacher: "Ms. Junilda", details: "Lorem Ipsum Dolor Sit amet" },
    { title: 'Albanian Project', date: '2023-04-17', time_start: "HH:MM", time_end: "HH:MM", duration: "HH:MM", teacher: "Ms. Junilda", details: "Lorem Ipsum Dolor Sit amet" },
    { title: 'Albanian Something', date: '2023-04-17', time_start: "HH:MM", time_end: "HH:MM", duration: "HH:MM", teacher: "Ms. Junilda", details: "Lorem Ipsum Dolor Sit amet" },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  let currentDate = (new Date()).toISOString().split('T')[0]
  let dateSelected = (selectedDate.replaceAll("-", " ")).split(" ").reverse().join(" ");

  const getEventsForDay = (date) => {
    return events.filter((event) => event.date === date);
  };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const windowHeight = Dimensions.get('window').height;
  const calendarHeight = windowHeight / 2.75

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
          height: calendarHeight,
          backgroundColor: "#000",
          marginBottom: 5,
        }}
        theme={{
          backgroundColor: "#000",
          calendarBackground: "#000",
          textSectionTitleColor: "#b6c1cd",
          todayTextColor: Colors.primary,
          dayTextColor: "#d9e1e8",
          textDisabledColor: "#2d4150",
          monthTextColor: Colors.primary,
          indicatorColor: "white",
          textDayFontWeight: "500",
          textMonthFontWeight: "900",
          textDayFontSize: 18,
          textMonthFontSize: 36,
          textDayHeaderFontSize: 14,
          textDayHeaderFontWeight: "700",
          arrowColor: "#fff",
          disabledArrowColor: '#2d4150',
          selectedDayTextColor: Colors.accent
        }}
      />
      <View style={{ width: "90%", marginHorizontal: "5%" }}>
        <Text style={styles.eventsTitle}>Events for {dateSelected}:</Text>
        <ScrollView style={{ height: (calendarHeight / 1.5) + 15 }} showsVerticalScrollIndicator={false}>
          {getEventsForDay(selectedDate).map((event, index) => (
            <EventComponent
              event={event}
              key={index}
            />
          ))}
        </ScrollView>
      </View>
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

  eventsTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "white",
    marginTop: 5,
    marginBottom: 15,
  },

  eventItem: {
    marginVertical: 5,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  eventItemTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
  },
});

