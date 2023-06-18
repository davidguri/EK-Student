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
  Alert,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import Colors from "../../constants/colors";
import Card from "../Other/Global/Card";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from '@react-native-masked-view/masked-view';

import PlatinumAttendance from "../../assets/AchievementsIcons/platinumAttendance.png"

export default function AchievementsModal(props: any) {
  const alertConst = () =>
    Alert.alert("Achievements", "This is a feature that allows you to earn badges throught the school year for things such as attendence, grades, how often you've handed in projects on time etc. These badges are ranked from bronze to diamond, meaning you can compete with your friends on who has the most badges!", [
      { text: "Ok", onPress: () => { }, style: "default" },
    ]);

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
            <TouchableOpacity onPress={props.onCancel}>
              <Ionicons
                name="chevron-back"
                size={32}
                color={Colors.primary}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Achievements</Text>
            <TouchableOpacity onPress={alertConst}>
              <Ionicons
                name="information-circle-outline"
                size={28}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>
          <ScrollView style={{ backgroundColor: "#000", width: "100%" }}>
            <View style={styles.body}>
              <Card style={styles.card}>
                <MaskedView
                  style={{ flex: 1, flexDirection: "column", height: 36, marginBottom: 25 }}
                  maskElement={<Text style={styles.cardTitle}>Platinum</Text>}
                >
                  <LinearGradient
                    colors={['#294855', '#aec5ce']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0.33 }}
                    style={{ flex: 1 }}
                  />
                </MaskedView>
                <View>
                  <Image
                    source={PlatinumAttendance}
                    style={{ width: 64, height: 64 }}
                  />
                </View>
              </Card>
              <Card style={styles.card}>
                <MaskedView
                  style={{ flex: 1, flexDirection: "column", height: 36, marginBottom: 25 }}
                  maskElement={<Text style={styles.cardTitle}>Gold</Text>}
                >
                  <LinearGradient
                    colors={['#e6cb82', '#b69d4a']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0.33 }}
                    style={{ flex: 1 }}
                  />
                </MaskedView>
                <View>
                  <Image
                    source={PlatinumAttendance}
                    style={{ width: 64, height: 64 }}
                  />
                </View>
              </Card>
              <Card style={styles.card}>
                <MaskedView
                  style={{ flex: 1, flexDirection: "column", height: 36, marginBottom: 25 }}
                  maskElement={<Text style={styles.cardTitle}>Silver</Text>}
                >
                  <LinearGradient
                    colors={['#77797a', '#c7c8c2']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0.33 }}
                    style={{ flex: 1 }}
                  />
                </MaskedView>
                <View>
                  <Image
                    source={PlatinumAttendance}
                    style={{ width: 64, height: 64 }}
                  />
                </View>
              </Card>
              <Card style={styles.card}>
                <MaskedView
                  style={{ flex: 1, flexDirection: "column", height: 36, marginBottom: 25 }}
                  maskElement={<Text style={styles.cardTitle}>Bronze</Text>}
                >
                  <LinearGradient
                    colors={['#ccae9f', '#784f2a']}
                    start={{ x: 1, y: 1.5 }}
                    end={{ x: 0, y: 1 }}
                    style={{ flex: 1 }}
                  />
                </MaskedView>
                <View>
                  <Image
                    source={PlatinumAttendance}
                    style={{ width: 64, height: 64 }}
                  />
                </View>
              </Card>
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
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    marginBottom: 20,
  },

  headerTitle: {
    color: "white",
    fontSize: 35,
    fontWeight: "700",
    paddingBottom: 5,
    paddingRight: 12,
    paddingLeft: 8,
  },

  body: {
    width: "95%",
    marginHorizontal: "2.5%",
  },

  card: {
    flexDirection: "column",
    marginBottom: 25,
    borderRadius: 25,
  },

  cardTitle: {
    fontSize: 35,
    fontWeight: "800",
  },
});