import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Colors from "../../../constants/colors";
import EventModal from "./EventModal";

export default function EventElement(props): any {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModalHandler = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <TouchableOpacity onPress={toggleModalHandler}>
      <View style={[styles.eventElement, { borderColor: `${props.color}`, backgroundColor: `${props.color}35` }]}>
        <Text style={styles.eventTitle}>{props.title}</Text>
        <EventModal isVisible={isModalVisible} onBackdropPress={toggleModalHandler} title={props.title} color={props.color} description={props.description} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  eventElement: {
    padding: 17,
    backgroundColor: Colors.opacity,
    borderColor: Colors.primary,
    borderWidth: 3.5,
    borderRadius: 15,
    width: "100%",
  },

  eventTitle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
});
