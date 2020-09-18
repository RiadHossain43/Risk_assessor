import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Foundation, AntDesign } from "@expo/vector-icons";
import { Summery } from "./Risksummery";
import { TouchableOpacity } from "react-native-gesture-handler";
import Auditsummery from "./Auditsummery";
import Managementsummery from "./Managementsummery";
// import { getInventoryData } from "../OrganizationDataTest/InventoriesData";
import { colorPallate } from "../GlobalStyleVars";
function Organization() {
  return (
    <View>
      <View style={[styles.flex_row, styles.containers]}>
        <View style={[styles.flex_row, styles.orgConf, styles.statetitlebox]}>
          <AntDesign name="heart" size={20} color={colorPallate.red} />
          <Text style={[styles.title]}>Organisational state</Text>
        </View>
        <View style={[styles.orgConf, styles.state]}>
          <Text style={[styles.title, { color: "white" }]}>Vulnarable</Text>
        </View>
      </View>
      <View style={[styles.containers]}>
        <View style={[styles.flex_row]}>
          <View style={[styles.flex_row, styles.orgConf, styles.statetitlebox]}>
            <Foundation
              name="graph-horizontal"
              size={24}
              color={colorPallate.theme}
            />
            <Text style={[styles.title]}>Organisational confidence</Text>
          </View>
          <View style={[styles.orgConf, styles.confilvl]}>
            <Text style={[styles.title]}>80%</Text>
          </View>
        </View>
        <View style={[styles.flex_row, { paddingHorizontal: 13 }]}>
          <View style={styles.progressbar}>
            <View style={styles.progress}></View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containers: {
    marginBottom: 10,
    borderRadius: 6,
    overflow: "hidden",
    shadowColor: "#CAE9FF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  confilvl: {
    marginLeft: "auto",
    paddingHorizontal: 15,
  },
  flex_row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  orgConf: {
    paddingVertical: 10,
  },
  progressbar: {
    backgroundColor: colorPallate.secondary,
    width: "100%",
    height: 10,
    marginVertical: 5,
    borderRadius: 30,
    overflow: "hidden",
  },
  progress: {
    width: "70%",
    backgroundColor: colorPallate.dashBoardseparator,
    height: "100%",
    borderRadius: 30,
  },
  statetitlebox: {
    paddingHorizontal: 15,
  },
  state: {
    marginLeft: "auto",
    backgroundColor: colorPallate.red,
    borderRadius: 6,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

export default Organization;
