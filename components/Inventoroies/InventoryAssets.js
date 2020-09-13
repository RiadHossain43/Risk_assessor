import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colorPallate } from "../GlobalStyleVars";

function ListItem({ asset }) {
  return (
    <View style={styles.listitem}>
      <MaterialIcons name="web-asset" size={20} color={colorPallate.theme} />
      <Text style={styles.assets}>{asset.item}</Text>
    </View>
  );
}

function InventoryAssets({ inventory }) {
  let [assets, setAssets] = useState([]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{inventory} Assets</Text>
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
