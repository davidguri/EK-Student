import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  Switch,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Modal from "react-native-modal";

import Colors from "../../../constants/colors";
import Card from "../../Other/Global/Card";
import AddGoalModal from "./AddGoalModal";

import BouncyCheckbox from "react-native-bouncy-checkbox";

const DATA = [
  {
    id: "1",
    title: "Launch MVP in April",
    importance: "!",
  },
  {
    id: "2",
    title: "Test Task",
    importance: "!!",
  },
  {
    id: "3",
    title: "Test Task 2",
    importance: "!!!",
  },
];

const Item = ({ title, importance }) => {
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
      <View style={styles.impContainer}>
        <Text style={styles.impText}>{importance}</Text>
      </View>
    </View>
  );
};

const ToDoModal = (props) => {
  const [isEnabledCompleted, setIsEnabledCompleted] = useState(false);
  const [isEnabledAll, setIsEnabledAll] = useState(true);

  const toggleCompleted = () =>
    setIsEnabledCompleted((previousState) => !previousState);
  const toggleAll = () => setIsEnabledAll((previousState) => !previousState);

  const renderItem = ({ item }) => (
    <Item title={item.title} importance={item.importance} />
  );

  const [isOpenAddModal, setIsOpenAddModal] = useState(false);

  const closeModalHandler = () => {
    setIsOpenAddModal(false);
  };

  const addElement = () => {
    {
      /* Add new element with Redux */
    }
  };



  return (
    <Modal
      isVisible={props.visible}
      backgroundColor={"#000"}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
      onBackdropPress={props.onBackdropPress}
      animationInTiming={350}
      animationOutTiming={350}
      avoidKeyboard={true}
    >
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Tasks</Text>
            <TouchableOpacity
              onPress={props.onCancel}
              style={styles.buttonCancel}
            >
              <Text style={styles.buttonCancelText}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <ScrollView>
              <Card style={styles.todayContainer}>
                <View style={styles.todayTextContainer}>
                  <Text style={styles.todayText}>For Today</Text>
                  {/* Change this based on the presets set below */}
                </View>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  style={styles.list}
                  scrollEnabled={false}
                />
              </Card>
              <View style={styles.otherContainer}>
                <Card style={styles.containerRow}>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={styles.containerButton}
                  >
                    <View style={styles.leftContainer}>
                      <Ionicons
                        name="checkmark-circle"
                        size={27}
                        color={Colors.primary}
                      />
                      <Text style={styles.containerRowTitle}>
                        Show Completed
                      </Text>
                    </View>
                    <Switch
                      trackColor={{ false: "#767577", true: "#30d158" }}
                      thumbColor={isEnabledCompleted ? "#f4f3f4" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleCompleted}
                      value={isEnabledCompleted}
                    />
                  </TouchableOpacity>
                </Card>
                <Card style={styles.containerRow}>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={styles.containerButton}
                  >
                    <View style={styles.leftContainer}>
                      <Ionicons
                        name="albums"
                        size={27}
                        color={Colors.primary}
                      />
                      <Text style={styles.containerRowTitle}>Show All</Text>
                    </View>
                    <Switch
                      trackColor={{ false: "#767577", true: "#30d158" }}
                      thumbColor={isEnabledAll ? "#f4f3f4" : "#f4f3f4"}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleAll}
                      value={isEnabledAll}
                    />
                  </TouchableOpacity>
                </Card>
              </View>
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => setIsOpenAddModal(true)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <AddGoalModal
        visible={isOpenAddModal}
        onCancel={closeModalHandler}
        onSubmit={addElement}
        title="Add Task"
      />
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
    justifyContent: "space-between",
    padding: 8,
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
    justifyContent: "space-between",
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

  todayText: {
    fontSize: 26,
    color: "white",
    fontWeight: "600",
  },

  todayContainer: {
    padding: 12,
    borderRadius: 22,
    marginBottom: 10,
  },

  todayTextContainer: {
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(79, 255, 227, 0.2)",
    paddingBottom: 10,
  },

  footer: {
    width: "100%",
    marginVertical: 15,
    backgroundColor: "transparent",
  },

  containerRow: {
    flexDirection: "row",
    marginVertical: 10,
    width: "100%",
    borderRadius: 22,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  leftContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  containerButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },

  containerRowTitle: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
    marginLeft: 15,
  },

  modalArrow: {
    color: "#8c8c8c",
    fontSize: 24,
    fontWeight: "600",
  },

  impText: {
    color: Colors.red,
    fontSize: 24,
    fontWeight: "600",
    paddingRight: 2,
  },
});

export default ToDoModal;
