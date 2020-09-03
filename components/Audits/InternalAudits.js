import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../Header";
import AuditList from "./AuditList";
function InternalAudits(props) {
  return (
    <View style={{ flex: 1 }}>
      <Header props={props} />
      <AuditList />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    margin: 30,
  },
});

export default InternalAudits;
