import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions,
} from "react-native";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import RiskAdd from "./RiskAdd";
import { Formik } from "formik";
import { colorPallate } from "../GlobalStyleVars";
import { color } from "react-native-reanimated";
function getClosedTime() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let month = monthNames[date.getMonth()];
  let year = date.getFullYear();
  let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let mimutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let ampm = hour > 12 ? "pm" : "am";
  hour = hour > 12 ? "0" + (hour - 12) : hour;
  let time = `${day} ${month} ${year}`; // ${hour}:${mimutes} ${ampm}
  return time;
}
function Form({ acceptRisk, AcceptRiskList }) {
  console.log(AcceptRiskList);
  return (
    <Formik
      initialValues={acceptRisk.item}
      onSubmit={(values) => {
        values.accepted = true;
        values.accepted_on = getClosedTime();
        AcceptRiskList(values);
      }}
    >
      {(props) => (
        <View style={styles.form}>
          <TextInput
            style={[styles.inputs, { width: "100%" }]}
            placeholder="Acceptance rational"
            onChangeText={props.handleChange("acceptance_rational")}
            value={props.values.acceptance_rational}
            numberOfLines={3}
            multiline={true}
          />
          <TextInput
            style={[styles.inputs, { width: "100%" }]}
            placeholder="Decision maker"
            onChangeText={props.handleChange("decession_maker")}
            value={props.values.decession_maker}
            numberOfLines={3}
            multiline={true}
          />
          <TouchableOpacity
            style={styles.riskaddbtn}
            onPress={props.handleSubmit}
          >
            <Text style={{ fontSize: 20, color: colorPallate.theme }}>
              Accept
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

function Acceptform({ acceptOpen, setAcceptOpen, acceptRisk, AcceptRiskList }) {
  return (
    <Modal transparent={true} visible={acceptOpen} animationType={"slide"}>
      <View
        style={{
          marginTop: "auto",
          backgroundColor: "#eeeeee",
        }}
      >
        <View style={styles.formtop}>
          <TouchableOpacity onPress={() => setAcceptOpen(false)}>
            <Entypo
              name="chevron-small-down"
              size={30}
              color={colorPallate.white}
              style={styles.backbtn}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, color: colorPallate.white }}>
            Accept Risk
          </Text>
        </View>

        <View style={styles.modal}>
          <Form acceptRisk={acceptRisk} AcceptRiskList={AcceptRiskList} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backbtn: {
    margin: 15,
    alignSelf: "center",
  },
  formtop: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colorPallate.theme,
  },
  form: {
    backgroundColor: colorPallate.primary,
    padding: 10,
  },
  inputs: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 6,
    textAlignVertical: "top",
    fontSize: 18,
    color: "#27323f",

    shadowColor: "#CAE9FF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 6,
  },
  modal: {
    marginTop: "auto",
    backgroundColor: colorPallate.theme,
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
  riskaddbtn: {
    marginVertical: 10,
    backgroundColor: colorPallate.secondary,
    borderRadius: 6,
    alignItems: "center",
    padding: 8,
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

export default Acceptform;
