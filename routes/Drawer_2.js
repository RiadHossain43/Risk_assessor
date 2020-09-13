import * as React from "react";
import { Button, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import User from "../components/User/User";
import Overview from "../components/Overview/Home";
import Invenoties from "../components/Inventoroies/Inventories";
import Risk_Management from "../components/RiskMangement/AssesRisk";
import InternalAudits from "../components/Audits/InternalAudits";
import ManagementReview from "../components/ManagementReview/MngmntReview";
import ControlsImporvement from "../components/ContinualImprovements/ContImpove";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import {
  AntDesign,
  EvilIcons,
  Entypo,
  MaterialIcons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Animated from "react-native-reanimated";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Overview">
        <Drawer.Screen
          name="Reyad Hossain"
          component={User}
          options={{
            drawerIcon: ({ focused, size }) => (
              <View
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 70,
                  borderColor: "black",
                  borderWidth: 1,
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <EvilIcons
                  name="user"
                  size={35}
                  color={focused ? "#7cc" : "#ccc"}
                />
              </View>
            ),
          }}
        />

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
              <AntDesign
                name="CodeSandbox"
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
              <Entypo
                name="tools"
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
              <MaterialCommunityIcons
                name="clipboard-text-outline"
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
                name="rate-review"
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
              <SimpleLineIcons
                name="graph"
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
              <AntDesign
                name="questioncircleo"
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