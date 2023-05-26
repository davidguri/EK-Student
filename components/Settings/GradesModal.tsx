import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Platform,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import Modal from "react-native-modal";
import Colors from "../../constants/colors";
import Card from "../Other/Global/Card";
import { Ionicons } from "@expo/vector-icons";

const DATA_TDY = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    subject: "Math",
    note: "Lorem",
    grade: 9,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    subject: "English",
    note: "Hello",
    grade: 9,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    subject: "Albanian",
    note: "Hello",
    grade: 9,
  },
  {
    id: "jwiejiwefqijwfowjeiguoqwjrojef",
    subject: "History",
    note: "Hello",
    grade: 9,
  },
];

export default function GradesModal(props): any {

  const Item = ({ subject, note, grade }) => (
    <Card style={styles.gradeCard}>
      <View style={styles.leftBox}>
        <Text style={styles.subjectText}>{subject}</Text>
        <Text style={styles.noteText}>{note}</Text>
      </View>
      <Text style={styles.gradeText}>{grade}</Text>
    </Card>
  );

  const renderItem = ({ item }) => (
    <Item subject={item.subject} note={item.note} grade={item.grade} />
  );

  return (
    <Modal
      isVisible={props.visible}
      animationIn={"slideInRight"}
      animationOut={"slideOutRight"}
      style={{ margin: 0 }}
      hideModalContentWhileAnimating={true}
    >
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.screen}>
          <View style={styles.header}>
            <TouchableOpacity onPress={props.onCancel} style={styles.button}>
              <Text style={styles.buttonText}>&lt; Back</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Grades</Text>
          </View>
          <ScrollView style={{ backgroundColor: "#000", width: "100%" }}>
            <View style={styles.body}>
              <View style={styles.recentContainer}>
                <Text style={styles.title}>Recent Grades</Text>
                <FlatList
                  data={DATA_TDY}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <View style={styles.reportContainer}>
                <Text style={styles.title}>Report Cards</Text>
                <Card style={styles.reportCard}>
                  <View style={{ width: "100%", height: 180, borderRadius: 15, backgroundColor: "black" }}></View>
                  <View style={styles.textContainer}>
                    <Text style={styles.reportText}>Report Card ID</Text>
                  </View>
                </Card>
                <Card style={styles.containerRow}>
                  <TouchableOpacity
                    onPress={() => { }}
                    style={styles.containerButton}
                  >
                    <View style={styles.leftContainer}>
                      <Ionicons
                        name="folder-open"
                        size={27}
                        color={Colors.primary}
                      />
                      <Text style={styles.containerRowTitle}>More Cards</Text>
                    </View>
                    <Text style={styles.modalArrow}>&gt; </Text>
                  </TouchableOpacity>
                </Card>
              </View>
            </View>
          </ScrollView>
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
    padding: 8.5,
  },

  header: {
    width: "95%",
    marginHorizontal: "2.5%",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "space-between",
    marginVertical: 12,
    marginBottom: 20,
  },

  headerTitle: {
    color: "white",
    fontSize: 35,
    fontWeight: "700",
    paddingBottom: 5,
  },

  buttonText: {
    color: Colors.blue,
    fontSize: 21,
    fontWeight: "500",
  },

  button: {
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  body: {
    width: "95%",
    marginHorizontal: "2.5%",
  },

  recentContainer: {
    marginBottom: 30,
  },

  reportContainer: {
    marginBottom: 30,
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

  leftContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  modalArrow: {
    color: "#8c8c8c",
    fontSize: 24,
    fontWeight: "600",
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
    paddingVertical: 5,
    paddingBottom: 15,
  },

  gradeCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    borderRadius: 15,
    marginRight: 12,
  },

  leftBox: {
    paddingRight: 24,
  },

  subjectText: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: "700",
    paddingVertical: 2,
  },

  noteText: {
    color: "white",
    fontSize: 13,
    fontWeight: "400",
    paddingVertical: 2,
    width: "100%",
  },

  gradeText: {
    color: "white",
    fontSize: 32,
    fontWeight: "800",
    paddingVertical: 2,
    paddingLeft: 24,
  },

  reportCard: {
    borderRadius: 15,
    width: "100%",
    padding: 0,
    borderColor: Colors.primary,
    borderWidth: 3.5
  },

  textContainer: {
    padding: 15,
  },

  reportText: {
    color: "white",
    fontSize: 21,
    fontWeight: "600",
  },
});