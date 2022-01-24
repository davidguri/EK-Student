import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import Modal from "react-native-modal";

import Card from "./Card";
import EventElement from "./EventElement";

import Colors from "../constants/colors";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    colors: Colors.classes.main,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    colors: Colors.events.main,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    colors: Colors.daysOff.main,
  },
  {
    id: "jwiejiwefqijwfowjeiguoqwjrojef",
    title: "Fourth Item",
    colors: Colors.classes.main,
  },
];

const UpcomingCard = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const Item = ({ title, colors }) => (
    <TouchableOpacity onPress={toggleModalHandler}>
      <EventElement title={title} colors={{ colors }} />
    </TouchableOpacity>
  );

  const toggleModalHandler = () => {
    setModalVisible(!isModalVisible);
  };

  const renderItem = ({ item }) => (
    <Item title={item.title} colors={item.colors} />
  );

  return (
    <Card style={styles.card}>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>For Today</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      ></FlatList>

      <Modal
        isVisible={isModalVisible}
        backgroundColor={"transparent"}
        style={{ margin: 0 }}
        hideModalContentWhileAnimating={true}
        onBackdropPress={toggleModalHandler}
        animationInTiming={450}
        animationOutTiming={350}
      >
        <View style={styles.main}>
          {/* Background color of the modal should be determined by the color of the event. */}
          <View style={styles.header}>
            <View style={styles.textContainer}>
              <Text style={styles.headerTitle}>"EVENT TITLE"</Text>
              <Text style={styles.headerSubtitle}>"TYPE OF EVENT"</Text>
            </View>
          </View>
          <View style={styles.mainContent}>
            <View style={[styles.section, styles.column]}>
              <View style={[styles.section, styles.row, { paddingBottom: 0 }]}>
                <Text style={styles.timeText}>Start of event:</Text>
                <Text style={styles.time}>"HH:MM"</Text>
              </View>
              <View style={[styles.section, styles.row, { paddingTop: 0 }]}>
                <Text style={styles.timeText}>End of event:</Text>
                <Text style={styles.time}>"HH:MM"</Text>
              </View>
            </View>
            <View style={[styles.section, styles.column]}>
              <Text style={styles.description}>Event Description:</Text>
              <Text style={styles.descriptionBody}>
                "Lorem Ipsum Dolor Sit Amet"
              </Text>
            </View>
          </View>
          <View style={styles.footer}></View>
        </View>
      </Modal>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 18,
  },

  cardTitle: {
    fontSize: 26,
    color: "white",
    paddingBottom: 15,
    fontWeight: "bold",
  },

  main: {
    margin: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: Colors.primary,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  textContainer: {
    flexDirection: "column",
  },

  headerTitle: {
    fontSize: 26,
    color: "black",
    fontWeight: "700",
    paddingBottom: 3,
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

export default UpcomingCard;
