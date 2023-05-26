import React from "react";
import { Text, StyleSheet } from "react-native";

import Card from "../../Other/Global/Card";
import Colors from "../../../constants/colors";

export default function QuoteCard(props): any {

  const Quotes = require("randomquote-api");

  let quote = Quotes.randomQuote().quote;
  let quoteAuthor = "- " + Quotes.randomQuote().author;

  return (
    <Card style={styles.card}>
      <Text style={styles.quoteText}>{quote}</Text>
      <Text style={styles.quoteAuthor}>{quoteAuthor}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 12,
  },

  quoteText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },

  quoteAuthor: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.primary,
  },
});
