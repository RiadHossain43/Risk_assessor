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
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { colorPallate } from "../GlobalStyleVars";
import Bar from "./customProgressbar";
import RiskAdd from "./RiskAdd";
import Acceptform from "./Acceptform";
import { color } from "react-native-reanimated";
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
  risk,
  updateRisk,
  addRisk,
  closeDetailView,
  formTitle,
  AcceptRiskList,
  updateAcceptRiskList,
}) {
  const [formOpen, setFormOpen] = useState(false);
  let [mitigated, setMitigated] = useState(risk.item.mitigated);
  let [checkOpen, setCheckopen] = useState(false);
  let [acceptOpen, setAcceptOpen] = useState(false);
  function handleClosebtn() {
    checkOpen ? setCheckopen(false) : setCheckopen(true);
  }
  function formClose() {
    setFormOpen(false);
    console.log("fired editform");
  }

  return (
    <View>
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

        <ScrollView style={styles.modal}>
          <RiskAdd
            addRisk={addRisk}
            formClose={formClose}
            editRisk={risk}
            closeDetailView={closeDetailView}
            formTitle={formTitle}
          />
        </ScrollView>
      </Modal>
      {!risk.item.accepted && (
        <Acceptform
          acceptOpen={acceptOpen}
          setAcceptOpen={setAcceptOpen}
          acceptRisk={risk}
          AcceptRiskList={AcceptRiskList}
        />
      )}
      <View style={mitigated || risk.item.accepted ? styles.risk : {}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="user" size={20} color={colorPallate.theme} />
            <Text style={[styles.owner]}>Owner: {risk.item.owner}</Text>
          </View>
          {!mitigated && !risk.item.accepted && (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{ marginHorizontal: 5 }}
                onPress={() => setFormOpen(true)}
              >
                <MaterialCommunityIcons
                  name="circle-edit-outline"
                  size={22}
                  color={colorPallate.lightGreen}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ marginHorizontal: 6 }}
                onPress={() => setAcceptOpen(true)}
              >
                <SimpleLineIcons
                  name="drawer"
                  size={20}
                  color={colorPallate.lightGreen}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {mitigated ? (
            <AntDesign
              name="Safety"
              size={20}
              color={colorPallate.lightGreen}
            />
          ) : (
            <AntDesign name="warning" size={20} color={colorPallate.red} />
          )}
          <Text style={[styles.risktitle, { marginLeft: 10 }]}>
            {risk.item.risk}
          </Text>
        </View>

        <View style={styles.separator}></View>

        <Text style={styles.risktitle}>Assets</Text>
        <Text style={styles.text}>{risk.item.assets}</Text>
        <Text style={styles.risktitle}>Tag</Text>
        <Text style={styles.text}>{risk.item.asset_tag}</Text>
        {risk.item.addInventory && (
          <Text style={[styles.text]}>
            ( Added to {formTitle.toLowerCase()} inventory )
          </Text>
        )}
        <Text style={styles.risktitle}>Description</Text>
        <Text style={styles.text}>{risk.item.detail}</Text>
        <Text style={styles.risktitle}>Controls and Mitigatins</Text>
        <Text style={styles.text}>{risk.item.mitigation}</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.levelContainer}>
            <Text style={styles.risktitle}>
              Consequences: {risk.item.consequence}
            </Text>
            <Bar level={risk.item.consequence} />
          </View>
          <View style={styles.levelContainer}>
            <Text style={styles.risktitle}>
              Likelihood: {risk.item.likelyhood}
            </Text>
            <Bar level={risk.item.likelyhood} />
          </View>
        </View>

        <View style={styles.separator}></View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 7,
          }}
        >
          <Fontisto name="clock" size={16} color={colorPallate.theme} />
          <Text style={[styles.time]}>Raised on : {risk.item.submission}</Text>
        </View>

        {mitigated && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 7,
            }}
          >
            <Fontisto name="clock" size={16} color={colorPallate.theme} />
            <Text style={[styles.time]}>Closed on : {risk.item.closed}</Text>
          </View>
        )}
        {risk.item.accepted && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 7,
            }}
          >
            <Fontisto name="clock" size={16} color={colorPallate.theme} />
            <Text style={[styles.time]}>
              Accepted on : {risk.item.accepted_on}
            </Text>
          </View>
        )}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 7,
          }}
        >
          <Ionicons name="md-open" size={16} color={colorPallate.theme} />
          <Text style={[styles.time]}>
            Raised By : Reyad (Will Be automated)
          </Text>
        </View>

        <View style={styles.tiked}>
          <AntDesign
            name="leftcircle"
            size={22}
            color={colorPallate.white}
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
                {mitigated ? "Mitigated" : "Close"}
              </Text>
              {!mitigated && (
                <CheckBox
                  value={false}
                  tintColors={{
                    true: colorPallate.secondary,
                    false: colorPallate.secondary,
                  }}
                  onChange={() => {
                    setTimeout(() => {
                      risk.item.mitigated = true;
                      risk.item.closed = getClosedTime();
                      !risk.item.accepted
                        ? updateRisk(risk.item)
                        : updateAcceptRiskList(risk.item);
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
    borderColor: "#62B6CB",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
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
