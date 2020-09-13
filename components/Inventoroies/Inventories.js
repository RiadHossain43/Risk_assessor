import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Header";
import Bottomtabs from "./Bottomtabs";
function Invenoties(props) {
  return (
    <View style={styles.container}>
      <Header props={props} />
      <Bottomtabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Invenoties;
