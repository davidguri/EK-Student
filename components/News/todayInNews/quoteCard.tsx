import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

import Card from "../../Other/Global/Card";
import Colors from "../../../constants/colors";

export default function QuoteCard(props): any {

    let quoteText: string

    const getQuote = async () => {
        console.log("Getting quote data ig?")
        const req = await fetch("https://the-dune-api.herokuapp.com/quotes");
        const data = await req.json();
        return data;
    };

    getQuote().then(quote => {
        console.log("Maybe quote data? ", quote)
        quoteText = quote.quote;
        console.log(quoteText)
    });

    return (
        <Card style={styles.card}>
            <Text style={styles.quoteText}>{quoteText}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 6,
        borderRadius: 15,
        borderWidth: 4,
    },

    quoteText: {
        fontSize: 23,
        fontWeight: "800",
        paddingVertical: 6,
        textAlign: "center",
        color: Colors.primary,
    },
});
