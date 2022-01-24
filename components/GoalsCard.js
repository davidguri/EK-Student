import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import Colors from "../constants/colors";
import Card from "./Card";

import GoalModal from "./GoalsModal";
import ToDoModal from "./ToDoModal";

const GoalsCard = (props) => {
  const [isOpenGoalModal, setIsOpenGoalModal] = useState(false);
  const [isOpenToDoModal, setIsOpenToDoModal] = useState(false);

  const toggleGoalModalHandler = () => {
    setIsOpenGoalModal(!isOpenGoalModal);
  };

  const toggleToDoModalHandler = () => {
    setIsOpenToDoModal(!isOpenToDoModal);
  };

  const addElement = () => {
    {
      /* Add new element */
    }
  };

  return (
    <Card style={styles.card}>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>Goals and To-Do's</Text>
      </View>
      <View style={styles.bodySection}>
        <TouchableOpacity
          onPress={toggleGoalModalHandler}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Goals</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleToDoModalHandler}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>To-Do's</Text>
        </TouchableOpacity>
      </View>
      <GoalModal visible={isOpenGoalModal} onCancel={toggleGoalModalHandler} />
      <ToDoModal visible={isOpenToDoModal} onCancel={toggleToDoModalHandler} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    width: "47.75%",
  },

  cardTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardTitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },

  buttonContainer: {
    width: "100%",
    backgroundColor: Colors.opacity,
    borderRadius: 18,
    borderColor: Colors.primary,
    borderWidth: 4,
    marginTop: 8,
    marginBottom: 6,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    padding: 9,
    textAlign: "center",
    color: Colors.primary,
  },
});

export default GoalsCard;
