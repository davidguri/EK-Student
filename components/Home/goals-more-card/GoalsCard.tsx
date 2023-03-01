import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Colors from "../../../constants/colors";

import GoalModal from "./GoalsModal";
import ToDoModal from "./ToDoModal";
import ProjectsModal from "./ProjectsModal";

export default function GoalsCard(props): any {
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
    <View style={styles.card}>
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
      <GoalModal visible={isOpenGoalModal} onCancel={toggleGoalModalHandler} />
      <ToDoModal visible={isOpenToDoModal} onCancel={toggleToDoModalHandler} />
      <ProjectsModal visible={isOpenProjectModal} onCancel={toggleProjectModalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 0,
  },

  buttonContainer: {
    width: "31%",
    backgroundColor: Colors.primary,
    borderRadius: 15,
    marginHorizontal: "1.5%",
  },

  buttonText: {
    fontSize: 22,
    fontWeight: "700",
    paddingVertical: 15,
    textAlign: "center",
  },
});
