import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../Header";

import Bottomtabs from "./Bottomtabs";
function AssesRisk(props) {
  // console.log(props);
  let risk = {};
  return (
    <View style={styles.container}>
      <Header props={props}></Header>
      <Bottomtabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2FFFE",
  },
});
export default AssesRisk;
