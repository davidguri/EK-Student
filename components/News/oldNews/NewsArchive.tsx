import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
import Colors from "../../../constants/colors";
import Modal from "react-native-modal";

import NewsTodayCard from "../todayInNews/NewsToday";

export default function NewsArchive(props): any {

  return (
    <Modal
      isVisible={props.visible}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
      animationIn={"slideInRight"}
      animationInTiming={350}
      animationOutTiming={350}
      avoidKeyboard={true}
    >
      <SafeAreaView style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Archive</Text>
          <TouchableOpacity
            onPress={props.onCancel}
            style={styles.buttonCancel}
          >
            <Text style={styles.buttonCancelText}>X</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: "98%", marginHorizontal: "1%" }} >
          <NewsTodayCard />
        </ScrollView>
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

  header: {
    width: "92%",
    marginHorizontal: "4%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "800",
    paddingVertical: 18,
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
});