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

const DATA_TDY = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Back to School, folks",
    publisher: "Principals Office",
    date: "September 14, 2022"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Back to School, folks!",
    publisher: "Principals Office",
    date: "September 14, 2022"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Back to School, folks!",
    publisher: "Principals Office",
    date: "September 14, 2022"
  },
];

export default function NewsOldCard(props): any {
  // const [isModalVisible, setModalVisible] = useState(false);

  const Item = ({ }) => (
    <TouchableOpacity onPress={() => { }}>
      <View><Text style={{ color: "white" }}>Hello</Text></View>
    </TouchableOpacity>
  );

  // const toggleModalHandler = () => {
  //   setModalVisible(!isModalVisible);
  // };

  const renderItem = ({ item }) => (
    <Item />
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
    fontWeight: "bold",
  },
});
