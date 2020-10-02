import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import { colorPallate } from "../GlobalStyleVars";
import Form from "./Form";
import HardwareForm from "./HardwareForm";
import SoftwareForm from "./SoftwareFrom";
import PeopleForm from "./PeopleForm";
import OrganizationFrom from "./OrganizationForm";
import PremisesForm from "./PremisesForm";
import { ScrollView } from "react-native-gesture-handler";
function ListItem({ asset }) {
  return (
    <View style={styles.listitem}>
      <MaterialIcons name="web-asset" size={20} color={colorPallate.theme} />
      <Text style={styles.assets}>{asset.item.title}</Text>
    </View>
  );
}

function InventoryAssets({ inventory }) {
  let [assets, setAssets] = useState([
    { title: "Only asset title here" },
    { title: "Only asset title here" },
  ]);
  let [formOpen, setFormOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Modal visible={formOpen} animationType="fade">
        <ScrollView>
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
              Add From
            </Text>
          </View>
          {inventory == "Hardware" && <HardwareForm />}
          {inventory == "Software" && <SoftwareForm />}
          {inventory == "People" && <PeopleForm />}
          {inventory == "Organization" && <OrganizationFrom />}
          {inventory == "Premises" && <PremisesForm />}
        </ScrollView>
      </Modal>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.title}>{inventory} Assets</Text>
        <TouchableOpacity
          onPress={() => {
            setFormOpen(true);
          }}
        >
          <AntDesign
            name="pluscircle"
            size={44}
            color={colorPallate.theme}
            style={{ marginLeft: 16 }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={assets}
        renderItem={(asset) => <ListItem asset={asset} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  assets: {
    marginLeft: 10,
    color: colorPallate.theme,
    fontSize: 17,
  },
  container: {
    paddingVertical: 10,
  },
  formtop: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colorPallate.theme,
    padding: 14,
  },
  listitem: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderRadius: 6,
    backgroundColor: colorPallate.white,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: colorPallate.primary,
    alignSelf: "flex-start",
    backgroundColor: colorPallate.theme,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    marginVertical: 10,
  },
});

export default InventoryAssets;
