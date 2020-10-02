import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Picker,
  TouchableOpacity,
} from "react-native";

import { Formik } from "formik";
import { FontAwesome, Ionicons, Entypo } from "@expo/vector-icons";
import { setInventoryData } from "../DashboardDataTest/InventoriesData";
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

function Scheduleform({
  addSchedule,
  formClose,
  editReview,
  closeDetailView,
  formTitle,
}) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [attsSucc_msg, setAttSucc_msg] = useState(false);
  const [schedule, setSchedule] = useState(
    editReview == undefined ? "" : editReview.item.scheduleDate
  );
  const [agenda, setAgenda] = useState(
    editReview == undefined ? [] : editReview.item.agenda
  );
  const [minutes, setMinutes] = useState(
    editReview == undefined ? [] : editReview.item.minutes
  );
  const [attendeelst, setAttendeelst] = useState(
    editReview == undefined ? [] : editReview.item.attendees
  );
  const [attendee, setAttendee] = useState("");

  const [intervals, setIntervals] = useState("None");

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
    attendees: [],
    intervals: "",
    agenda: [],
    minutes: [],
    submission: "",
    completed_on: "",
    completed: false,
    scheduleDate: "",
  };

  return (
    <View style={styles.riskAddition}>
      <Formik
        initialValues={editReview == undefined ? initVal : editReview.item}
        onSubmit={(values) => {
          values.submission = getSubmissionTime();
          values.intervals = intervals;
          values.minutes = minutes;
          values.agenda = agenda;
          values.scheduleDate = schedule;
          values.attendees = attendeelst;
          addSchedule(values);
          formClose();
          //   editRisk == undefined && setInventoryData(formTitle);
          //   editRisk != undefined && closeDetailView();
        }}
      >
        {(props) => (
          <View style={styles.form}>
            {renderList(attendeelst)}
            {attsSucc_msg && (
              <Text style={{ color: colorPallate.success_msg }}>
                Attendee was added successfuly
              </Text>
            )}
            <Text style={styles.label}>Attendees</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <TextInput
                style={[styles.inputs, { width: "85%" }]}
                placeholder="Add an attendee"
                onChangeText={(atd) => {
                  // props.handleChange("nonConformity");
                  setAttendee(atd);
                  console.log(attendee);
                }}
                value={attendee}
                numberOfLines={2}
                multiline={true}
              />
              <TouchableOpacity
                style={styles.addConf}
                onPress={() => {
                  setAttendeelst((items) => {
                    return [...items, attendee];
                  });
                  setAttendee("");
                  setAttSucc_msg(true);
                  setTimeout(() => setAttSucc_msg(false), 2000);
                }}
              >
                <Ionicons
                  name="ios-add-circle"
                  size={35}
                  color={colorPallate.theme}
                />
              </TouchableOpacity>
            </View>
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
                style={[styles.inputs, { width: "83%" }]}
              />
              <TouchableOpacity
                style={[
                  styles.riskaddbtn,
                  { width: "15%", backgroundColor: colorPallate.secondary },
                ]}
                onPress={showDatePicker}
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
            <View style={[styles.inputs, { alignSelf: "flex-start" }]}>
              <Picker
                selectedValue={intervals}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) =>
                  setIntervals(itemValue)
                }
              >
                <Picker.Item label="Not selected" value="None" />
                <Picker.Item label="Qaterly" value="Qaterly" />
                <Picker.Item label="Half yearly" value="Half yearly" />
                <Picker.Item label="Yearly" value="Yearly" />
              </Picker>
            </View>
            <Text style={styles.uploadtitle}>Upload agenda</Text>
            <OpenDocs setDoclst={setAgenda} doclst={agenda} />
            <Text style={styles.uploadtitle}>Upload minutes</Text>
            <OpenDocs setDoclst={setMinutes} doclst={minutes} />
            <TouchableOpacity
              style={styles.riskaddbtn}
              onPress={props.handleSubmit}
            >
              <Text style={{ fontSize: 20, color: colorPallate.primary }}>
                {editReview == undefined ? "Cofirm Schedule" : "Update"}
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
  uploadtitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 5,
  },
});

export default Scheduleform;
