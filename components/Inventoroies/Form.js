import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { colorPallate } from "../GlobalStyleVars";
import HardwareForm from "./HardwareForm";

function Form({ inventory }) {
  let [formstate, setFormstate] = -useState("hardware");
  return (
    <View style={styles.container}>
      <HardwareForm />
    </View>
  );
}
const styles = StyleSheet.create({
  assets: {
    marginLeft: 10,
    color: colorPallate.theme,
    fontSize: 17,
  },
  container: {
    paddingVertical: 10,
  },
  listitem: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderRadius: 6,
    backgroundColor: colorPallate.white,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: colorPallate.primary,
    alignSelf: "flex-start",
    backgroundColor: colorPallate.theme,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginVertical: 10,
  },
});

export default Form;
