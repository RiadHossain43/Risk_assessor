import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import {
  Ionicons,
  Entypo,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { colorPallate } from "../GlobalStyleVars";
import Header from "../Header";
import CreateForm from "./CreateForm";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
function CreateScreen({ setFormOpen, setFormtitle }) {
  return (
    <View style={{ paddingVertical: 20 }}>
      <TouchableOpacity
        style={styles.addBtns}
        onPress={() => {
          setFormOpen(true);
          setFormtitle("Add Business Function");
        }}
      >
        <Ionicons
          name="ios-git-network"
          size={40}
          color={colorPallate.lightGreen}
          style={{ marginVertical: 20 }}
        />
        <Text style={styles.addBtnText}>Add Business Function</Text>
      </TouchableOpacity>
      <View style={styles.separator}></View>
      <TouchableOpacity
        style={styles.addBtns}
        onPress={() => {
          setFormOpen(true);
          setFormtitle("Add Premises");
        }}
      >
        <FontAwesome5
          name="building"
          size={40}
          color={colorPallate.lightGreen}
          style={{ marginVertical: 20 }}
        />
        <Text style={styles.addBtnText}>Add Premises</Text>
      </TouchableOpacity>
      <View style={styles.separator}></View>
      <TouchableOpacity
        style={styles.addBtns}
        onPress={() => {
          setFormOpen(true);
          setFormtitle("iMS System Dates");
        }}
      >
        <FontAwesome
          name="calendar-plus-o"
          size={40}
          color={colorPallate.lightGreen}
          style={{ marginVertical: 20 }}
        />
        <Text style={styles.addBtnText}>iMS Systems Dates</Text>
      </TouchableOpacity>
    </View>
  );
}

function MyiMSScreen() {
  return (
    <>
      <Text>
        This myims screen will contain information created by create screen
      </Text>
    </>
  );
}

function CreateImsBody(props) {
  const [formOpen, setFormOpen] = useState(false);
  const [created, setCreate] = useState(false);
  let [formTitle, setFormtitle] = useState("");
  function handleCreate() {
    setCreate(true);
    setTimeout(() => {
      setCreate(false);
    }, 2000);
  }
  function formClose() {
    setFormOpen(false);
    console.log("fired add form");
  }
  return (
    <View style={{ flex: 1, backgroundColor: colorPallate.primary }}>
      <View style={styles.container}>
        <Modal visible={formOpen} animationType={"fade"}>
          <View style={styles.formtop}>
            <TouchableOpacity onPress={() => setFormOpen(false)}>
              <Entypo
                name="chevron-left"
                size={24}
                color={colorPallate.white}
                style={styles.backbtn}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 20, color: colorPallate.white }}>
              {formTitle}
            </Text>
          </View>
          <CreateForm
            handleCreate={handleCreate}
            setFormOpen={setFormOpen}
            formTitle={formTitle}
          />
        </Modal>
      </View>

      <Tab.Navigator>
        <Tab.Screen
          name="Create"
          children={() => (
            <CreateScreen
              setFormOpen={setFormOpen}
              setFormtitle={setFormtitle}
            />
          )}
        />
        <Tab.Screen name="My iMS" children={() => <MyiMSScreen />} />
      </Tab.Navigator>
      <View>
        {created && (
          <Text
            style={{
              textAlign: "center",
              color: colorPallate.theme,
              fontSize: 30,
              marginBottom: 20,
            }}
          >
            Created Successfully
          </Text>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  addBtns: {
    backgroundColor: colorPallate.white,
    borderColor: colorPallate.dashBoardseparator,
    // borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: "center",
    marginHorizontal: 10,
    shadowColor: "#CAE9FF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 6,
  },
  addBtnText: {
    color: colorPallate.theme,
    fontSize: 16,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  container: {
    backgroundColor: colorPallate.theme,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  formtop: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colorPallate.theme,
    paddingVertical: 15,
    paddingHorizontal: 8,
  },
  logo: {
    width: 50,
    height: 25,
  },
  separator: {
    backgroundColor: colorPallate.gray,
    height: 2,
    borderRadius: 2,
    marginVertical: 30,
    marginHorizontal: 10,
  },
  text: {
    textAlign: "left",
    fontSize: 20,
    color: colorPallate.primary,
    flexDirection: "row",
  },
});

export default CreateImsBody;
