import React, { useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";
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
    card: Colors.backgroundColor,
    text: Colors.textColor,
    border: Colors.backgroundColor,
    notification: Colors.red,
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

function Feed() {
  return (
    <SafeAreaView style={styles.screen}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "News") {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (route.name === "Calendar") {
              iconName = focused ? "calendar" : "calendar-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: "rgba(0, 0, 0, 0.4)"
          },
          activeTintColor: Colors.primary,
          inactiveTintColor: Colors.back,
          showLabel: true,
          showIcon: true,
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
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const AppContext = React.createContext({});

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
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
              <Stack.Screen
                component={Feed}
                options={{ headerShown: false }}
                name="Feed"
              />
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
  },

  header: {
    alignItems: "center",
  },
});
