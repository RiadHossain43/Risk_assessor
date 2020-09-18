import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

// import RootNavigator from "./routes/Drawer_2";
import Login from "./components/login/login";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
      {/* <RootNavigator /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
