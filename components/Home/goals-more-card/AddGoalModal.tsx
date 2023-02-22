import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Colors from "../../../constants/colors";

import Modal from "react-native-modal";

import ImportanceModal from "./ImportanceModal";

export default function AddGoalModal(props): any {
  const [text, onChangeText] = React.useState("");

  const [isOpenImportanceModal, setIsOpenImportanceModal] = useState(false);

  const toggleImportanceModalHandler = () => {
    setIsOpenImportanceModal(!isOpenImportanceModal);
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    // var dateTime = date;
    hideDatePicker();
  };

  return (
    <Modal
      isVisible={props.visible}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
      avoidKeyboard
    >
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
          </View>

          <View style={styles.body}>
            <TextInput
              style={[styles.input, styles.titleInput]}
              value={text}
              onChangeText={onChangeText}
              placeholderTextColor="#777"
              placeholder="Title"
            />
            <TouchableOpacity
              onPress={toggleImportanceModalHandler}
              style={[styles.inputButton, styles.input]}
            >
              <View>
                <Text style={styles.inputButtonText}>Importance</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={showDatePicker}
              style={[styles.inputButton, styles.input]}
            >
              <View>
                <Text style={styles.inputButtonText}>Set Date</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={props.onSubmit}
              style={styles.submitContainer}
            >
              <Text style={styles.inputButtonText}>{props.title}</Text>
              {/* onSubmit, send out importance, title */}
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onCancel} style={styles.button}>
              <Text style={styles.buttonCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <ImportanceModal
        visible={isOpenImportanceModal}
        onBackdropPress={toggleImportanceModalHandler}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
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
    paddingHorizontal: 15,
    paddingVertical: 7,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  header: {
    width: "95%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "800",
    paddingVertical: 18,
  },

  buttonCancelText: {
    color: "rgb(255, 69, 58)",
    fontSize: 21,
    fontWeight: "700",
    padding: 12.25,
    textAlign: "center",
  },

  button: {
    width: "95%",
    backgroundColor: Colors.redOpacity,
    borderRadius: 25,
    borderColor: Colors.red,
    borderWidth: 4,
    marginVertical: 10,
  },

  body: {
    width: "100%",
  },

  footer: {
    paddingBottom: 20,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },

  input: {
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.primary,
    padding: 12,
    marginVertical: 10,
    color: "white",
  },

  titleInput: {
    padding: 16,
  },

  inputButton: {
    backgroundColor: Colors.opacity,
  },

  inputButtonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
    color: Colors.primary,
  },

  submitContainer: {
    width: "95%",
    backgroundColor: Colors.opacity,
    borderRadius: 25,
    borderColor: Colors.primary,
    borderWidth: 4,
    marginBottom: 10,
    padding: 13,
    marginTop: 35,
  },
});
