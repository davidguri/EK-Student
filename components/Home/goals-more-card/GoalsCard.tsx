import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import Colors from "../../../constants/colors";

import GoalModal from "./GoalsModal";
import ProjectsModal from "./ProjectsModal";

export default function GoalsCard(props): any {
  const [isOpenGoalModal, setIsOpenGoalModal] = useState(false);
  const [isOpenProjectModal, setIsOpenProjectModal] = useState(false);

  const toggleGoalModalHandler = () => {
    setIsOpenGoalModal(!isOpenGoalModal);
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
        onPress={toggleProjectModalHandler}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Projects</Text>
      </TouchableOpacity>
      <GoalModal visible={isOpenGoalModal} onCancel={toggleGoalModalHandler} />
      <ProjectsModal visible={isOpenProjectModal} onCancel={toggleProjectModalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 0,
  },

  buttonContainer: {
    width: "48%",
    backgroundColor: Colors.primary,
    borderRadius: 15,
    marginHorizontal: "1%",
  },

  buttonText: {
    fontSize: 23,
    fontWeight: "700",
    paddingVertical: 15,
    textAlign: "center",
  },
});
