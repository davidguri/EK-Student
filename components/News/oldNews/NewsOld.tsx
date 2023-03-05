import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import Colors from "../../../constants/colors";
import Card from "../../Other/Global/Card";
import { Ionicons } from "@expo/vector-icons";

const DATA_TDY = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Back to School, folks!",
    publisher: "Principals Office",
    date: "Sep 14, 2022"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Back to School, folks!",
    publisher: "Principals Office",
    date: "Sep 14, 2022"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Back to School, folks!",
    publisher: "Principals Office",
    date: "Sep 14, 2022"
  },
];

export default function NewsOldCard(props): any {
  // const [isModalVisible, setModalVisible] = useState(false);

  const Item = ({ title, date, publisher }) => (
    <TouchableOpacity onPress={() => { }}>
      <Card style={styles.newsCard}>
        <View style={styles.leftCont}>
          <Text style={styles.newsTitle}>{title}</Text>
          <Text style={styles.newsDesc}>Description goes here</Text>
        </View>
        <View style={styles.rightCont}>
          <Text style={styles.newsPublisher}>{publisher}</Text>
          <Text style={styles.newsDate}>{date}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );

  // const toggleModalHandler = () => {
  //   setModalVisible(!isModalVisible);
  // };

  const renderItem = ({ item }) => (
    <Item title={item.title} date={item.date} publisher={item.publisher} />
  );

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Old News</Text>
      <FlatList
        data={DATA_TDY}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      />
      <Card style={styles.containerRow}>
        <TouchableOpacity
          onPress={() => { }}
          style={styles.containerButton}
        >
          <View style={styles.leftContainer}>
            <Ionicons
              name="archive"
              size={27}
              color={Colors.primary}
            />
            <Text style={styles.containerRowTitle}>Archive</Text>
          </View>
          <Text style={styles.modalArrow}>&gt; </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 18,
    width: "95%",
    marginHorizontal: "2.5%"
  },

  cardTitle: {
    fontSize: 32,
    color: "white",
    paddingVertical: 15,
    paddingBottom: 20,
    fontWeight: "bold",
  },

  newsCard: {
    marginBottom: 18,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
  },

  newsTitle: {
    color: Colors.primary,
    fontSize: 21,
    fontWeight: "700",
    paddingBottom: 2.5
  },

  newsDesc: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    paddingTop: 2.5
  },

  newsDate: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
    paddingTop: 2.5,
  },

  newsPublisher: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
    paddingBottom: 2.5,
  },

  leftCont: {
    flex: 1,
    paddingHorizontal: 1,
  },

  rightCont: {
    flex: 0,
    paddingHorizontal: 1,
    alignItems: "flex-end",
  },

  containerRow: {
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7.5,
  },

  leftContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  containerRowTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    marginLeft: 15,
  },

  modalArrow: {
    color: "#8c8c8c",
    fontSize: 24,
    fontWeight: "600",
  },

  containerButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
});
