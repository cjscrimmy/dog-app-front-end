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
import { ServerStyleSheet } from "styled-components";

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
            <Text style={styles.title}>Next Best Friend</Text>
          </View>
        </SafeAreaView>
      </ScrollView>

      <TouchableOpacity style={(styles.buttonRow, styles.tanrow)}>
        <View>
          <Text style={styles.buttonText}>Jayne MacDonald </Text>
        </View>
      </TouchableOpacity>

      <ScrollView>
        <SafeAreaView>
          <View>
            <Image
              style={styles.image}
              source={require("../assets/ProfilePic.png")}
            ></Image>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View>
        <Text style={styles.button1}>Jayne MacDonald</Text>
      </View>

      <TouchableOpacity style={(styles.buttonRow, styles.tanrow)}>
        <View>
          <Text style={styles.button2}>
            Hi,I'm Jayne, 34, live in a lovely cottage in Balmain. l have grown
            up with 3 adorable dogs. Living with dogs for 20 years made me a big
            dog lover and an expert of their body language. l will be at home
            and your dog will receive lots of hugs, pets and understanding and
            if it is feeling up for it- a walking buddy. When you are not
            around, l will try to make it peaceful and have fun. Whilst in my
            care I will be sure to keep you updated with lots of photos and
            videos.{" "}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={(styles.buttonRow, styles.tanrow)}>
        <View>
          <Text style={styles.buttonText}>Local Services</Text>
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
    width: 400,
    height: 200,
    alignItems: "center",
    flexGrow: 1,
    flex: 1,
    justifyContent: "center",
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "300",
    backgroundColor: "#4DA49C",
    color: "white",
    paddingVertical: 15,
  },
  button2: {
    color: "black",
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  button1: {
    color: "white",
    width: "100%",
    height: 100,
    backgroundColor: "#e3924e",
    justifyContent: "center",
  },
  // titleContainer {
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
