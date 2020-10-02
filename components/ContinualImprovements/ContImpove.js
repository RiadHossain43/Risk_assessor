import React, { useState } from "react";
import { Text, View } from "react-native";
import Header from "../Header";
import ContImpList from "./ContinualImpList";
function ContImprove(props) {
  return (
    <View style={{ flex: 1 }}>
      <Header props={props} />
      <ContImpList />
    </View>
  );
}

export default ContImprove;
