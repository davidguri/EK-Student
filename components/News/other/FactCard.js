import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import Card from "../../Other/Global/Card";
import Colors from "../../../constants/colors";

const FactCard = (props) => {
  const [isOpenSubmitPage, setIsOpenSubmitPage] = useState(false);

  const closeModalHandler = () => {
    setIsOpenSubmitPage(false);
  };

  return (
    <Card style={styles.card}>
      <Text style={styles.cardTitle}>Submit Project</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "95%",
    marginHorizontal: "2.5%",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 8,
    paddingBottom: 12,
    borderRadius: 22,
  },

  cardTitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    paddingVertical: 7,
    marginHorizontal: 1,
  },

  buttonContainer: {
    width: "100%",
    backgroundColor: Colors.opacity,
    borderRadius: 18,
    borderColor: Colors.primary,
    borderWidth: 4,
    marginTop: 8,
    marginBottom: 8,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    padding: 9,
    textAlign: "center",
    color: Colors.primary,
  },
});

export default FactCard;
