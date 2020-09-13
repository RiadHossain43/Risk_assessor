import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  CheckBox,
  ScrollView,
  Modal,
} from "react-native";
import {
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import Scheduleform from "./Scheduleform";
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

function DetailView({
  audit,
  updateAuditLists,
  addSchedule,
  closeDetailView,
  formTitle,
}) {
  const [formOpen, setFormOpen] = useState(false);
  let [completed, setCompleted] = useState(audit.item.completed);
  let [checkOpen, setCheckopen] = useState(false);

  function handleClosebtn() {
    checkOpen ? setCheckopen(false) : setCheckopen(true);
  }
  function formClose() {
    setFormOpen(false);
    console.log("fired editform");
  }
  function renderList(list, downloadable = false) {
    return list.map((item, index) => (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.text}>
          {index + 1} {item}
        </Text>
        {downloadable && (
          <Ionicons
            name="md-download"
            size={20}
            color={colorPallate.theme}
            style={{ marginLeft: "auto" }}
          />
        )}
      </View>
    ));
  }
  return (
    <View>
      <Modal visible={formOpen} animationType={"fade"}>
        <View style={styles.formtop}>
          <TouchableOpacity onPress={() => setFormOpen(false)}>
            <Entypo
              name="arrow-with-circle-left"
              size={24}
              color="black"
              style={styles.backbtn}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>{formTitle}</Text>
        </View>
        <ScrollView style={styles.modal}>
          <Scheduleform
            addSchedule={addSchedule}
            formClose={formClose}
            editAudit={audit}
          />
        </ScrollView>
      </Modal>
      <View style={completed ? styles.risk : {}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {!completed && (
            <TouchableOpacity
              style={[styles.editButton, { marginLeft: "auto" }]}
              onPress={() => setFormOpen(true)}
            >
              <MaterialCommunityIcons
                name="circle-edit-outline"
                size={20}
                color={colorPallate.theme}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {completed ? (
            <Foundation
              name="clipboard-pencil"
              size={20}
              color={colorPallate.theme}
            />
          ) : (
            <Foundation
              name="clipboard-pencil"
              size={20}
              color={colorPallate.theme}
            />
          )}
          <Text style={[styles.risktitle, { marginLeft: 10 }]}>
            {audit.item.businessFunction}
          </Text>
        </View>
        <Text style={styles.risktitle}>Non Conformities</Text>
        {renderList(audit.item.nonConformity)}

        <Text style={styles.risktitle}>Conformance</Text>
        {renderList(audit.item.conformance)}

        <Text style={styles.risktitle}>Risks</Text>
        <Text style={styles.text}>{audit.item.risk}</Text>
        <Text style={styles.risktitle}>Opportunity for Improvement</Text>
        <Text style={styles.text}>{audit.item.imprvOpportun}</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 7,
          }}
        >
          <Fontisto name="clock" size={16} color={colorPallate.theme} />
          <Text style={[styles.time]}>Date : {audit.item.scheduleDate}</Text>
        </View>

        {completed && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 7,
            }}
          >
            <Fontisto name="clock" size={16} color={colorPallate.theme} />
            <Text style={[styles.time]}>
              Completed date: {audit.item.closed}
            </Text>
          </View>
        )}
        <Text style={styles.risktitle}>Domuments</Text>
        {renderList(audit.item.docs, true)}
        <View style={styles.tiked}>
          <AntDesign
            name="leftcircle"
            size={22}
            color="black"
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
                {completed ? "Completed" : "Complete"}
              </Text>
              {!completed && (
                <CheckBox
                  value={false}
                  tintColors={{
                    true: colorPallate.secondary,
                    false: colorPallate.secondary,
                  }}
                  onChange={() => {
                    setTimeout(() => {
                      audit.item.completed = true;
                      audit.item.closed = getClosedTime();
                      updateAuditLists(audit.item);
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
  backbtn: {
    margin: 15,
    alignSelf: "center",
  },
  editButton: {
    height: 26,
    width: 26,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colorPallate.theme,
    justifyContent: "center",
    alignItems: "center",
  },
  formtop: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2FFFE",
  },
  head: {
    padding: 5,
    backgroundColor: "#0b0c10",
    borderRadius: 4,
    alignItems: "center",
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
    marginVertical: 5,
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
