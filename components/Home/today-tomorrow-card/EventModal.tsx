import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";

import Colors from "../../../constants/colors";

export default function EventModal(props): any {
  return (
    <Modal
      isVisible={props.isVisible}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
      onBackdropPress={props.onBackdropPress}
      animationInTiming={450}
      animationOutTiming={350}
    >
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.headerTitle}>{props.title}</Text>
            <Text style={styles.headerSubtitle}>Type of event</Text>
          </View>
        </View>
        <View>
          <View style={[styles.section, styles.column]}>
            <View style={[styles.section, styles.row, { paddingBottom: 0 }]}>
              <Text style={styles.timeText}>Start of event:</Text>
              <Text style={styles.time}>HH:MM</Text>
            </View>
            <View style={[styles.section, styles.row, { paddingTop: 0 }]}>
              <Text style={styles.timeText}>End of event:</Text>
              <Text style={styles.time}>HH:MM</Text>
            </View>
          </View>
          <View style={[styles.section, styles.column]}>
            <Text style={styles.description}>Event Description:</Text>
            <Text style={styles.descriptionBody}>
              Lorem Ipsum Dolor Sit Amet
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: Colors.primary,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },

  textContainer: {
    flexDirection: "column",
  },

  headerTitle: {
    fontSize: 26,
    color: "black",
    fontWeight: "700",
  },

  headerSubtitle: {
    fontSize: 14,
    color: "black",
  },

  section: {
    paddingTop: 7,
    paddingBottom: 5,
  },

  column: {
    flexDirection: "column",
  },

  row: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  timeText: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },

  time: {
    fontSize: 19,
    fontWeight: "600",
    color: "black",
  },

  description: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },

  descriptionBody: {
    paddingTop: 4,
  },
});
