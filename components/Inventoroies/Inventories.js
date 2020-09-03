import React, { useState } from "react";
import { Text, View } from "react-native";
import Header from "../Header";
function Invenoties(props) {
  return (
    <View>
      <Header props={props} />
      <Text style={{ textAlign: "center" }}> Inventories Will be Here</Text>
    </View>
  );
}

export default Invenoties;
