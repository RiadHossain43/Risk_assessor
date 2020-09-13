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

function Form({ acceptRisk, AcceptRiskList }) {
  console.log(AcceptRiskList);
  return (
    <View style={{ backgroundColor: "white" }}>
      <Formik
        initialValues={acceptRisk.item}
        onSubmit={(values) => {
          values.accepted = true;
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
              <Text style={{ fontSize: 20 }}>Accept</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

function Acceptform({ acceptOpen, setAcceptOpen, acceptRisk, AcceptRiskList }) {
  return (
    <Modal transparent={true} visible={acceptOpen} animationType={"slide"}>
      <View
        style={{
          marginTop: "auto",
          paddingBottom: 20,
          backgroundColor: "#eeeeee",
        }}
      >
        <View style={styles.formtop}>
          <TouchableOpacity onPress={() => setAcceptOpen(false)}>
            <Entypo
              name="arrow-with-circle-left"
              size={24}
              color="black"
              style={styles.backbtn}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>Accept Risk</Text>
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
    backgroundColor: "#eeeeee",
  },
  form: {
    backgroundColor: "#eeeeee",
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
    backgroundColor: "#eeeeee",
    paddingHorizontal: 10,
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
    backgroundColor: "#CAE9FF",
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