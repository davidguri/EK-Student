import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

// import Card from "../../Other/Global/Card";
// import Colors from "../../../constants/colors";

export default function NewsCardElement(props): any {
    return (
        <View style={styles.newsCard}>
            <Text style={styles.newsTitle}>{props.title}</Text>
            <View style={styles.newsInfoContainer}>
                <Text style={styles.newsInfo}>{props.publisher}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    newsCard: {
        alignItems: "flex-start",
        justinfyContent: "center",
    },

    newsTitle: {
        fontSize: 28,
        fontWeight: "800",
    },

    newsInfoContainer: {
        flexDirection: "row",
        justtifyContent: "center"
    },

    newsInfo: {
        fontSize: 14,
        fontWeight: "600"
    },
});
