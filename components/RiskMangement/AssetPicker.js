import React, { useState } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import Header from "../Header";

import Bottomtabs from "./Bottomtabs";
function AssetPicker(props) {
  // console.log(props);
  let [language, setLanguage] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Assets </Text>
      <Picker
        style={styles.picker}
        selectedValue={language}
        onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
      >
        <Picker.Item label="Hardware" value="Hardware" />
        <Picker.Item label="Software" value="Software" />
        <Picker.Item label="People" value="People" />
        <Picker.Item label="Premises" value="Premises" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  picker: {
    width: "40%",
  },
  label: {
    fontSize: 18,
  },
});
export default AssetPicker;
