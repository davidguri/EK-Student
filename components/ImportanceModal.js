import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Modal from "react-native-modal";

import NumberPlease from "react-native-number-please";

import Colors from "../constants/colors";
import Card from "./Card";

const ImportanceModal = (props) => {
  const initialValues = [{ id: "importance", value: 1 }];
  const [importance, setImportance] = useState(initialValues);
  const importanceLevel = [{ id: "importance", label: "‼", min: 1, max: 4 }];

  return (
    <Modal
      isVisible={props.visible}
      backgroundColor={"transparent"}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
      onBackdropPress={props.onBackdropPress}
      animationInTiming={450}
      animationOutTiming={350}
    >
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Importance</Text>
          </View>
          <View style={styles.body}>
            <NumberPlease
              digits={importanceLevel}
              values={importance}
              onChange={(values) => setImportance(values)}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: "center",
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
    fontSize: 36,
    fontWeight: "800",
    paddingTop: 18,
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

export default ImportanceModal;
