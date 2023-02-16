import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import Card from "../../Other/Global/Card";
import Colors from "../../../constants/colors";

import AddProjectModal from "./AddProjectModal";

const NewsProjectCard = (props) => {
  const [isOpenSubmitPage, setIsOpenSubmitPage] = useState(false);

  const closeModalHandler = () => {
    setIsOpenSubmitPage(false);
  };

  return (
    <Card style={styles.card}>
      <TouchableOpacity
        onPress={() => setIsOpenSubmitPage(true)}
      >
        <Text style={styles.buttonText}>Submit Project</Text>
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
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    backgroundColor: Colors.opacity,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: Colors.primary,
  },

  buttonText: {
    fontSize: 21,
    fontWeight: "800",
    padding: 5,
    textAlign: "center",
    color: Colors.primary,
  },
});

export default NewsProjectCard;
