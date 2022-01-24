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

  {
    /* props.image for the image, props.title for the newsTitle, props.description for the short desc. */
  }

  return (
    <TouchableOpacity
      onPress={() => setIsOpenDetailPage(true)}
      style={styles.main}
    >
      <Card style={styles.newsCard}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={props.image} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.publisher}>{props.publisher}</Text>
          </View>
          <Text style={styles.description}>{props.description}</Text>
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
  main: {
    width: "95%",
  },

  newsCard: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,
    borderWidth: 3.5,
    borderColor: Colors.primary,
    borderRadius: 25,
  },

  image: {
    height: 135,
    width: "100%",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },

  imageContainer: {
    width: "35%",
  },

  textContainer: {
    width: "58.75%",
    marginRight: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  topContainer: {
    paddingBottom: 8,
  },

  title: {
    fontSize: 21,
    color: "white",
    fontWeight: "700",
  },

  publisher: {
    color: Colors.primary,
    fontSize: 13.5,
  },

  description: {
    fontSize: 15,
    color: "white",
  },
});

export default NewsOldElement;
