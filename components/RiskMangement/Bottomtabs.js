import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";

import RiskOpenlist from "./RiskOpenlist";
import { Feather, Ionicons, FontAwesome5 } from "@expo/vector-icons";
const Tab = createMaterialBottomTabNavigator();

const assets = {
  hardware: "Hardware",
  software: "Software",
  people: "People",
  premises: "Premises",
};

function Hardware() {
  return <RiskOpenlist formTitle={assets.hardware} />;
}
function Software() {
  return <RiskOpenlist formTitle={assets.software} />;
}

function People() {
  return <RiskOpenlist formTitle={assets.people} />;
}

function Premises() {
  return <RiskOpenlist formTitle={assets.premises} />;
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Hardware"
      activeColor="#153243"
      inactiveColor="#5FA8D3"
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Hardware"
        component={Hardware}
        options={{
          tabBarLabel: "Hardware",
          tabBarIcon: ({ color }) => (
            <Feather name="hard-drive" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Software"
        component={Software}
        options={{
          tabBarLabel: "Software",
          tabBarIcon: ({ color }) => (
            <Feather name="monitor" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="People"
        component={People}
        options={{
          tabBarLabel: "People",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-people" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Premises"
        component={Premises}
        options={{
          tabBarLabel: "Premises",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="building" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
