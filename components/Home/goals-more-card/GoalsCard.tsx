import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import Colors from "../../../constants/colors";
import Card from "../../Other/Global/Card";

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
    <Card style={styles.card}>
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
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 14,
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: Colors.opacity,
    borderRadius: 18,
    borderColor: Colors.primary,
    borderWidth: 3.8,
    marginHorizontal: 4,
  },

  buttonText: {
    fontSize: 19,
    fontWeight: "700",
    padding: 9,
    margin: 0,
    textAlign: "center",
    color: "#fff",
  },
});
