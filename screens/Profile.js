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
          <Text style={styles.buttonText}>Jayne MacDonald </Text>
        </View>

        <View>
            <Image
              style={styles.image}
              source={require("../assets/ProfilePic.png")}
            ></Image>
        </View>

          <Text style={styles.buttonText}>My favourite best friends..</Text>
          <Text style={styles.buttonText}>Looking for... Border Terrier</Text>
          <Text style={styles.buttonText}>Home town... Dundee</Text>
          
          <Text style={styles.profileText}>Edit Profile</Text>

          
            
      
        </SafeAreaView>
      </ScrollView>

  

      <Footer></Footer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#66a5c7",
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
    padding: 10,
    flex:1,
    justifyContent: 'center',
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
    backgroundColor: "#D07A38",
    color: "white",
    paddingVertical: 15,
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
