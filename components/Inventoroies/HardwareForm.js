import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import { Formik } from "formik";
import { FontAwesome, Ionicons, Entypo } from "@expo/vector-icons";

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

function HardWareForm({ editAudit }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  let [dateState, setDateState] = useState("");
  const [assignedDate, setassignedDate] = useState("");
  const [returnDate, setreturnDate] = useState("");

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
    dateState == "start" && setassignedDate(`${day} ${month} ${year}`);
    dateState == "end" && setreturnDate(`${day} ${month} ${year}`);
    hideDatePicker();
  };

  let initVal = {
    key: (
      Math.random() +
      Math.random() -
      (Math.random() * Math.random()) / Math.random()
    ).toString(),
    asset_name: "",
    tag: "",
    owner: "",
    assigned_date: "",
    return_date: "",
  };

  return (
    <View style={styles.riskAddition}>
      <Formik
        initialValues={editAudit == undefined ? initVal : editAudit.item}
        onSubmit={(values) => {
          //   values.submission = getSubmissionTime();
          // values.nonConformity = nonCoformitylst;
          //   values.conformance = conformancelst;
          //   values.docs = doclst;
          //   values.scheduleDate = schedule;
          //   addSchedule(values);
          //   formClose();
          //   editRisk == undefined && setInventoryData(formTitle);
          //   editRisk != undefined && closeDetailView();
        }}
      >
        {(props) => (
          <View style={styles.form}>
            <Text style={styles.label}>Asset</Text>
            <TextInput
              style={[styles.inputs]}
              placeholder="Asset name"
              onChangeText={props.handleChange("asset_name")}
              value={props.values.asset_name}
            />
            <Text style={styles.label}>Tag</Text>
            <TextInput
              style={[styles.inputs]}
              placeholder="Asset tag"
              onChangeText={props.handleChange("tag")}
              value={props.values.tag}
            />

            <Text style={styles.label}>Onwer</Text>
            <TextInput
              style={styles.inputs}
              placeholder="Asset owner"
              onChangeText={props.handleChange("owner")}
              value={props.values.owner}
            />
            <>
              <Text style={styles.label}>Assigned date</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TextInput
                  value={assignedDate}
                  placeholder="System start date"
                  style={[styles.inputs, { width: "80%" }]}
                />
                <TouchableOpacity
                  style={[
                    styles.datebtn,
                    { width: "18%", backgroundColor: colorPallate.secondary },
                  ]}
                  onPress={() => {
                    setDateState("start");
                    showDatePicker();
                  }}
                >
                  <FontAwesome name="calendar" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <Text style={styles.label}>Return date</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <TextInput
                  value={returnDate}
                  placeholder="System end date"
                  style={[styles.inputs, { width: "80%" }]}
                />
                <TouchableOpacity
                  style={[
                    styles.datebtn,
                    { width: "18%", backgroundColor: colorPallate.secondary },
                  ]}
                  onPress={() => {
                    setDateState("end");
                    showDatePicker();
                  }}
                >
                  <FontAwesome name="calendar" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </>

            <TouchableOpacity
              style={styles.riskaddbtn}
              onPress={props.handleSubmit}
            >
              <Text style={{ fontSize: 20, color: colorPallate.primary }}>
                {editAudit == undefined ? "Add asset" : "Update"}
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
  datebtn: {
    marginVertical: 0,
    backgroundColor: colorPallate.theme,
    borderRadius: 6,
    alignItems: "center",
    padding: 8,
    marginVertical: 8,
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
  label: {
    color: colorPallate.theme,
    marginVertical: 4,
  },
  riskaddbtn: {
    marginVertical: 0,
    backgroundColor: colorPallate.theme,
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

export default HardWareForm;
