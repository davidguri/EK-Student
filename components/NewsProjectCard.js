import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import Card from "./Card";
import Colors from "../constants/colors";

import AddProjectModal from "./AddProjectModal";
import AddGoalModal from "./AddGoalModal";

const NewsProjectCard = (props) => {
  const [isOpenSubmitPage, setIsOpenSubmitPage] = useState(false);

  const closeModalHandler = () => {
    setIsOpenSubmitPage(false);
  };

  return (
    <Card style={styles.card}>
      <Text style={styles.cardTitle}>Submit Project</Text>
      <TouchableOpacity
        onPress={() => setIsOpenSubmitPage(true)}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <AddProjectModal
        visible={isOpenSubmitPage}
        onCancel={closeModalHandler}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "47.75%",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 8,
    paddingBottom: 12,
    borderRadius: 22,
  },

  cardTitle: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
    paddingVertical: 5,
  },

  buttonContainer: {
    width: "100%",
    backgroundColor: Colors.opacity,
    borderRadius: 18,
    borderColor: Colors.primary,
    borderWidth: 4,
    marginTop: 10,
    marginBottom:8,
  },

  buttonText: {
    fontSize: 19,
    fontWeight: "700",
    padding: 9,
    textAlign: "center",
    color: Colors.primary,
  },
});

export default NewsProjectCard;
