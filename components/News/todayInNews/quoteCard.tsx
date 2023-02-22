import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";

import Card from "../../Other/Global/Card";
import Colors from "../../../constants/colors";

export default function QuoteCard(props): any {

    // const [conditionVal, setConditionVal] = useState("");

    const fetchData = () => {
        fetch(`https://movie-quote-api.herokuapp.com/v1/quote?censored`)
            .then(response => response.json())
            .then(json => {
                if (json.cod === "404") {
                    // console.log("!!404!!");
                };

                console.log("Values retrieved! ", json);
            })
    };

    fetchData();

    return (
        <Card style={styles.card}>
            <Text style={styles.quoteText}></Text>
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
        fontWeight: "700",
        color: "white",
    },
});
