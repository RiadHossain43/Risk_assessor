import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { colorPallate } from "../GlobalStyleVars";
import Header from "../Header";
import CreateForm from "./CreateForm";
function CreateImsBody(props) {
  const [formOpen, setFormOpen] = useState(false);
  const [created, setCreate] = useState(false);
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
    <View>
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
              Create iMS
            </Text>
          </View>

          <CreateForm handleCreate={handleCreate} setFormOpen={setFormOpen} />
        </Modal>
        <View style={styles.btn}>
          <Text style={styles.text}>Create your iMS</Text>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => setFormOpen(true)}
          >
            <Ionicons
              name="ios-add-circle"
              size={35}
              color={colorPallate.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {created && (
          <Text
            style={{
              textAlign: "center",
              color: colorPallate.theme,
              fontSize: 30,
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
  btn: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    padding: 10,
    backgroundColor: colorPallate.theme,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 13,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    alignItems: "center",
    alignSelf: "flex-start",
    marginVertical: 10,
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
  text: {
    textAlign: "left",
    fontSize: 20,
    color: colorPallate.primary,
    flexDirection: "row",
  },
});

export default CreateImsBody;
