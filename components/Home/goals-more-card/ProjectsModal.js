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

import Colors from "../../../constants/colors";
import Card from "../../Other/Global/Card";

const DATA = [
  {
    id: "1",
    title: "Mid-Term Project",
    subject: "Math",
    date: "16/02/2022",
    work: {
      "first-task": "Do this",
      "second-task": "Do that",
    },
    team: ["arlind-gorrea", "bjorni-hoxha", "david-guri", "kristjan-avrami"],
    points: {
      "first-task": 10,
      "second-task": 10,
    },
  },
  {
    id: "2",
    title: "Term Project",
    subject: "English",
    date: "16/02/2022",
    work: {
      "first-task": "Do this",
      "second-task": "Do that",
    },
    team: ["arlind-gorrea", "bjorni-hoxha", "david-guri", "kristjan-avrami"],
    points: {
      "first-task": 10,
      "second-task": 10,
    },
  },
];

const Item = ({ title, subject, date, work, team, points }) => {
  {
    /* const str = "hi-i-am-david-guri";
  const arr = str.split("-");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const str2 = arr.join(" ");
console.log(str2); */
  }
  {
    /* This is just a proof of concept for now to turn the names above into a normal convention */
  }
  {
    /* const TotalPoints = {
    In here, have a function that just adds the points from each of the tasks
  }; */
  }

  return (
    <View style={styles.item}>
      <Card style={styles.projectCard}>
        <View style={styles.cardHeader}>
          <View style={styles.headerTop}>
            <Text style={styles.projectTitle}>{title}</Text>
            <Text style={styles.projectSubject}>{subject}</Text>
          </View>
          <View style={styles.headerBottom}>
            <Text style={styles.projectSubtitle}>{date}</Text>
          </View>
        </View>
        <View style={styles.cardBody}>
          <View style={[styles.teamContainer, styles.container]}></View>
          <View style={[styles.workContainer, styles.container]}></View>
        </View>
        <View style={styles.cardFooter}></View>
      </Card>
    </View>
  );
};
{
  /* Gonna have to make two modals: one for seeing the team and another for the work/points */
}

const ProjectsModal = (props) => {
  const renderItem = ({ item }) => <Item title={item.title} />;

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

  projectCard: {
    borderWidth: 4,
    borderRadius: 25,
    borderColor: Colors.primary,
    width: "100%",
    padding: 0,
    paddingBottom: 15,
  },

  cardHeader: {
    flexDirection: "column",
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: 12,
  },

  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 3,
  },

  headerBottom: {
    paddingVertical: 3,
  },

  projectTitle: {
    fontSize: 18,
    fontWeight: "500",
  },

  projectSubtitle: {
    fontSize: 17,
    fontWeight: "500",
  },
});

export default ProjectsModal;
