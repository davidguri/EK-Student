import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Colors from "./constants/colors";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";
import CalendarScreen from "./screens/CalendarScreen";

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

function Login() {
  return <LoginScreen />;
}

function AppScreen() {
  return (
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
        activeTintColor: Colors.primary,
        inactiveTintColor: "gray",
        showLabel: true,
        showIcon: true,
        style: {
          paddingBottom: 4.25,
          paddingTop: 4.25,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const AppContext = React.createContext({});

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const contextValue = React.useMemo(
    () => ({
      isSignedIn,
      setIsSignedIn,
    }),
    [isSignedIn]
  );

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" translucent={true} />
      <AppContext.Provider value={contextValue}>
        <NavigationContainer theme={appTheme}>
          <Stack.Navigator>
            {!isSignedIn ? (
              <Stack.Screen
                component={Login}
                options={{ headerShown: false }}
                name="Login"
              />
            ) : (
              <Stack.Screen component={AppScreen} options={{ headerShown: false }} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </SafeAreaView>
  );
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
