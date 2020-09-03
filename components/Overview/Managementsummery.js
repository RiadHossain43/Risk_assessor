import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

function Managementsummery() {
  return (
    <View style={styles.container}>
      <View style={styles.titlebox}>
        <Text style={styles.title}>Management Review</Text>
        <Text style={styles.datetitle}>Date</Text>
      </View>
      <View style={styles.cases}>
        <AntDesign
          name="filetext1"
          size={20}
          color="#45A29E"
          style={{ marginHorizontal: 10 }}
        />
        <Text style={styles.field}>Next Review</Text>
        <Text style={styles.figures}>22 August 2020</Text>
      </View>
      <View style={styles.cases}>
        <AntDesign
          name="filetext1"
          size={20}
          color="#45A29E"
          style={{ marginHorizontal: 10 }}
        />
        <Text style={styles.field}>Last Conducted</Text>
        <Text style={styles.figures}>23 September,2020</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cases: {
    flexDirection: "row",
    marginVertical: 4,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 6,
    shadowColor: "#CAE9FF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 5,
  },
  datetitle: {
    marginLeft: "auto",
    marginRight: 10,
    fontSize: 15,
    color: "#62B6CB",
    fontWeight: "bold",
  },
  figures: { marginLeft: "auto", color: "#153243", marginRight: 10 },
  field: {
    color: "#153243",
  },
  progressbar: {
    flex: 1,
    backgroundColor: "#CAE9FF",
    height: 10,
    marginVertical: 5,
    borderRadius: 30,
    overflow: "hidden",
    marginHorizontal: 5,
  },
  progress: {
    width: "70%",
    backgroundColor: "#5FA8D3",
    height: "100%",
    borderRadius: 30,
  },
  title: {
    marginHorizontal: 5,
    fontSize: 15,
    color: "#62B6CB",
    fontWeight: "bold",
  },
  titlebox: {
    paddingVertical: 5,
    flexDirection: "row",
    fontWeight: "bold",
    // backgroundColor: "red",
  },
  unit: {
    marginHorizontal: 10,
    color: "#153243",
  },
});

export default Managementsummery;
