import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Colors from "../../../constants/colors";
import Card from "../../Other/Global/Card";

import GoalModal from "./GoalsModal";
import ToDoModal from "./ToDoModal";
import ProjectsModal from "./ProjectsModal";

const GoalsCard = (props) => {
  const [isOpenGoalModal, setIsOpenGoalModal] = useState(false);
  const [isOpenToDoModal, setIsOpenToDoModal] = useState(false);
  const [isOpenProjectModal, setIsOpenProjectModal] = useState(false);

  const toggleGoalModalHandler = () => {
    setIsOpenGoalModal(!isOpenGoalModal);
  };

  const toggleToDoModalHandler = () => {
    setIsOpenToDoModal(!isOpenToDoModal);
  };

  const toggleProjectModalHandler = () => {
    setIsOpenProjectModal(!isOpenProjectModal);
  };

  return (
    <Card style={styles.card}>
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
          <Text style={styles.buttonText}>Tasks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleProjectModalHandler}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Projects</Text>
        </TouchableOpacity>
      </View>
      <GoalModal visible={isOpenGoalModal} onCancel={toggleGoalModalHandler} />
      <ToDoModal visible={isOpenToDoModal} onCancel={toggleToDoModalHandler} />
      <ProjectsModal visible={isOpenProjectModal} onCancel={toggleProjectModalHandler} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 22,
    width: "48%",
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
    borderRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 4.3,
    marginTop: 7.85,
    marginBottom: 7.85,
  },

  buttonText: {
    fontSize: 18.75,
    fontWeight: "700",
    padding: 9.35,
    textAlign: "center",
    color: Colors.primary,
  },
});

export default GoalsCard;
