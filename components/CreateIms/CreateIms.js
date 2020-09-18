import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colorPallate } from "../GlobalStyleVars";
import Header from "../Header";
import CreateImsBody from "./CreateImsBody";
function CreateIms(props) {
  // console.log(props.navigation.toggleDrawer);
  return (
    <View style={{ flex: 1 }}>
      <Header props={props} />
      <CreateImsBody />
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 25,
  },
  text: {
    textAlign: "left",
    fontSize: 20,
    color: colorPallate.primary,
    flexDirection: "row",
  },
});

export default CreateIms;
