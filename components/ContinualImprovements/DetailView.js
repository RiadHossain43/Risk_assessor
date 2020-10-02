import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  CheckBox,
  ScrollView,
  TextInput,
} from "react-native";
import {
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { colorPallate } from "../GlobalStyleVars";

function getClosedTime() {
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
  let time = `${day} ${month} ${year}`; // ${hour}:${mimutes} ${ampm}
  return time;
}

function DetailView({ CI_item, updateCI_Lists }) {
  const [action, setAction] = useState("");
  let [implemented, setImplemented] = useState(CI_item.item.implemented);
  let [checkOpen, setCheckopen] = useState(false);
  let [actionlst, setActionlst] = useState(CI_item.item.actions);
  let [succ_msg, setSucc_msg] = useState(false);
  function handleClosebtn() {
    checkOpen ? setCheckopen(false) : setCheckopen(true);
  }

  function renderList(list) {
    return list.map((item, index) => (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 6,
        }}
      >
        <Text style={styles.text}>
          {index + 1} {item}
        </Text>
      </View>
    ));
  }
  return (
    <View>
      <View>
        <Text style={styles.risktitle}> {CI_item.item.business_functon}</Text>
        <View style={styles.separator}></View>
        <Text style={styles.text}>{CI_item.item.imprvOpportun}</Text>
        <Text style={styles.risktitle}>Actions</Text>
        {renderList(CI_item.item.actions)}
        {succ_msg && <Text>Action added successfully</Text>}
        {!implemented && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <TextInput
              style={[styles.inputs, { width: "85%" }]}
              placeholder="Add Actions"
              onChangeText={(action) => {
                setAction(action);
              }}
              value={action}
              numberOfLines={3}
              multiline={true}
            />
            <TouchableOpacity
              style={styles.addConf}
              onPress={() => {
                setActionlst((items) => {
                  return [...items, action];
                });
                setAction("");
                setSucc_msg(true);
                setTimeout(() => setSucc_msg(false), 2000);
                CI_item.item.actions = actionlst;
                updateCI_Lists(CI_item.item);
              }}
            >
              <Ionicons
                name="ios-add-circle"
                size={35}
                color={colorPallate.theme}
              />
            </TouchableOpacity>
          </View>
        )}

        {implemented && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 7,
            }}
          >
            <Fontisto name="clock" size={16} color={colorPallate.theme} />
            <Text style={[styles.time]}>
              Implemented date: {CI_item.item.implemented_on}
            </Text>
          </View>
        )}
        <View style={styles.separator}></View>
        <View style={styles.tiked}>
          <Entypo
            name="chevron-left"
            size={22}
            color={colorPallate.primary}
            onPress={handleClosebtn}
          />
          {checkOpen && (
            <>
              <Text
                style={[
                  styles.text,
                  { marginHorizontal: 8, color: colorPallate.secondary },
                ]}
              >
                {implemented ? "Implemented" : "Implement"}
              </Text>
              {!implemented && (
                <CheckBox
                  value={false}
                  tintColors={{
                    true: colorPallate.secondary,
                    false: colorPallate.secondary,
                  }}
                  onChange={() => {
                    setTimeout(() => {
                      setImplemented(true);
                      CI_item.item.implemented = true;
                      CI_item.item.implemented_on = getClosedTime();
                      updateCI_Lists(CI_item.item);
                    }, 1500);
                  }}
                />
              )}
            </>
          )}
        </View>
      </View>
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
  backbtn: {
    margin: 15,
    alignSelf: "center",
  },
  editButton: {
    height: 26,
    width: 26,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colorPallate.lightGreen,
    justifyContent: "center",
    alignItems: "center",
  },
  formtop: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colorPallate.theme,
  },
  head: {
    padding: 5,
    backgroundColor: "#0b0c10",
    borderRadius: 4,
    alignItems: "center",
  },
  inputs: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: colorPallate.white,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderColor: colorPallate.secondary,
    borderWidth: 1,
    textAlignVertical: "top",
    fontSize: 18,
    color: colorPallate.black,
  },
  levelContainer: {
    width: "48%",
  },
  mitigatedrisk: {
    backgroundColor: "#27323f",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    opacity: 0.45,
    borderColor: "#e0e0e0",
    borderWidth: 1,
  },
  owner: {
    fontSize: 16,
    marginHorizontal: 7,
  },
  risktitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#153243",
  },
  risk: {
    position: "relative",
    backgroundColor: "white",
    padding: 15,

    margin: 10,
    shadowColor: "#CAE9FF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 6,
  },
  separator: {
    backgroundColor: colorPallate.dashBoardseparator,
    height: 2,
    borderRadius: 2,
    marginVertical: 4,
  },
  tiked: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: colorPallate.theme,
    alignSelf: "flex-start",
    paddingVertical: 5,
    marginVertical: 10,
  },
  time: { marginLeft: 10, fontSize: 16 },
  text: {
    color: "#153243",
    marginVertical: 5,
    fontSize: 16,
  },
  text2: {
    color: "#45a29e",
    marginVertical: 5,
    fontSize: 16,
  },
});

export default DetailView;
