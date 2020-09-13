import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Summery } from "./Risksummery";
import { TouchableOpacity } from "react-native-gesture-handler";
import ManagementChart from "./ManagementChart";
import Auditsummery from "./Auditsummery";
import Managementsummery from "./Managementsummery";
import { getInventoryData } from "../DashboardDataTest/InventoriesData";
function Inventories() {
  let data;
  useEffect(() => {
    data = getInventoryData();
    console.log(data);
  });

  return (
    <View style={styles.inventories}>
      <Text style={styles.inventory}>Inventories</Text>
      <View style={styles.assetbtnCont}>
        <TouchableOpacity style={styles.assetbtn}>
          <Text style={styles.riskamount}>0</Text>
          <Text style={styles.text}>Hardware</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.assetbtn}>
          <Text style={styles.riskamount}>0</Text>
          <Text style={styles.text}>Software</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.assetbtn}>
          <Text style={styles.riskamount}>0</Text>
          <Text style={styles.text}>Org</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.assetbtn}>
          <Text style={styles.riskamount}>0</Text>
          <Text style={styles.text}>People</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.assetbtn}>
          <Text style={styles.riskamount}>0</Text>
          <Text style={styles.text}>Premises</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Dashboard() {
  return (
    <View>
      <View style={[styles.sections, { marginVertical: 0 }]}>
        <Inventories />
      </View>
      <View style={styles.board}>
        <View style={styles.sections}>
          <Summery />
        </View>
        <View style={styles.sections}>
          <Auditsummery />
        </View>
        <View style={styles.sections}>
          <Managementsummery />
        </View>
        <View style={styles.sections}>
          <ManagementChart />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  assetbtnCont: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  assetbtn: {
    marginVertical: 4,
    borderRadius: 6,
    backgroundColor: "#CAE9FF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: "#1B4965",
  },
  board: {
    padding: 15,
  },
  inventories: {
    backgroundColor: "white",
    paddingVertical: 4,
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
  inventory: {
    marginHorizontal: 10,
    fontSize: 15,
    color: "#62B6CB",
  },

  riskamount: {
    height: 24,
    width: 24,
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: "center",
    fontSize: 11,
    textAlign: "center",
    paddingVertical: 5,
  },
  summerycont: {
    paddingVertical: 15,
    paddingHorizontal: "auto",
    display: "flex",

    justifyContent: "center",
    flexWrap: "wrap",
  },
  sections: {
    marginVertical: 5,
  },
  text: {
    textAlign: "left",
    fontSize: 12,
  },
});

export default Dashboard;
