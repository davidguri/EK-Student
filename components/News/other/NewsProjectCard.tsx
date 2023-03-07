import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../../constants/colors";

import AddProjectModal from "./AddProjectModal";

export default function NewsProjectCard(props): any {
  const [isOpenSubmitPage, setIsOpenSubmitPage] = useState(false);

  const closeModalHandler = () => {
    setIsOpenSubmitPage(false);
  };

  return (
    <TouchableOpacity
      onPress={() => setIsOpenSubmitPage(true)}
      style={styles.card}
    >

      <Text style={styles.buttonText}>Submit Project</Text>
      <AddProjectModal
        visible={isOpenSubmitPage}
        onCancel={closeModalHandler}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: Colors.opacity,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: Colors.primary,
  },

  buttonText: {
    fontSize: 23,
    fontWeight: "800",
    textAlign: "center",
    color: Colors.primary,
  },
});
