import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

import Card from "../../Other/Global/Card";
import Colors from "../../../constants/colors";

export default function QuoteCard(props): any {
    // get quote from https://github.com/ywalia01/dune-api
    return (
        <Card style={styles.card}>
            <Text style={styles.quoteText}>"Input Quote Here"</Text>
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
