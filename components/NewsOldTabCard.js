import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import NewsOldTabElement from "./NewsOldElement";

const NewsOldTabCard = (props) => {
  return (
    <View style={styles.card}>
      <NewsOldTabElement
        publisher={props.publisher}
        title={props.title}
        description={props.desc}
        image={{ url: props.image }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    marginBottom: 0,
    marginTop: 5,
    width: "45%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
});

export default NewsOldTabCard;
