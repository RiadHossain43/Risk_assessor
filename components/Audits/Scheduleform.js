import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  CheckBox,
  TouchableOpacity,
} from "react-native";

import { Formik } from "formik";

import { setInventoryData } from "../DashboardDataTest/InventoriesData";
function getSubmissionTime() {
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
  let time = `${day} ${month} ${year}`; // ; ${hour}:${mimutes} ${ampm}
  return time;
}

function Scheduleform({
  addRisk,
  formClose,
  editRisk,
  closeDetailView,
  formTitle,
}) {
  let initVal = {
    key: (
      Math.random() +
      Math.random() -
      (Math.random() * Math.random()) / Math.random()
    ).toString(),
    nonConformity: "",
    conformance: "",
    businessFunction: "",
    risk: "",
    imprvOpportun: "",
  };

  return (
    <View style={styles.riskAddition}>
      <Formik
        initialValues={editRisk == undefined ? initVal : editRisk.item}
        onSubmit={(values) => {
          //   values.submission = getSubmissionTime();
          //   values.consequence = consq;
          //   values.likelyhood = lkhd;
          //   addRisk(values);
          //   formClose();
          //   editRisk == undefined && setInventoryData(formTitle);
          //   editRisk != undefined && closeDetailView();
        }}
      >
        {(props) => (
          <View style={styles.form}>
            <TextInput
              style={[styles.inputs]}
              placeholder="Business Function"
              onChangeText={props.handleChange("businessFunction")}
              value={props.values.businessFunction}
            />

            <TextInput
              style={styles.inputs}
              placeholder="Add Non Conformity"
              onChangeText={props.handleChange("nonConformity")}
              value={props.values.nonConformity}
              numberOfLines={5}
              multiline={true}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Add Conformance"
              onChangeText={props.handleChange("conformance")}
              value={props.values.conformance}
              numberOfLines={5}
              multiline={true}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Risks"
              onChangeText={props.handleChange("mitigation")}
              value={props.values.risk}
              numberOfLines={5}
              multiline={true}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Opportunity for Improvements"
              onChangeText={props.handleChange("imprvOpportun")}
              value={props.values.imprvOpportun}
              numberOfLines={5}
              multiline={true}
            />

            <TouchableOpacity
              style={styles.riskaddbtn}
              onPress={props.handleSubmit}
            >
              <Text style={{ fontSize: 20 }}>Book</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  flexrow: {
    flexDirection: "row",
  },

  form: {
    padding: 15,
    backgroundColor: "white",
  },
  inventorybtn: {
    alignItems: "center",
    backgroundColor: "#CAE9FF",
    borderRadius: 6,
    flexDirection: "row",
    marginLeft: "auto",
    paddingHorizontal: 6,
    marginVertical: 5,
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
  levelbox: {
    width: 30,
    height: 30,
    borderRadius: 18,
    textAlign: "center",
    padding: 5,
    borderWidth: 5,
  },
  riskaddbtn: {
    marginVertical: 0,
    backgroundColor: "#CAE9FF",
    borderRadius: 6,
    alignItems: "center",
    padding: 8,
  },
  risklevel: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 3,
    alignItems: "center",
  },
  riskAddition: {
    // backgroundColor: "#F2FFFE",
    backgroundColor: "white",
  },
  ratingcontainer: {
    marginVertical: 5,
  },
  slidertrack: {
    height: 8,
    borderRadius: 6,
    backgroundColor: "#CAE9FF",
  },
  sliderthumb: {
    backgroundColor: "white",
    borderColor: "#5FA8D3",
    borderWidth: 2,
  },
  slidercaption: {
    fontSize: 20,
    color: "#62B6CB",
    fontWeight: "bold",
  },
});

export default Scheduleform;
