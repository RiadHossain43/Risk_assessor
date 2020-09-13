import React, { useState } from "react";
import { Text, View } from "react-native";
import Header from "../Header";
function User(props) {
  return (
    <View>
      <Header props={props} />
      <Text style={{ textAlign: "center" }}>User Section Will be Here</Text>
    </View>
  );
}

export default User;
