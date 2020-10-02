import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  Feather,
  Ionicons,
  FontAwesome5,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Summery } from "./Risksummery";
import { TouchableOpacity } from "react-native-gesture-handler";
import Auditsummery from "./Auditsummery";
import Organization from "./Organiztion";
import Managementsummery from "./Managementsummery";
import { getInventoryData } from "../DashboardDataTest/InventoriesData";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colorPallate } from "../GlobalStyleVars";
const Tab = createMaterialBottomTabNavigator();

function TestCopm() {
  return (
    <ScrollView style={{ backgroundColor: colorPallate.theme }}>
      <View style={styles.board}>
        <View style={styles.sections}>
          <Text style={styles.separatorText}>Risk summary</Text>
        </View>
        <View style={styles.sections}>
          <Summery />
        </View>
        <View style={styles.sections}>
          <View style={styles.separator}></View>
        </View>
        <View style={styles.sections}>
          <Auditsummery />
        </View>
        <View style={styles.sections}>
          <Managementsummery />
        </View>
        <View style={styles.sections}>
          <View style={styles.separator}></View>
          <Text style={styles.separatorText}>Organisation</Text>
        </View>
        <View style={styles.sections}>
          <Organization />
        </View>
      </View>
    </ScrollView>
  );
}

function Dashboard() {
  return (
    <Tab.Navigator
      initialRouteName="Hardware"
      activeColor={colorPallate.white}
      inactiveColor={colorPallate.lightGreen}
      barStyle={styles.tabBar}
    >
      <Tab.Screen
        name="Hardware 2"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="hard-drive" size={24} color={color} />
          ),
        }}
        children={() => <TestCopm />}
      />
      <Tab.Screen
        name="Software 12"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="monitor" size={24} color={color} />
          ),
        }}
        children={() => <TestCopm />}
      />
      <Tab.Screen
        name="Org 22"
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="organization" size={24} color={color} />
          ),
        }}
        children={() => <TestCopm />}
      />
      <Tab.Screen
        name="People 9"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-people" size={24} color={color} />
          ),
        }}
        children={() => <TestCopm />}
      />
      <Tab.Screen
        name="Premises 14"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="building" size={24} color={color} />
          ),
        }}
        children={() => <TestCopm />}
      />
    </Tab.Navigator>
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
    paddingHorizontal: 10,
    paddingVertical: 8,
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
    marginVertical: 6,
  },
  separator: {
    backgroundColor: colorPallate.dashBoardseparator,
    height: 2,
    borderRadius: 2,
    marginVertical: 4,
  },
  separatorText: {
    color: colorPallate.primary,
    fontSize: 15,
    fontWeight: "bold",
  },
  text: {
    textAlign: "left",
    fontSize: 12,
  },
  tabBar: {
    backgroundColor: colorPallate.theme,
    borderTopColor: colorPallate.lightGreen,
    borderTopWidth: 1,
  },
});

export default Dashboard;
