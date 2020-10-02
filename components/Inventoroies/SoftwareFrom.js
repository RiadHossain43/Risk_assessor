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
import OpenDocs from "./OpenDocs";
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
  let [attachments, setAttahments] = useState([]);

  let initVal = {
    key: (
      Math.random() +
      Math.random() -
      (Math.random() * Math.random()) / Math.random()
    ).toString(),
    software_name: "",
    number_of_license: "",
    number_of_installs: "",
    keys: "",
    attachments: [],
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
            <Text style={styles.label}>Software Name</Text>
            <TextInput
              style={[styles.inputs]}
              placeholder="Software name"
              onChangeText={props.handleChange("software_name")}
              value={props.values.software_name}
            />
            <Text style={styles.label}>Number of licenses</Text>
            <TextInput
              style={[styles.inputs]}
              placeholder="Number of licenses"
              onChangeText={props.handleChange("number_of_license")}
              value={props.values.number_of_license}
            />

            <Text style={styles.label}>Number of installs</Text>
            <TextInput
              style={styles.inputs}
              placeholder="Number of installs"
              onChangeText={props.handleChange("number_of_installs")}
              value={props.values.number_of_installs}
            />
            <Text style={styles.label}>Keys</Text>
            <TextInput
              style={styles.inputs}
              placeholder="Keys"
              onChangeText={props.handleChange("keys")}
              value={props.values.keys}
            />
            <Text style={styles.label}>Attachments</Text>
            <OpenDocs setDoclst={setAttahments} doclst={attachments} />
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
