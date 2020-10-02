import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colorPallate } from "../GlobalStyleVars";
function WelComeTab1({ navigation }) {
  console.log(navigation);
  return (
    <View style={styles.tabs}>
      <Text
        style={{ fontSize: 30, color: colorPallate.theme, textAlign: "center" }}
      >
        Create your integrated management system (iMS)
      </Text>
      {/* <TouchableOpacity>
        <Text>Next</Text>
      </TouchableOpacity> */}
    </View>
  );
}
function WelComeTab2({ supperNavigation }) {
  console.log(supperNavigation);
  return (
    <View style={styles.tabs}>
      <Text
        style={{ fontSize: 30, color: colorPallate.theme, textAlign: "center" }}
      >
        Combine all related componenets of your business operation into one
        integrated system for easier management and operation
      </Text>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: colorPallate.secondary,
          borderRadius: 6,
          marginVertical: 30,
        }}
        onPress={() => supperNavigation.goBack()}
      >
        <Text style={{ color: colorPallate.theme, fontSize: 20 }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();
export default function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name="Create"
          children={() => <WelComeTab1 supperNavigation={navigation} />}
        />
        <Tab.Screen
          name="Combine"
          children={() => <WelComeTab2 supperNavigation={navigation} />}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: colorPallate.white,
  },
});
