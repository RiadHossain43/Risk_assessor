import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
  ColorPropType,
} from "react-native";

import Schedulebtn from "./Scheduletbn";
import {
  Fontisto,
  Foundation,
  Feather,
  AntDesign,
  Ionicons,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import DetailView from "./DetailView";
import { colorPallate } from "../GlobalStyleVars";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function ListItem({ audit, updateAuditLists, formTitle, addSchedule }) {
  let [detailOpen, setDetailOpen] = useState(false);

  function closeDetailView() {
    setDetailOpen(false);
  }

  return (
    <View style={styles.Litem}>
      {detailOpen && (
        <ScrollView style={[{}]}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.listback}
              onPress={() => {
                setDetailOpen(false);
                console.log("detail view");
              }}
            >
              <Feather
                name="minimize"
                size={24}
                color={colorPallate.primary}
                style={{ marginHorizontal: 9 }}
              />
            </TouchableOpacity>
          </View>
          <DetailView
            audit={audit}
            updateAuditLists={updateAuditLists}
            addSchedule={addSchedule}
          />
        </ScrollView>
      )}

      {!detailOpen && (
        <>
          <View style={[styles.row, { alignItems: "center" }]}>
            <Foundation
              name="clipboard-pencil"
              size={20}
              color={colorPallate.theme}
              style={{ marginRight: 10 }}
            />
            <Text style={styles.auditTitle}>{audit.item.businessFunction}</Text>
            <MaterialCommunityIcons
              name="progress-wrench"
              style={{ marginLeft: "auto" }}
              size={20}
              color={colorPallate.theme}
            />
          </View>
          <View style={[styles.row]}></View>
          <View
            style={[styles.row, { marginVertical: 7, alignItems: "center" }]}
          >
            <FontAwesome name="calendar" size={18} color={colorPallate.theme} />
            <Text style={{ marginHorizontal: 10 }}>
              Date: {audit.item.scheduleDate}
            </Text>
            <TouchableOpacity
              style={styles.details}
              onPress={() => setDetailOpen(true)}
            >
              <Text style={styles.detailText}>Details</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

function ListItemCompleted({ audit, updateAuditLists, formTitle, addRisk }) {
  let [detailOpen, setDetailOpen] = useState(false);

  function closeDetailView() {
    setDetailOpen(false);
  }

  return (
    <View style={styles.Litem}>
      <Modal visible={detailOpen} animationType={"fade"}>
        <ScrollView style={[{}]}>
          <TouchableOpacity
            style={styles.listback}
            onPress={() => {
              setDetailOpen(false);
              console.log("detail view");
            }}
          >
            <AntDesign
              name="back"
              size={24}
              color={colorPallate.white}
              style={{ marginHorizontal: 9 }}
            />
          </TouchableOpacity>
          <DetailView audit={audit} updateAuditLists={updateAuditLists} />
        </ScrollView>
      </Modal>

      {!detailOpen && (
        <>
          <View style={[styles.row, { alignItems: "center" }]}>
            <Foundation
              name="clipboard-pencil"
              size={20}
              color={colorPallate.theme}
              style={{ marginRight: 10 }}
            />
            <Text style={styles.auditTitle}>{audit.item.businessFunction}</Text>

            <Ionicons
              name="md-checkbox-outline"
              size={20}
              color={colorPallate.lightGreen}
              style={{ marginLeft: "auto" }}
            />
          </View>
          <View style={[styles.row]}></View>
          <View
            style={[styles.row, { marginVertical: 7, alignItems: "center" }]}
          >
            <FontAwesome name="calendar" size={18} color={colorPallate.theme} />
            <Text style={{ marginHorizontal: 10 }}>
              Closed: {audit.item.closed}
            </Text>
            <TouchableOpacity
              style={styles.details}
              onPress={() => setDetailOpen(true)}
            >
              <Text style={styles.detailText}>Details</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

function Audits({ audits, updateAuditLists, formTitle, addSchedule }) {
  return (
    <View style={styles.list}>
      <Schedulebtn addSchedule={addSchedule} />
      <FlatList
        style={styles.list}
        data={audits}
        renderItem={(audit) => (
          <ListItem
            audit={audit}
            updateAuditLists={updateAuditLists}
            // formTitle={formTitle}
            addSchedule={addSchedule}
          />
        )}
      />
    </View>
  );
}
function Completed({ completedAudits, updateAuditLists }) {
  return (
    <View style={styles.list}>
      <FlatList
        style={styles.list}
        data={completedAudits}
        renderItem={(audit) => (
          <ListItemCompleted
            audit={audit}
            updateAuditLists={updateAuditLists}
            // formTitle={formTitle}
            // addRisk={addRisk}
          />
        )}
      />
    </View>
  );
}

function AuditList() {
  const [audits, setAudits] = useState([
    {
      key: (Math.random() - Math.random()).toString(),
      auditors_name: "Nuraz nuraz",
      businessFunction: "Suitable business function here",
      nonConformity: ["Item1", "item2"],
      conformance: ["Itewm1", "item2"],
      docs: ["document_one", "documnet_two"],
      submission: "3 August 2020",
      risk: "This is for risk",
      imprvOpportun: "For improvement",
      closed: "",
      completed: false,
      scheduleDate: "10 October 2020",
    },
  ]);

  const [completedAudits, setCompletedAudits] = useState([
    {
      key: (Math.random() - Math.random()).toString(),
      auditors_name: "Nuraz nuraz",
      businessFunction: "Completed Business function here",
      nonConformity: ["Item1", "item2"],
      conformance: ["Itewm1", "item2"],
      docs: ["document_one", "documnet_two"],
      submission: "3 August 2020",
      risk: "This is for risk",
      imprvOpportun: "For improvement",
      closed: "21 October 2020",
      completed: true,
      scheduleDate: "1 October 2020",
    },
  ]);

  const addSchedule = (risk) => {
    setAudits((currentAudits) => {
      let found = currentAudits.find((item) => item.key == risk.key);
      console.log("Found :", found);
      if (found == undefined) return [...currentAudits, risk];
      else
        return currentAudits.map((item) =>
          item.key == risk.key ? risk : item
        );
    });
    console.log(audits);
  };
  const updateAuditLists = (audit) => {
    setAudits((currentAudits) => {
      return currentAudits
        .map((audititem) => (audititem.key == audit.key ? audit : audititem))
        .filter((audititem) => audititem.completed == false);
    });
    setCompletedAudits((currentAudits) => {
      return [...currentAudits, audit];
    });
    console.log(completedAudits);
  };
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name="Audits"
          children={() => (
            <Audits
              audits={audits}
              updateAuditLists={updateAuditLists}
              // formTitle={formTitle}
              addSchedule={addSchedule}
            />
          )}
        />
        <Tab.Screen
          name="Completed"
          children={() => (
            <Completed
              completedAudits={completedAudits}
              // formTitle={formTitle}
              updateAuditLists={updateAuditLists}
            />
          )}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  auditTitle: {
    marginVertical: 7,
    fontSize: 16,
    fontWeight: "bold",
    color: colorPallate.theme,
  },
  container: {
    flex: 1,
    // paddingVertical: 10,
  },
  details: {
    paddingVertical: 5,
    paddingHorizontal: 14,
    backgroundColor: colorPallate.theme,
    marginLeft: "auto",
    flexDirection: "row",
    borderRadius: 20,
    alignItems: "center",
  },
  detailContainer: {
    padding: 10,
  },
  detailText: {
    color: colorPallate.white,
  },

  row: {
    flexDirection: "row",
  },
  list: {
    paddingTop: 5,
    backgroundColor: colorPallate.primary,
    flex: 1,
  },
  listback: {
    flexDirection: "row",
    backgroundColor: colorPallate.theme,
    alignItems: "center",
    padding: 10,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    alignSelf: "flex-start",
    marginVertical: 10,
  },

  Litem: {
    backgroundColor: colorPallate.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    shadowColor: "#CAE9FF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 6,
    marginBottom: 17,
  },
});
export default AuditList;
