import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import Card from "../../Other/Global/Card";
import Colors from "../../../constants/colors";

import AddProjectModal from "./AddProjectModal";

export default function NewsProjectCard(props): any {
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
    justifyContent: "center",
    paddingVertical: 6,
    backgroundColor: Colors.opacity,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: Colors.primary,
  },

  buttonText: {
    fontSize: 21,
    fontWeight: "800",
    paddingVertical: 6,
    textAlign: "center",
    color: Colors.primary,
  },
});
