import React, { useState } from "react";
import { Text, View } from "react-native";
import Header from "../Header";
import ReviewList from "./ReviewList";
function MngmntReivew(props) {
  return (
    <View style={{ flex: 1 }}>
      <Header props={props} />
      <ReviewList />
    </View>
  );
}

export default MngmntReivew;
