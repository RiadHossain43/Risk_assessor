import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Overview from "../components/Overview/Home";
import Invenoties from "../components/Inventoroies/Inventories";
import Risk_Management from "../components/RiskMangement/AssesRisk";
import InternalAudits from "../components/Audits/InternalAudits";
import ManagementReview from "../components/ManagementReview/MngmntReview";
import ControlsImporvement from "../components/ContinualImprovements/ContImpove";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import {
  AntDesign,
  Ionicons,
  Entypo,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Overview"
          component={Overview}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="dashboard"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Invenoties"
          component={Invenoties}
          options={{
            drawerIcon: ({ focused, size }) => (
              <SimpleLineIcons
                name="drawer"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Risk Management"
          component={Risk_Management}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="dashboard"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Audits"
          component={InternalAudits}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="dashboard"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Management Review"
          component={ManagementReview}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="dashboard"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Controls and Imporvement"
          component={ControlsImporvement}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="dashboard"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="How it works"
          component={HowItWorks}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="dashboard"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
