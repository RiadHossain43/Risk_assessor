import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import { Formik } from "formik";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { setInventoryData } from "../DashboardDataTest/InventoriesData";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { colorPallate } from "../GlobalStyleVars";
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

function getSubmissionTime() {
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
  addSchedule,
  formClose,
  editAudit,
  closeDetailView,
  formTitle,
}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [nonCoformitylst, setNonConformitylst] = useState(
    editAudit == undefined ? [] : editAudit.item.nonConformity
  );
  const [conformancelst, setConformancelst] = useState(
    editAudit == undefined ? [] : editAudit.item.conformance
  );
  const [schedule, setSchedule] = useState(
    editAudit == undefined ? "" : editAudit.item.scheduleDate
  );

  const [nonCoformity, setNonConformity] = useState("");
  const [conformance, setConformance] = useState("");

  const [nonConfSucc_msg, setnonConfSucc_msg] = useState(false);
  const [ConfSucc_msg, setConfSucc_msg] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    let year = date.getFullYear();
    let month = monthNames[date.getMonth()];
    let day = date.getDate();
    setSchedule(`${day} ${month} ${year}`);
    hideDatePicker();
  };
  function renderList(List) {
    return List.map((item, index) => {
      return (
        <Text>
          {index + 1}. {item}
        </Text>
      );
    });
  }

  let initVal = {
    key: (
      Math.random() +
      Math.random() -
      (Math.random() * Math.random()) / Math.random()
    ).toString(),
    nonConformity: [],
    conformance: [],
    businessFunction: "",
    risk: "",
    imprvOpportun: "",
    submission: "",
    closed: "",
    completed: false,
    scheduleDate: "",
  };

  return (
    <View style={styles.riskAddition}>
      <Formik
        initialValues={editAudit == undefined ? initVal : editAudit.item}
        onSubmit={(values) => {
          values.submission = getSubmissionTime();
          values.nonConformity = nonCoformitylst;
          values.conformance = conformancelst;
          values.scheduleDate = schedule;
          addSchedule(values);
          formClose();
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
            {renderList(nonCoformitylst)}
            {nonConfSucc_msg && (
              <Text style={{ color: colorPallate.success_msg }}>
                Non Conformity added successfuly
              </Text>
            )}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <TextInput
                style={[styles.inputs, { width: "85%" }]}
                placeholder="Add Non Conformity"
                onChangeText={(nonConf) => {
                  // props.handleChange("nonConformity");
                  setNonConformity(nonConf);
                  console.log(nonCoformity);
                }}
                value={nonCoformity}
                numberOfLines={3}
                multiline={true}
              />
              <TouchableOpacity
                style={styles.addConf}
                onPress={() => {
                  setNonConformitylst((items) => {
                    return [...items, nonCoformity];
                  });
                  setNonConformity("");
                  setnonConfSucc_msg(true);
                  setTimeout(() => setnonConfSucc_msg(false), 2000);
                  console.log(nonCoformitylst);
                }}
              >
                <Ionicons
                  name="ios-add-circle"
                  size={35}
                  color={colorPallate.theme}
                />
              </TouchableOpacity>
            </View>
            {renderList(conformancelst)}
            {ConfSucc_msg && (
              <Text style={{ color: colorPallate.success_msg }}>
                Conformance added successfuly
              </Text>
            )}
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <TextInput
                style={[styles.inputs, { width: "85%" }]}
                placeholder="Add Conformance"
                onChangeText={(Conf) => {
                  // props.handleChange("nonConformity");
                  setConformance(Conf);
                  console.log(conformance);
                }}
                value={conformance}
                numberOfLines={3}
                multiline={true}
              />
              <TouchableOpacity
                style={styles.addConf}
                onPress={() => {
                  setConformancelst((items) => {
                    return [...items, conformance];
                  });
                  setConformance("");
                  setConfSucc_msg(true);
                  setTimeout(() => setConfSucc_msg(false), 2000);
                  console.log(conformancelst);
                }}
              >
                <Ionicons
                  name="ios-add-circle"
                  size={35}
                  color={colorPallate.theme}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.inputs}
              placeholder="Risks"
              onChangeText={props.handleChange("risk")}
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                value={schedule}
                placeholder="Select a Date"
                style={[styles.inputs, { width: "60%" }]}
              />
              <TouchableOpacity
                style={[
                  styles.riskaddbtn,
                  { width: "38%", backgroundColor: colorPallate.secondary },
                ]}
                onPress={showDatePicker}
              >
                <Text style={{ fontSize: 20, color: colorPallate.theme }}>
                  Select Date
                </Text>
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <TouchableOpacity
              style={styles.riskaddbtn}
              onPress={props.handleSubmit}
            >
              <Text style={{ fontSize: 20, color: colorPallate.secondary }}>
                Cofirm Schedule
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  addConf: {
    padding: 10,
    backgroundColor: colorPallate.secondary,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginVertical: 5,
  },
  flexrow: {
    flexDirection: "row",
  },
  form: {
    padding: 15,
  },
  inputs: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: colorPallate.white,
    borderRadius: 6,
    textAlignVertical: "top",
    fontSize: 18,
    color: colorPallate.black,

    shadowColor: "#CAE9FF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 6,
  },
  riskaddbtn: {
    marginVertical: 0,
    backgroundColor: colorPallate.primaryFocus,
    borderRadius: 6,
    alignItems: "center",
    padding: 8,
    marginVertical: 8,
  },
  risklevel: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 3,
    alignItems: "center",
  },
  riskAddition: {
    backgroundColor: colorPallate.primary,
  },
  ratingcontainer: {
    marginVertical: 5,
  },
});

export default Scheduleform;
