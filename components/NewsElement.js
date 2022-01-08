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

const NewsElement = (props) => {
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
          <Text style={styles.newsDesc}>{props.description}</Text>
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
    marginVertical: 12,
    height: "auto",
    justifyContent: "space-around",
    padding: 0,
    borderWidth: 5,
    borderColor: Colors.primary,
    borderRadius: 25,
  },

  imageContainer: {
    flex: 1,
    height: 240,
    width: "100%",
    paddingBottom: 15,
  },

  textContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },

  newsTitle: {
    fontSize: 26,
    color: Colors.primary,
    fontWeight: "800",
  },

  newsDesc: {
    paddingVertical: 12,
    color: "white",
    fontSize: 18,
    paddingBottom: 18,
  },
});

export default NewsElement;
