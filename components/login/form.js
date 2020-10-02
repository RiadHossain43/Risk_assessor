import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import { Formik } from "formik";

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

function Scheduleform({ setLogedin, navigation }) {
  let initVal = {
    userid: "",
    password: "",
  };

  return (
    <View style={styles.loginContainer}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
          MS Systems
        </Text>
      </View>
      <Formik
        initialValues={initVal}
        onSubmit={(values) => {
          setTimeout(() => {
            setLogedin(true);
          }, 900);
        }}
      >
        {(props) => (
          <View style={styles.form}>
            <Text style={styles.label}>
              Use ID (Provided by your organization)
            </Text>
            <TextInput
              style={[styles.inputs]}
              placeholder="User ID"
              onChangeText={props.handleChange("userid")}
              value={props.values.userid}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={[styles.inputs]}
              placeholder="Password"
              onChangeText={props.handleChange("password")}
              value={props.values.password}
            />

            <TouchableOpacity
              style={styles.addbtn}
              onPress={() => {
                props.handleSubmit();
                navigation.navigate("Welcome");
              }}
            >
              <Text style={{ fontSize: 20, color: colorPallate.theme }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: colorPallate.primary,
            textAlign: "center",
          }}
        >
          Creat an admin account
        </Text>
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.poweredby}>Powered by NRHC</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  addbtn: {
    marginVertical: 0,
    backgroundColor: colorPallate.secondary,
    borderRadius: 6,
    alignItems: "center",
    padding: 8,
    marginVertical: 8,
  },
  logo: {
    width: 83,
    height: 65,
    resizeMode: "cover",
    marginHorizontal: 10,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: colorPallate.theme,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  label: {
    fontSize: 13,
    color: colorPallate.primary,

    marginVertical: 8,
  },
  poweredby: {
    fontSize: 10,
    color: colorPallate.primary,
    flexDirection: "row",
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    color: colorPallate.primary,
    flexDirection: "row",
    marginTop: 100,
  },
});

export default Scheduleform;
