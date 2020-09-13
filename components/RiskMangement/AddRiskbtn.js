import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import RiskAdd from "./RiskAdd";

function AddRiskbtn({ __Cstyle, addRisk, formTitle }) {
  const [formOpen, setFormOpen] = useState(false);
  // console.log(formTitle);
  function formClose() {
    setFormOpen(false);
    // console.log("fired add form");
  }

  return (
    <View style={[styles.container]}>
      <Modal visible={formOpen} animationType={"fade"}>
        <View style={styles.formtop}>
          <TouchableOpacity onPress={() => setFormOpen(false)}>
            <Entypo
              name="arrow-with-circle-left"
              size={24}
              color="black"
              style={styles.backbtn}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>{formTitle}</Text>
        </View>

        <ScrollView style={styles.modal}>
          <RiskAdd
            addRisk={addRisk}
            formClose={formClose}
            formTitle={formTitle}
          />
        </ScrollView>
      </Modal>

      <View style={styles.btn}>
        <Text style={styles.text}>Add Risk</Text>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => setFormOpen(true)}
        >
          <Ionicons name="ios-add-circle" size={35} color="#1B4965" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backbtn: {
    margin: 15,
    alignSelf: "center",
  },
  container: {
    padding: 10,
    backgroundColor: "#5FA8D3",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 13,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: "center",
    alignSelf: "flex-start",
  },

  formtop: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2FFFE",
  },
  modal: {
    backgroundColor: "white",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textAlign: "left",
    fontSize: 18,
    color: "white",
  },
  centeralign: {
    marginVertical: "auto",
  },
  scores: {
    padding: 8,
    borderWidth: 1,
    backgroundColor: "darkgray",
    color: "white",
  },
});

export default AddRiskbtn;
