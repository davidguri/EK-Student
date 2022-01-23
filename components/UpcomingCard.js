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

  const Item = ({ title }) => (
    <TouchableOpacity onPress={toggleModalHandler}>
      <EventElement title={title} color={DATA.colors} />
    </TouchableOpacity>
  );

  const toggleModalHandler = () => {
    setModalVisible(!isModalVisible);
  };

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <Card style={styles.card}>
      <Text style={styles.cardTitle}>For Today</Text>
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
        animationInTiming={420}
        animationOutTiming={380}
      >
        <View style={styles.main}>
        {/* Background color of the modal should be determined by the color of the event. */}
          <View style={styles.header}>
            <View style={styles.textContainer}>
              <Text style={styles.headerTitle}>"EVENT TITLE"</Text>
              <Text style={styles.headerSubtitle}>"TYPE OF EVENT"</Text>
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={toggleModalHandler}
            >
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.mainContent}>
            <View style={styles.timeSection}>
            <Text style={styles.timeText}>Time of event</Text>
            <Text style={styles.time}>"HH:MM"</Text>
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: Colors.primary,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
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

  buttonContainer: {
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 50,
    backgroundColor: "transparent",
    marginVertical: 5,
  },

  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "800",
    padding: 8,
    paddingHorizontal: 13,
  },

  timeSection: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  timeText: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },

  time: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },
});

export default UpcomingCard;
