import React from "react";
import { Text, StyleSheet } from "react-native";

import Card from "../../Other/Global/Card";

export default function QuoteCard(props): any {

  const Quotes = require("randomquote-api");
  const randomQuote = Quotes.randomQuote().quote;

  var quote = randomQuote + "\n- " + Quotes.randomQuote().author + ""

  return (
    <Card style={styles.card}>
      <Text style={styles.quoteText}>{quote}</Text>
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
});
