import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import Modal from "react-native-modal";

import Colors from "../../constants/colors";
import Card from "../Other/Global/Card";

import Background from "../../assets/background.png";

const ForgotModal = (props) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <Modal
          isVisible={props.visible}
          backgroundColor={"#000"}
          style={{ margin: 0 }}
          hideModalContentWhileAnimating={true}
          onBackdropPress={props.onBackdropPress}
          animationIn={"slideInRight"}
          animationInTiming={350}
          animationOutTiming={350}
          avoidKeyboard={true}
          onSwipeComplete={props.onCancel}
          swipeDirection="right"
        >
          <ImageBackground
            source={Background}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.screen}>
              <Text color="white">Hello</Text>
            </View>
          </ImageBackground>
        </Modal>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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

  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default ForgotModal;
