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

import NewsTabElement from "./NewsElement";

const NewsTabCard = (props) => {
  return (
    <View style={styles.card}>
      <NewsTabElement
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
    borderRadius: 15,
    marginBottom: 3,
    marginTop: 5,
  },
});

export default NewsTabCard;
