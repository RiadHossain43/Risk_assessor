import React, { useState } from "react";
import { Text, View } from "react-native";
import Header from "../Header";
function HowItWorks(props) {
  return (
    <View>
      <Header props={props} />
      <Text style={{ textAlign: "center" }}>
        A well documented section will be here for the user manual
      </Text>
    </View>
  );
}

export default HowItWorks;
