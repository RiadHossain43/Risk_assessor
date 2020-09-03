import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Summery } from "./Risksummery";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

function Auditsummery() {
  return (
    <View style={styles.container}>
      <View style={styles.titlebox}>
        <Text style={styles.title}>Internal Audits</Text>
        <View style={styles.progressbar}>
          <View style={styles.progress}></View>
        </View>
      </View>
      <View style={styles.cases}>
        <Ionicons
          name="md-done-all"
          size={20}
          color="#45A29E"
          style={{ marginHorizontal: 10 }}
        />
        <Text style={styles.field}>Confomaties</Text>
        <Text style={styles.figures}>25</Text>
        <Text style={styles.unit}>Cases</Text>
      </View>
      <View style={styles.cases}>
        <AntDesign
          name="closecircleo"
          size={20}
          color="#45A29E"
          style={{ marginHorizontal: 10 }}
        />
        <Text style={styles.field}>Non Confomaties</Text>
        <Text style={styles.figures}>54</Text>
        <Text style={styles.unit}>Cases</Text>
      </View>
      <View style={styles.titlebox}>
        <Text style={styles.title}>Business Function</Text>
        <View style={styles.progressbar}>
          <View style={styles.progress}></View>
        </View>
      </View>
      <View style={styles.cases}>
        <Ionicons
          name="md-done-all"
          size={20}
          color="#45A29E"
          style={{ marginHorizontal: 10 }}
        />
        <Text style={styles.field}>Audited</Text>
        <Text style={styles.figures}>44/54</Text>
        <Text style={styles.unit}>Cases</Text>
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
  },
  figures: { marginLeft: "auto", color: "#153243" },
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
  },
  unit: {
    marginHorizontal: 10,
    color: "#153243",
  },
});

export default Auditsummery;
