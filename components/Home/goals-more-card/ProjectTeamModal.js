import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Modal from "react-native-modal";

import Colors from "../../../constants/colors";

const ProjectTeamModal = (props) => {
  return (
    <Modal
      isVisible={props.isVisible}
      backgroundColor={"transparent"}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
      onBackdropPress={props.onBackdropPress}
      animationInTiming={350}
      animationOutTiming={350}
    >
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.headerTitle}>Team</Text>
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

export default ProjectTeamModal;
