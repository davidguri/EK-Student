import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { enableScreens } from "react-native-screens";
import { NativeBaseProvider } from "native-base";

import Colors from "./constants/colors";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";
import CalendarScreen from "./screens/CalendarScreen";

import firebase from "firebase/compat";

const appTheme = {
  dark: true,
  colors: {
    primary: Colors.primary,
    background: Colors.backgroundColor,
    card: "#000",
    text: "#fff",
    border: "#000",
    notification: "red",
  },
};

function Home() {
  return <HomeScreen />;
}

function News() {
  return <NewsScreen />;
}

function Calendar() {
  return <CalendarScreen />;
}

enableScreens();

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  var user = firebase.auth().currentUser;

  setTimeout(() => {
    user != null ? setIsLogged(true) : setIsLogged(false);
  }, 2000);

  const logInHandler = () => {
    setIsLogged(true);
  };

  if (isLogged == true) {
    return (
      <NativeBaseProvider>
        <SafeAreaView style={styles.screen}>
          <StatusBar barStyle="light-content" translucent={true} />
          <NavigationContainer theme={appTheme}>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Home") {
                    iconName = focused ? "home" : "home-outline";
                  } else if (route.name === "News") {
                    iconName = focused ? "newspaper" : "newspaper-outline";
                  } else if (route.name === "Calendar") {
                    iconName = focused ? "calendar" : "calendar-outline";
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: Colors.primary,
                inactiveTintColor: "gray",
                showLabel: true,
                showIcon: true,
                style: {
                  paddingBottom: 4.25,
                  paddingTop: 4.25,
                },
              }}
            >
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Calendar" component={Calendar} />
              <Tab.Screen name="News" component={News} />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </NativeBaseProvider>
    );
  } else {
    return (
      <NativeBaseProvider>
        <SafeAreaView style={styles.screen}>
          <StatusBar barStyle="light-content" translucent={true} />
          <LoginScreen loginPress={logInHandler} />
        </SafeAreaView>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000",
    height: "100%",
    paddingBottom: 0,
  },

  header: {
    alignItems: "center",
  },
});
