import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";

import Schedulebtn from "./Scheduletbn";
import {
  Fontisto,
  Foundation,
  AntDesign,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
// import DetailView from "./DetailView";

function ListItem({ audit, updateRisk, formTitle, addRisk }) {
  let [detailOpen, setDetailOpen] = useState(false);

  function closeDetailView() {
    setDetailOpen(false);
  }

  return (
    <View style={styles.Litem}>
      {/* {detailOpen && (
        <ScrollView style={[{}]}>
          <TouchableOpacity
            style={styles.listback}
            onPress={() => {
              setDetailOpen(false);
              console.log("detail view");
            }}
          >
            <Text style={{ fontSize: 16, color: "white" }}>Back </Text>
            <AntDesign
              name="downcircleo"
              size={24}
              color="black"
              style={{ marginHorizontal: 9 }}
            />
          </TouchableOpacity>
          <DetailView
            risk={risk}
            updateRisk={updateRisk}
            addRisk={addRisk}
            closeDetailView={closeDetailView}
          />
        </ScrollView>
      )} */}

      {!detailOpen && (
        <>
          <View style={[styles.row, { alignItems: "center" }]}>
            <Foundation
              name="clipboard-pencil"
              size={20}
              color="#62B6CB"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.auditTitle}>{audit.item.businessFunction}</Text>
            <TouchableOpacity style={{ marginLeft: "auto" }}>
              <Octicons name="info" size={20} color="#62B6CB" />
            </TouchableOpacity>
          </View>
          <View style={[styles.row]}></View>
          <View
            style={[styles.row, { marginVertical: 7, alignItems: "center" }]}
          >
            <Fontisto name="clock" size={20} color="#62B6CB" />
            <Text style={{ marginHorizontal: 10 }}>
              Date: {audit.item.submission}
            </Text>
            <TouchableOpacity
              style={styles.downloads}
              // onPress={() => setDetailOpen(true)}
            >
              <Ionicons
                name="md-download"
                size={20}
                color="#5FA8D3"
                style={{ marginRight: 10 }}
              />
              <Text style={styles.downloadText}>Download Reports</Text>
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
      detail: `This is the demo for the risk detail. Customers will write short descriptions on the risk form. This will show here.`,
      mitigation: `Controls and  mitigations for the will be displayed here. This is also dinamically added for the risk form.`,
      consequence: 4,
      likelyhood: 3,
      submission: "3 August 2020",
      closed: "",
      mitigated: false,
      owner: "Name that was added",
    },
    {
      key: (Math.random() - Math.random()).toString(),
      businessFunction: "Suitable business function here",
      detail: `This is the demo for the risk detail. Customers will write short descriptions on the risk form. This will show here.`,
      mitigation: `Controls and  mitigations for the will be displayed here. This is also dinamically added for the risk form.`,
      consequence: 4,
      likelyhood: 3,
      submission: "3 August 2020",
      closed: "",
      mitigated: false,
      owner: "Name that was added",
    },
    {
      key: (Math.random() - Math.random()).toString(),
      businessFunction: "Suitable business function here",
      detail: `This is the demo for the risk detail. Customers will write short descriptions on the risk form. This will show here.`,
      mitigation: `Controls and  mitigations for the will be displayed here. This is also dinamically added for the risk form.`,
      consequence: 4,
      likelyhood: 3,
      submission: "3 August 2020",
      closed: "",
      mitigated: false,
      owner: "Name that was added",
    },
  ]);

  let [activeRisk, setActiveRisk] = useState(true);

  // const handleRiskTabs = {
  //   activateRisks: () => {
  //     setActiveRisk(true);
  //   },
  //   activateClosedRisks: () => {
  //     setActiveRisk(false);
  //   },
  // };
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
  };
  // const updateRisk = (risk) => {
  //   setRisks((currentAudits) => {
  //     return currentAudits
  //       .map((riskitem) => (riskitem.key == risk.key ? risk : riskitem))
  //       .filter((riskitem) => riskitem.mitigated == false);
  //   });
  //   setClosedRisks((currentAudits) => {
  //     return [...currentAudits, risk];
  //   });
  //   console.log(closedRisks);
  // };

  return (
    <View style={styles.container}>
      <Schedulebtn addSchedule={addSchedule} />
      <FlatList
        style={styles.list}
        data={audits}
        renderItem={(audit) => (
          <ListItem
            audit={audit}
            // updateRisk={updateRisk}
            // formTitle={formTitle}
            // addRisk={addRisk}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  auditTitle: {
    marginVertical: 7,
    fontSize: 16,
    fontWeight: "bold",
    color: "#62B6CB",
  },
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  downloads: {
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderColor: "#5FA8D3",
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
    color: "#5FA8D3",
  },

  row: {
    flexDirection: "row",
  },
  list: {
    paddingTop: 6,
  },
  listback: {
    flexDirection: "row",
    backgroundColor: "#5FA8D3",
    alignItems: "center",
    padding: 10,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    alignSelf: "flex-start",
    marginVertical: 10,
  },

  Litem: {
    backgroundColor: "white",
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
