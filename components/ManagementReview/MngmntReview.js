import React, { useState } from "react";
import { Text, View } from "react-native";
import Header from "../Header";
function MngmntReivew(props) {
  return (
    <View>
      <Header props={props} />
      <Text style={{ textAlign: "center" }}>
        Management Review Will be Here
      </Text>
    </View>
  );
}

export default MngmntReivew;
