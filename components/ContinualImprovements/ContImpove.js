import React, { useState } from "react";
import { Text, View } from "react-native";
import Header from "../Header";
function ContImprove(props) {
  return (
    <View>
      <Header props={props} />
      <Text style={{ textAlign: "center" }}>
        Continual Improvements Will be Here
      </Text>
    </View>
  );
}

export default ContImprove;
