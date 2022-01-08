import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Colors from "../constants/colors";
import Card from "./Card";
import AddGoalModal from "./AddGoalModal";

import BouncyCheckbox from "react-native-bouncy-checkbox";

const DATA = [
  {
    id: "1",
    title: "Live to see the next day",
  },
  {
    id: "2",
    title: "To be deleted",
  },
];

{
  /* This element will be replaced by Firebase */
}

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <BouncyCheckbox
        size={28}
        fillColor={Colors.opacity}
        unfillColor="transparent"
        text={title}
        iconStyle={{ borderColor: Colors.primary, borderWidth: 2 }}
        textStyle={{ fontSize: 20, color: "white" }}
      />
    </View>
  );
};

const GoalsCard = (props) => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  const [isOpenAddModal, setIsOpenAddModal] = useState(false);

  const closeModalHandler = () => {
    setIsOpenAddModal(false);
  };

  const addElement = () => {
    {
      /* Add new element */
    }
  };

  return (
    <Card style={styles.card}>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>Your Goals</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <TouchableOpacity
        onPress={() => setIsOpenAddModal(true)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <AddGoalModal
        visible={isOpenAddModal}
        onCancel={closeModalHandler}
        onSubmit={addElement}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 15,
  },

  cardTitleContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "rgba(79, 255, 227, 0.2)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardTitle: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },

  list: {
    paddingTop: 12,
  },

  item: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  button: {
    borderWidth: 4,
    width: "62%",
    marginHorizontal: "19%",
    borderColor: Colors.primary,
    borderRadius: 50,
    backgroundColor: Colors.opacity,
    marginTop: 28,
    marginBottom: 3,
  },

  buttonText: {
    color: Colors.primary,
    fontSize: 27.5,
    fontWeight: "700",
    paddingTop: 3.35,
    paddingBottom: 3.8,
    textAlign: "center",
  },
});

export default GoalsCard;
