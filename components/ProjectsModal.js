import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
  TextInput,
  StatusBar,
  FlatList,
} from "react-native";

import Colors from "../constants/colors";
import Card from "./Card";
import AddGoalModal from "./AddGoalModal";

import BouncyCheckbox from "react-native-bouncy-checkbox";

const DATA = [
  {
    id: "1",
    title: "Launch MVP in April",
  },
  {
    id: "2",
    title: "Test Goal",
  },
];

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <BouncyCheckbox
        size={28.25}
        fillColor={Colors.opacity}
        unfillColor="transparent"
        text={title}
        iconStyle={{ borderColor: Colors.primary, borderWidth: 2 }}
        textStyle={{ fontSize: 20, color: "white" }}
      />
    </View>
  );
};

const ProjectsModal = (props) => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  const [isOpenAddModal, setIsOpenAddModal] = useState(false);

  const closeModalHandler = () => {
    setIsOpenAddModal(false);
  };

  return (
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Projects</Text>
            <TouchableOpacity
              onPress={props.onCancel}
              style={styles.buttonCancel}
            >
              <Text style={styles.buttonCancelText}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              style={styles.list}
              scrollEnabled={false}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#000",
    borderWidth: 4,
    borderTopColor: Colors.primary,
    height: "100%",
    alignItems: "center",
    padding: 7.5,
  },

  header: {
    width: "95%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "800",
    paddingVertical: 18,
  },

  list: {
    paddingTop: 12,
  },

  item: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  buttonCancelText: {
    color: "rgb(255, 69, 58)",
    fontSize: 18,
    fontWeight: "800",
    padding: 5,
    paddingHorizontal: 10,
  },

  buttonCancel: {
    borderWidth: 3,
    borderColor: Colors.red,
    borderRadius: 50,
    backgroundColor: Colors.redOpacity,
  },

  button: {
    width: "70%",
    marginHorizontal: "15%",
    backgroundColor: Colors.opacity,
    borderRadius: 25,
    borderColor: Colors.primary,
    borderWidth: 4,
    marginTop: 10,
    marginBottom: 8,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "700",
    padding: 10,
    textAlign: "center",
    color: Colors.primary,
  },

  body: {
    width: "100%",
  },

  footer: {
    width: "100%",
  },
});

export default ProjectsModal;
