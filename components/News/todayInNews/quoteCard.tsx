import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

import Card from "../../Other/Global/Card";
import Colors from "../../../constants/colors";

export default function QuoteCard(props): any {
    // get quote from https://github.com/ywalia01/dune-api
    return (
        <Card style={styles.card}>
            <Text style={styles.quoteText}>"Input Quote Here"</Text>
            <Text style={styles.authorText}>-Author</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingVertical: 6,
        borderRadius: 15,
        borderWidth: 4,
    },

    quoteText: {
        fontSize: 18,
        fontWeight: "700",
        color: "white",
    },
    
    authorText: {
        fontSize: 14,
        fontWeight: "600",
        color: "white"
    },
});
