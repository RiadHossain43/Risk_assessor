import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  CheckBox,
  TouchableOpacityBase,
} from "react-native";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

function OpenClosebtn({ handleRiskTabs }) {
  let [openbtnActive, setOpenbtnactive] = useState(true);
  let [closebtnActive, setClosebtnactive] = useState(false);
  let [buttonWidth, setButtonwidth] = useState(null);

  return (
    <View style={styles.container}>
      <View
        onLayout={(event) => {
          var { x, y, width, height } = event.nativeEvent.layout;
          setButtonwidth(width);
        }}
        style={[styles.common, openbtnActive ? styles.active : styles.dactive]}
      >
        <TouchableOpacity
          onPress={() => {
            handleRiskTabs.activateRisks();
            setOpenbtnactive(true);
            setClosebtnactive(false);
          }}
        >
          <View style={[styles.button, { width: buttonWidth }]}>
            <Text style={openbtnActive ? styles.textactv : styles.textdactv}>
              Open
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={[styles.common, closebtnActive ? styles.active : styles.dactive]}
      >
        <TouchableOpacity
          onPress={() => {
            handleRiskTabs.activateClosedRisks();
            setOpenbtnactive(false);
            setClosebtnactive(true);
          }}
        >
          <View style={[styles.button, { width: buttonWidth }]}>
            <Text style={closebtnActive ? styles.textactv : styles.textdactv}>
              Closed
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 9,
    alignItems: "center",
  },
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 70,
    flexDirection: "row",
    overflow: "hidden",
    borderColor: "#62B6CB",
    borderWidth: 1,
  },
  common: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  active: {
    backgroundColor: "#62B6CB",
  },
  dactive: {
    backgroundColor: "white",
  },

  textactv: {
    color: "white",
    fontSize: 16,
  },
  textdactv: {
    color: "#45a29e",
    fontSize: 16,
  },
});

export default OpenClosebtn;
