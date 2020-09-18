import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Formik } from "formik";
import { FontAwesome, Ionicons, Entypo } from "@expo/vector-icons";
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

function CreatForm({ handleCreate, setFormOpen }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [startSchedule, setStartSchedule] = useState("");
  const [endSchedule, setEndSchedule] = useState("");
  let [dateState, setDateState] = useState("");
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
    dateState == "start" && setStartSchedule(`${day} ${month} ${year}`);
    dateState == "end" && setEndSchedule(`${day} ${month} ${year}`);
    hideDatePicker();
  };
  let initVal = {
    key: (
      Math.random() +
      Math.random() -
      (Math.random() * Math.random()) / Math.random()
    ).toString(),
    businessFunction: "",
    responsibility: "",
    number_of_staffs: "",
    add_job_role: "",
    building_name: "",
    address: "",
    postalcode: "",
    system_start_date: "",
    system_end_date: "",
  };

  return (
    <ScrollView style={styles.CreateForm}>
      <Formik
        initialValues={initVal}
        onSubmit={(values) => {
          handleCreate();
          setFormOpen(false);
        }}
      >
        {(props) => (
          <View style={styles.form}>
            <Text style={styles.label}>Add Business Function</Text>
            <TextInput
              style={[styles.inputs]}
              placeholder="Business function name"
              onChangeText={props.handleChange("businessFunction")}
              value={props.values.businessFunction}
            />
            <Text style={styles.label}>Responsibility</Text>
            <TextInput
              style={[styles.inputs]}
              placeholder="Responsibility"
              onChangeText={props.handleChange("responsibility")}
              value={props.values.responsibility}
            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ width: "42%" }}>
                <Text>Number of staffs</Text>
                <TextInput
                  style={[styles.inputs]}
                  placeholder="Number of staffs"
                  onChangeText={props.handleChange("number_of_staffs")}
                  value={props.values.number_of_staffs}
                />
              </View>
              <View style={{ width: "56%" }}>
                <Text>Add job role</Text>
                <TextInput
                  style={[styles.inputs]}
                  placeholder="Add job role"
                  onChangeText={props.handleChange("add_job_role")}
                  value={props.values.add_job_role}
                />
              </View>
            </View>

            <Text style={styles.label}>Add premises</Text>
            <TextInput
              style={[styles.inputs]}
              placeholder="Building name"
              onChangeText={props.handleChange("building_name")}
              value={props.values.building_name}
            />
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={[styles.inputs]}
              placeholder="Auditor's name"
              onChangeText={props.handleChange("address")}
              value={props.values.address}
            />
            <Text style={styles.label}>Post Code</Text>
            <TextInput
              style={[styles.inputs]}
              placeholder="Post Code"
              onChangeText={props.handleChange("postalcode")}
              value={props.values.postalcode}
            />
            <Text style={styles.label}>System start date</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                value={startSchedule}
                placeholder="System start date"
                style={[styles.inputs, { width: "80%" }]}
              />
              <TouchableOpacity
                style={[
                  styles.Createbtn,
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
            <Text style={styles.label}>System end date</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                value={endSchedule}
                placeholder="System end date"
                style={[styles.inputs, { width: "80%" }]}
              />
              <TouchableOpacity
                style={[
                  styles.Createbtn,
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
            <TouchableOpacity
              style={styles.Createbtn}
              onPress={props.handleSubmit}
            >
              <Text style={{ fontSize: 20, color: colorPallate.primary }}>
                Create
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
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
  label: {
    color: colorPallate.theme,
    marginVertical: 4,
  },
  Createbtn: {
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
  CreateForm: {
    backgroundColor: colorPallate.primary,
  },
  ratingcontainer: {
    marginVertical: 5,
  },
});

export default CreatForm;
