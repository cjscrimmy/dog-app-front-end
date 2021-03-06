import React from "react";

import { StyleSheet, Text, View, ImageBackground } from "react-native";
import WideBox from "../styled-components/WideBox";
import Logo from "../styled-components/Logo";
import WideButton from "../styled-components/WideButton";

const image = {
  uri:
    "https://image.shutterstock.com/image-vector/dogs-banner-260nw-441292900.jpg",
};

const GridTestComponent = () => {
  return (
    <>
      <WideBox>
        <Logo>
          <WideButton>
            <Text style={styles.buttonText}>@ NextBestFriend</Text>
          </WideButton>
        </Logo>
      </WideBox>

      <WideBox>
        <View style={styles.wideButton}>
          <ImageBackground
            source={image}
            style={styles.image}
          ></ImageBackground>
        </View>
      </WideBox>

      <WideBox>
        <View style={styles.wideButton}>
          <Text style={styles.buttonText}>Find your next best friend</Text>
        </View>
      </WideBox>

      <WideBox>
        <View style={styles.button1}>
          <Text style={styles.buttonText}>Articles</Text>
        </View>
      </WideBox>

      <View style={styles.container}>

        <View style={styles.box1}>
          <View style={styles.button2}>
            <Text style={styles.buttonText}>Profile</Text>
          </View>
        </View>

        <View style={styles.box2}>
          <View style={styles.button2}>
            <Text style={styles.buttonText}>Local Services</Text>
          </View>
        </View>
        
      </View>

     
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "center",
  },
  box1: {
    backgroundColor: "#973618",
    alignItems: "center",
    margin: 0,
    width: "50%",
  },
  box2: {
    backgroundColor: "#f5f1f0",
    alignItems: "center",
    margin: 0,
    width: "50%",
  },
  button: {
    color: "blue",
  },
  button1: {
    width: "100%",
    height: 100,
    backgroundColor: "#e3924e",
    justifyContent: "center",
  },
  button2: {
    width: "100%",
    height: 100,
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  
  text: {
    color: "black",
  }
});

export default GridTestComponent;
