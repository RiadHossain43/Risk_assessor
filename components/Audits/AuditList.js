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
import CompIncompBtn from "./compIncombtn";
import {
  Fontisto,
  Foundation,
  AntDesign,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import DetailView from "./DetailView";
import { colorPallate } from "../GlobalStyleVars";
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
              <Text style={{ fontSize: 16, color: colorPallate.white }}>
                Back
              </Text>
              <AntDesign
                name="downcircleo"
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
            <TouchableOpacity
              onPress={() => setDetailOpen(true)}
              style={{ marginLeft: "auto" }}
            >
              <FontAwesome5
                name="expand"
                size={18}
                color={colorPallate.theme}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.row]}></View>
          <View
            style={[styles.row, { marginVertical: 7, alignItems: "center" }]}
          >
            <Fontisto name="clock" size={20} color={colorPallate.theme} />
            <Text style={{ marginHorizontal: 10 }}>
              Date: {audit.item.scheduleDate}
            </Text>
            <TouchableOpacity style={styles.downloads}>
              <Ionicons
                name="md-download"
                size={20}
                color={colorPallate.primary}
                style={{ marginRight: 10 }}
              />
              <Text style={styles.downloadText}>Reports</Text>
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
            <Text style={{ fontSize: 16, color: colorPallate.primary }}>
              Back{" "}
            </Text>
            <AntDesign
              name="downcircleo"
              size={24}
              color={colorPallate.primaryFocus}
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
            <TouchableOpacity
              onPress={() => setDetailOpen(true)}
              style={{ marginLeft: "auto" }}
            >
              <FontAwesome5
                name="expand"
                size={18}
                color={colorPallate.theme}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.row]}></View>
          <View
            style={[styles.row, { marginVertical: 7, alignItems: "center" }]}
          >
            <Fontisto name="clock" size={20} color={colorPallate.theme} />
            <Text style={{ marginHorizontal: 10 }}>
              Closed: {audit.item.closed}
            </Text>
            <TouchableOpacity style={styles.downloads}>
              <Ionicons
                name="md-download"
                size={20}
                color={colorPallate.primary}
                style={{ marginRight: 10 }}
              />
              <Text style={styles.downloadText}>Reports</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

function AuditList() {
  const [audits, setAudits] = useState([
    {
      key: (Math.random() - Math.random()).toString(),
      businessFunction: "Suitable business function here",
      nonConformity: ["Item1", "item2"],
      conformance: ["Itewm1", "item2"],
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
      businessFunction: "Completed Business function here",
      nonConformity: ["Item1", "item2"],
      conformance: ["Itewm1", "item2"],
      submission: "3 August 2020",
      risk: "This is for risk",
      imprvOpportun: "For improvement",
      closed: "21 October 2020",
      completed: true,
      scheduleDate: "1 October 2020",
    },
  ]);

  let [activeAudit, setActiveAudit] = useState(true);

  const handleAuditsTabs = {
    activateAuditTab: () => {
      setActiveAudit(true);
    },
    activateCompletedTab: () => {
      setActiveAudit(false);
    },
  };
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

  return (
    <View style={styles.container}>
      <CompIncompBtn handleAuditsTabs={handleAuditsTabs} />
      <Schedulebtn addSchedule={addSchedule} />
      {activeAudit ? (
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
      ) : (
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
      )}
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
    paddingVertical: 10,
  },
  downloads: {
    paddingVertical: 5,
    paddingHorizontal: 14,
    backgroundColor: colorPallate.primaryFocus,
    borderWidth: 1,
    marginLeft: "auto",
    flexDirection: "row",
    borderRadius: 20,
    alignItems: "center",
  },
  detailContainer: {
    padding: 10,
  },
  downloadText: {
    color: colorPallate.primary,
  },

  row: {
    flexDirection: "row",
  },
  list: {
    paddingTop: 6,
  },
  listback: {
    flexDirection: "row",
    backgroundColor: colorPallate.primaryFocus,
    alignItems: "center",
    padding: 10,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    alignSelf: "flex-start",
    marginVertical: 10,
  },

  Litem: {
    backgroundColor: colorPallate.secondary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 12,
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
});
export default AuditList;
