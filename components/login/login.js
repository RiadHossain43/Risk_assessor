import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import RootNavigator from "../../routes/Drawer_2";
import LoginForm from "./form";
export default function Login() {
  let [session, setSession] = useState(false);
  let [logedin, setLogedin] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {!logedin && !session && <LoginForm setLogedin={setLogedin} />}
      {(logedin || session) && <RootNavigator />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
