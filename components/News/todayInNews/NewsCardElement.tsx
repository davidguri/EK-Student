import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";

import Card from "../../Other/Global/Card";
import Colors from "../../../constants/colors";

export default function NewsCardElement(props): any {
    return (
        <Card style={styles.newsCard}>
            <View style={styles.main}>
                <Text style={styles.newsTitle}>{props.title}</Text>
                <Text style={styles.newsDesc}>Hello there I am david guri</Text>
                <View style={styles.newsInfoContainer}>
                    <Text style={styles.newsInfo}>{props.publisher}, {props.date}</Text>
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    newsCard: {
        alignItems: "flex-start",
        justinfyContent: "center",
        marginVertical: 20,
        padding: 25,
        backgroundColor: Colors.primary,
        borderRadius: 25,
        width: "95%"
    },

    main: {
        width: "100%"
    },

    newsTitle: {
        fontSize: 39,
        fontWeight: "900",
        marginBottom: 4,
    },

    newsDesc: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 18,
    },

    newsInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    newsInfo: {
        fontSize: 14,
        fontWeight: "600",
    },
});
