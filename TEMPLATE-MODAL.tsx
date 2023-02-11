import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import Modal from "react-native-modal";

const TemplateModal = (props) => {
  return (
    <Modal
      isVisible={props.visible}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
    >
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>

        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: 8.5,
  },
});

export default TemplateModal;