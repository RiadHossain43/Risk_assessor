import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import Scheduleform from "./Scheduleform";

function ScheduleBtn({ addSchedule }) {
  const [formOpen, setFormOpen] = useState(false);

  function formClose() {
    setFormOpen(false);
    console.log("fired add form");
  }

  return (
    <View style={styles.container}>
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
          <Text style={{ fontSize: 20 }}>Make a schedule</Text>
        </View>

        <ScrollView style={styles.modal}>
          <Scheduleform />
        </ScrollView>
      </Modal>

      <View style={styles.btn}>
        <Text style={styles.text}>Make a Schedule</Text>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => setFormOpen(true)}
        >
          <Ionicons name="ios-add-circle" size={35} color="#1B4965" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backbtn: {
    margin: 15,
    alignSelf: "center",
  },
  container: {
    padding: 10,
    backgroundColor: "#5FA8D3",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 13,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: "center",
    alignSelf: "flex-start",
  },

  formtop: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2FFFE",
  },
  modal: {
    backgroundColor: "#F2FFFE",
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

export default ScheduleBtn;