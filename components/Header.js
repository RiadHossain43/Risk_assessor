import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Header({ props }) {
  // console.log(props.navigation.toggleDrawer);
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="cover"
        />
        MS Systems
      </Text>
      <TouchableOpacity onPress={props.navigation.toggleDrawer}>
        <Ionicons name="md-menu" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "#1B4965",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 50,
    height: 25,
  },
  text: {
    textAlign: "left",
    fontSize: 20,
    color: "white",
    flexDirection: "row",
  },
});

export default Header;
