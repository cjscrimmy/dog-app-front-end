import React from "react";
import Footer from ".././components/Footer";

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";

const Profile = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <SafeAreaView behavior="padding" style={styles.container}>
          <View>
            <Image
              style={styles.logo}
              source={require("../assets/lineup.png")}
            ></Image>
            <Text style={styles.title}>My Profile </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
      <TouchableOpacity style={(styles.buttonRow, styles.tanrow)}>
        <View>
          <Text style={styles.title}>Jay Jay </Text>
        </View>
      </TouchableOpacity>

      <Footer></Footer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8955A",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.8,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  // titleContainer: {
  //   flex: 1,
  //   backgroundColor: "#D07A38",
  //   justifyContent: "center",
  // },
  // smallIconContainer: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "flex-start",
  //   justifyContent: "flex-start",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   justifyContent: "center",
  // },
  // button2: {
  //   width: "100%",
  //   height: 100,
  //   backgroundColor: "#a4c1db",
  //   justifyContent: "center",
  // },
  // leftBox: {
  //   backgroundColor: "#e3924e",
  //   alignItems: "center",
  //   margin: 0,
  //   width: "50%",
  // },
  // rightBox: {
  //   backgroundColor: "#e3924e",
  //   alignItems: "center",
  //   margin: 0,
  //   width: "50%",
  // },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  // button1: {
  //   width: "100%",
  //   height: 100,
  //   backgroundColor: "#e3924e",
  //   justifyContent: "center",
  // },
  // mintButton: {
  //   backgroundColor: "#19A79C",
  // },
  // buttonText: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   color: "#fff",
  //   paddingTop: 20,
  //   paddingBottom: 20,
  //   textAlign: "center",
  // },
  // greenrow: {
  //   backgroundColor: "#D8955A",
  // },

  // orangeButton: {
  //   backgroundColor: "#e3924e",
  // },

  // greyButton: {
  //   backgroundColor: "#f5f1f0",
  // },

  // darkTanButton: {
  //   backgroundColor: "#973618",
  // },
  // blueButton: {
  //   backgroundColor: "#52a6cb",
  // },
});

export default Profile;
