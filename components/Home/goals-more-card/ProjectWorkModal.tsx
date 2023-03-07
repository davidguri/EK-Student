import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Modal from "react-native-modal";

import Colors from "../../../constants/colors";

const ProjectWorkModal = (props) => {
  return (
    <Modal
      isVisible={props.isVisible}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
      onBackdropPress={props.onBackdropPress}
      animationInTiming={350}
      animationOutTiming={350}
    >
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.headerTitle}>Work</Text>
          </View>
        </View>
        <View style={styles.mainContent}></View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 4,
    backgroundColor: Colors.back,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },

  textContainer: {
    flexDirection: "column",
    borderBottomWidth: 2,
    borderColor: Colors.opacity,
    width: "100%",
  },

  headerTitle: {
    fontSize: 30,
    color: "white",
    fontWeight: "800",
    marginBottom: 10,
  },

  mainContent: {},
});

export default ProjectWorkModal;
