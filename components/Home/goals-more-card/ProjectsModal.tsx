import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform,
  FlatList,
} from "react-native";
import firebase from "firebase/compat";

import Colors from "../../../constants/colors";
import Card from "../../Other/Global/Card";

import ProjectTeamModal from "./ProjectTeamModal";
import ProjectWorkModal from "./ProjectWorkModal";

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
    task_points: {
      "first-task": 10,
      "second-task": 10,
    },
    points: 20,
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
    task_points: {
      "first-task": 10,
      "second-task": 10,
    },
    points: 20,
  },
];

const Item = ({ title }): any => {
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

  const [isTeamVisible, setTeamVisible] = useState(false);
  const [isWorkVisible, setWorkVisible] = useState(false);

  const toggleTeamHandler = () => {
    setTeamVisible(!isTeamVisible);
  };

  const toggleWorkHandler = () => {
    setWorkVisible(!isWorkVisible);
  };

  return (
    <View style={styles.item}>
      <Card style={styles.projectCard}>
        <View style={styles.cardHeader}>
          <View style={styles.headerTop}>
            <Text style={styles.projectTitle}>{title}</Text>
            <Text style={styles.projectSubject}>Subject</Text>
          </View>
          <View style={styles.headerBottom}>
            <Text style={styles.projectSubtitle}>Due Date</Text>
          </View>
        </View>
        <View style={styles.cardBody}>
          <TouchableOpacity onPress={toggleTeamHandler}>
            <View style={styles.container}>
              <Text style={styles.containerTitle}>Team</Text>
              <Text style={styles.containerArrow}>&gt;</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleWorkHandler}>
            <View style={styles.container}>
              <Text style={styles.containerTitle}>Work</Text>
              <Text style={styles.containerArrow}>&gt;</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.points}>20 Pts Total</Text>
        </View>
      </Card>
      <ProjectTeamModal
        isVisible={isTeamVisible}
        onBackdropPress={toggleTeamHandler}
      />
      <ProjectWorkModal
        isVisible={isWorkVisible}
        onBackdropPress={toggleWorkHandler}
      />
    </View>
  );
};
{
  /* Gonna have to make two modals: one for seeing the team and another for the work/points */
}

const ProjectsModal = (props) => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  const writeData = (title: string, subject: string, date: string, total_points: number) => { //email and full name
    firebase.database().ref('ProjectsList/').push({
      title,
      subject,
      date,
      total_points
    }).then((data) => {
      //success callback
      // console.log('data ' , data)
    }).catch((error) => {
      //error callback
      console.log('error ', error)
    })
  }

  const [data, setData] = useState([])

  const readData = () => {
    firebase.database().ref('GoalsList/').once('value', function (snapshot) {
      console.log(snapshot.val)
      setData(snapshot.val())
    });
  }

  readData

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
              scrollEnabled={true}
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
    paddingBottom: 13,
    marginBottom: 5,
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
    paddingBottom: 4,
  },

  headerBottom: {
    paddingVertical: 4,
  },

  projectTitle: {
    fontSize: 21,
    fontWeight: "600",
  },

  projectSubject: {
    fontSize: 16,
  },

  projectSubtitle: {
    fontSize: 16,
    fontWeight: "500",
  },

  cardBody: {
    flexDirection: "column",
    padding: 12,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 18,
    paddingTop: 8,
  },

  containerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },

  containerArrow: {
    fontSize: 21,
    fontWeight: "600",
    color: "white",
  },

  cardFooter: {
    flexDirection: "column",
    backgroundColor: Colors.opacity,
    borderWidth: 4,
    borderColor: Colors.primary,
    borderRadius: 25,
    padding: 10,
    marginBottom: 5,
    width: "60%",
    marginHorizontal: "20%",
  },

  points: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    padding: 2,
  },
});

export default ProjectsModal;
