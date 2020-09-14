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
import Slider from "react-native-slider";
import AssetPicker from "./AssetPicker";
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

function RiskAdd({ addRisk, formClose, editRisk, closeDetailView, formTitle }) {
  // console.log(closeDetailView);
  let [consq, setConseq] = useState(
    editRisk == undefined ? 1 : editRisk.item.consequence
  );
  let [lkhd, setLkhd] = useState(
    editRisk == undefined ? 1 : editRisk.item.likelyhood
  );
  let [added, setAdded] = useState(
    editRisk == undefined ? false : editRisk.item.addInventory
  );
  let levelColor = ["#62B6CB", "#BEE9E8", "#F5AD1C", "#FE4E00", "#FF1C53"];
  let setconsqLevelcolor = () => {
    return levelColor[consq - 1];
  };
  let setlkhdLevelcolor = () => {
    return levelColor[lkhd - 1];
  };
  let setConsqLevel = (value) => {
    setConseq(value);
  };
  let setlkhdLevel = (value) => {
    setLkhd(value);
  };

  let initVal = {
    key: (
      Math.random() +
      Math.random() -
      (Math.random() * Math.random()) / Math.random()
    ).toString(),
    risk: "",
    assets: "",
    addInventory: false,
    detail: "",
    mitigation: "",
    consequence: 1,
    likelyhood: 1,
    submission: "",
    owner: "",
    closed: "",
    mitigated: false,
    closed_by: "",
    accepted_by: "",
    acceptance_rational: "",
    decession_maker: "",
    accepted_on: "",
    asset_tag: "",
  };
  // console.log(editRisk != undefined && editRisk.item);
  return (
    <View style={styles.riskAddition}>
      <Formik
        initialValues={editRisk == undefined ? initVal : editRisk.item}
        onSubmit={(values) => {
          values.submission = getSubmissionTime();
          values.consequence = consq;
          values.likelyhood = lkhd;
          values.addInventory = added;
          addRisk(values);
          formClose();
          editRisk == undefined && setInventoryData(formTitle);
          editRisk != undefined && closeDetailView();
        }}
      >
        {(props) => (
          <View style={styles.form}>
            <View>
              <TextInput
                style={[styles.inputs, { width: "100%" }]}
                placeholder="Asset Title"
                onChangeText={props.handleChange("assets")}
                value={props.values.assets}
              />
              <TextInput
                style={[styles.inputs]}
                placeholder="Asset Tag"
                onChangeText={props.handleChange("asset_tag")}
                value={props.values.asset_tag}
              />

              <View style={styles.inventorybtn}>
                <Text>
                  {added
                    ? `Added to ${formTitle.toLowerCase()} inventory`
                    : "Add to inventory"}
                </Text>
                <CheckBox
                  value={added}
                  tintColors={{ true: "#1B4965", false: "#1B4965" }}
                  onValueChange={setAdded}
                />
              </View>
            </View>
            <TextInput
              style={styles.inputs}
              placeholder="Risk Title"
              onChangeText={props.handleChange("risk")}
              value={props.values.risk}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Description"
              onChangeText={props.handleChange("detail")}
              value={props.values.detail}
              numberOfLines={5}
              multiline={true}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Controls and Mitigation"
              onChangeText={props.handleChange("mitigation")}
              value={props.values.mitigation}
              numberOfLines={5}
              multiline={true}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Risk owner"
              onChangeText={props.handleChange("owner")}
              value={props.values.owner}
            />

            <View style={[styles.ratingcontainer]}>
              <View style={styles.risklevel}>
                <Text style={styles.slidercaption}>Consequence (1-5)</Text>
                <Text
                  style={[
                    styles.levelbox,
                    { borderColor: setconsqLevelcolor() },
                  ]}
                >
                  {consq}
                </Text>
              </View>
              <Slider
                track
                style={{ marginVertical: 10 }}
                value={consq}
                maximumValue={5}
                minimumValue={1}
                step={1}
                onValueChange={setConsqLevel}
                trackStyle={styles.slidertrack}
                thumbStyle={styles.sliderthumb}
                minimumTrackTintColor={setconsqLevelcolor()}
              />
            </View>
            <View style={[styles.ratingcontainer]}>
              <View style={styles.risklevel}>
                <Text style={styles.slidercaption}>Likelihood (1-5)</Text>
                <Text
                  style={[
                    styles.levelbox,
                    { borderColor: setlkhdLevelcolor() },
                  ]}
                >
                  {lkhd}
                </Text>
              </View>
              <Slider
                style={{ marginVertical: 10 }}
                value={lkhd}
                maximumValue={5}
                minimumValue={1}
                step={1}
                onValueChange={setlkhdLevel}
                trackStyle={styles.slidertrack}
                thumbStyle={styles.sliderthumb}
                minimumTrackTintColor={setlkhdLevelcolor()}
              />
            </View>
            <TouchableOpacity
              style={styles.riskaddbtn}
              onPress={props.handleSubmit}
            >
              <Text style={{ fontSize: 20 }}>
                {editRisk == undefined ? "Add Risk" : "Update"}
              </Text>
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

export default RiskAdd;
