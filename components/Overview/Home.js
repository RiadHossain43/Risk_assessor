import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../Header";
import Dashboard from "./Dashboard";

function Home(props) {
  // console.log(props);
  return (
    <View style={styles.container}>
      <Header props={props}></Header>
      {/* <ScrollView style={styles.scrollView}> */}
      <Dashboard />
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2FFFE",
  },
  scrollView: {},
});

export default Home;
