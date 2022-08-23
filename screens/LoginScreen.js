import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../constants/colors";
import Modal from "react-native-modal";
import { AppContext } from "../App";

import Input from "../components/Other/Global/Input";
import LoginHead from "../components/Login/LoginHead";
import SignupModal from "../components/Login/SignupModal";

import Background from "../assets/background.png";

import { auth } from "../firebase";

const LoginScreen = (props) => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const toggleLoginHandler = () => {
    setIsOpenLogin(!isOpenLogin);
  };

  const [isOpenSignup, setIsOpenSignup] = useState(false);

  const toggleSignupHandler = () => {
    setIsOpenSignup(!isOpenSignup);
  };
  // Login Shizz

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsSignedIn } = useContext(AppContext);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
        setIsSignedIn(true);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.screen}>
        <ImageBackground
          source={Background}
          resizeMode="cover"
          style={styles.image}
        >
          <LoginHead title="WELCOME" />
          <View style={styles.loginForm}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Welcome To</Text>
              <Text style={styles.titleAlt}>EK Student!</Text>
            </View>
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                onPress={toggleLoginHandler}
                style={styles.buttonContainer}
              >
                <View style={styles.ctaButton}>
                  <Text style={styles.buttonText}>Log In</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={toggleSignupHandler}
                style={styles.buttonContainer}
              >
                <View style={styles.ctaButton}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Modal
            isVisible={isOpenLogin}
            backgroundColor={"#000"}
            style={{ margin: 0 }}
            hideModalContentWhileAnimating={true}
            onBackdropPress={props.onBackdropPress}
            animationIn={"slideInRight"}
            animationInTiming={350}
            animationOutTiming={350}
            avoidKeyboard={true}
            onSwipeComplete={toggleLoginHandler}
            swipeDirection="right"
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <SafeAreaView style={styles.media}>
                <ImageBackground
                  source={Background}
                  resizeMode="cover"
                  style={styles.image}
                >
                  <LoginHead title="LOG IN" />
                  <View style={styles.loginForm}>
                    <View style={styles.titleContainerModal}>
                      <Text style={styles.titleModal}>Log In</Text>
                    </View>
                    <View style={styles.inputContainer}>
                      <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCorrect={false}
                        placeholder="jdoe@ernestkoliqi.com"
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        selectTextOnFocus
                        keyboardType="email-address"
                      />
                      <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCorrect={false}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        bool={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        selectTextOnFocus
                      />
                    </View>
                    <View style={styles.buttonContainerModal}>
                      <TouchableOpacity onPress={handleLogin}>
                        <View style={styles.ctaBtnModal}>
                          <Text style={styles.loginBtn}>Log In</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => {}}>
                        <View style={styles.forgotBtn}>
                          <Text
                            style={{
                              color: "white",
                              fontSize: 17,
                              paddingRight: 5,
                              fontWeight: "500",
                            }}
                          >
                            Forgot Password?
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </SafeAreaView>
            </TouchableWithoutFeedback>
          </Modal>
          <SignupModal visible={isOpenSignup} onCancel={toggleSignupHandler} />
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  titleContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  titleAlt: {
    color: Colors.primary,
    fontSize: 54,
    fontWeight: "bold",
    paddingBottom: 18,
    paddingTop: 0,
    textAlign: "center",
  },

  title: {
    fontSize: 54,
    fontWeight: "bold",
    color: "#fff",
    paddingTop: 45,
    paddingBottom: 0,
    textAlign: "center",
  },

  loginForm: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },

  actionsContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 7.5,
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },

  ctaButton: {
    width: "95%",
    marginHorizontal: "2.5%",
    backgroundColor: Colors.opacity,
    fontWeight: "600",
    borderRadius: 30,
    borderColor: Colors.primary,
    borderWidth: 4,
    padding: 5,
    marginHorizontal: 12,
  },

  buttonText: {
    fontWeight: "600",
    padding: 5.75,
    textAlign: "center",
    fontSize: 23,
    color: "#fff",
  },

  container: {
    flex: 1,
  },

  media: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#000",
  },

  titleContainerModal: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  titleModal: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#fff",
    paddingTop: 75,
    paddingBottom: 25,
    textAlign: "center",
  },

  loginForm: {
    width: "100%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 75,
  },

  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: "85%",
    textAlign: "center",
    padding: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    borderWidth: 4,
    color: "white",
    textAlign: "left",
  },

  buttonContainerModal: {
    width: "85%",
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },

  ctaBtnModal: {
    width: "100%",
    backgroundColor: Colors.primary,
    fontWeight: "600",
    borderRadius: 18,
    padding: 4,
    paddingHorizontal: 30,
    marginHorizontal: 0,
  },

  loginBtn: {
    fontWeight: "600",
    paddingVertical: 8.7,
    paddingHorizontal: 8,
    textAlign: "center",
    fontSize: 17.5,
  },

  forgotBtn: {
    width: "100%",
    paddingVertical: 5,
    opacity: 0.65,
  },
});

export default LoginScreen;
