import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import Colors from "../constants/colors";
import Card from "./Card";

import NewsDetailPage from "./NewsDetailPage";

const NewsOldElement = (props) => {
  const [isOpenDetailPage, setIsOpenDetailPage] = useState(false);

  const closeModalHandler = () => {
    setIsOpenDetailPage(false);
  };

  return (
    <TouchableOpacity onPress={() => setIsOpenDetailPage(true)}>
      <Card style={styles.newsCard}>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderTopRightRadius: 25,
              borderTopLeftRadius: 25,
            }}
            source={props.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.newsTitle}>{props.title}</Text>
        </View>
      </Card>
      <NewsDetailPage
        visible={isOpenDetailPage}
        onCancel={closeModalHandler}
        title={props.title}
        image={props.image}
        publisher={props.publisher}
        description={props.description}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  newsCard: {
    width: "100%",
    height: "auto",
    justifyContent: "space-around",
    padding: 0,
    borderWidth: 3,
    borderColor: Colors.primary,
    borderRadius: 25,
  },

  imageContainer: {
    flex: 1,
    height: 115,
    width: "100%",
    paddingBottom: 10,
  },

  textContainer: {
    flex: 1,
    paddingHorizontal: 18,
  },

  newsTitle: {
    fontSize: 18,
    color: Colors.primary,
    fontWeight: "700",
    paddingBottom: 15,
  },
});

export default NewsOldElement;
