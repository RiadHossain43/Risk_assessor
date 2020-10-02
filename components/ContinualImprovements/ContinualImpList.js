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

import { Fontisto, Entypo, FontAwesome5, Octicons } from "@expo/vector-icons";
import DetailView from "./DetailView";
import { colorPallate } from "../GlobalStyleVars";
import { TouchableItem } from "react-native-tab-view";

function ListItem({ ci_item, updateCI_Lists, formTitle, addSchedule }) {
  let [detailOpen, setDetailOpen] = useState(false);

  return (
    <TouchableItem
      style={!ci_item.item.implemented ? styles.Litem : styles.LitemFade}
      onPress={() => setDetailOpen(true)}
    >
      <>
        {detailOpen && (
          <ScrollView style={[{}]}>
            <TouchableOpacity
              onPress={() => {
                setDetailOpen(false);
              }}
            >
              <Entypo name="cross" size={24} color={colorPallate.red} />
            </TouchableOpacity>
            <DetailView CI_item={ci_item} updateCI_Lists={updateCI_Lists} />
          </ScrollView>
        )}

        {!detailOpen && (
          <>
            <View style={[styles.row, { alignItems: "center" }]}>
              <Fontisto
                name="preview"
                size={20}
                color={
                  !ci_item.item.implemented
                    ? colorPallate.theme
                    : colorPallate.gray
                }
                style={{ marginRight: 10 }}
              />
              <Text
                style={
                  !ci_item.item.implemented
                    ? [styles.reviewTitle]
                    : [styles.reviewTitlefade]
                }
              >
                {ci_item.item.business_functon}
              </Text>
              {!ci_item.item.implemented ? (
                <Octicons
                  name="primitive-dot"
                  style={{ marginLeft: "auto" }}
                  size={20}
                  color={colorPallate.theme}
                />
              ) : (
                <FontAwesome5
                  name="check"
                  style={{ marginLeft: "auto" }}
                  size={20}
                  color={colorPallate.gray}
                />
              )}
            </View>
          </>
        )}
      </>
    </TouchableItem>
  );
}

function ContImpList() {
  const [ci_list, setci_list] = useState([
    {
      key: (Math.random() - Math.random()).toString(),
      business_functon: "Business function name from audits",
      imprvOpportun: "Oppotunity For improvement will be displayed down here.",
      actions: [],
      implemented_on: "",
      implemented: false,
    },
    {
      key: (Math.random() - Math.random()).toString(),
      business_functon: "Business function name from audits",
      imprvOpportun: "Oppotunity For improvement will be displayed down here.",
      actions: [],
      implemented_on: "",
      implemented: false,
    },
    {
      key: (Math.random() - Math.random()).toString(),
      business_functon: "Business function name from audits",
      imprvOpportun: "Oppotunity For improvement will be displayed down here.",
      actions: [],
      implemented_on: "",
      implemented: false,
    },
    {
      key: (Math.random() - Math.random()).toString(),
      business_functon: "Business function name from audits",
      imprvOpportun: "Oppotunity For improvement will be displayed down here.",
      actions: [],
      implemented_on: "",
      implemented: false,
    },
    {
      key: (Math.random() - Math.random()).toString(),
      business_functon: "Business function name from audits",
      imprvOpportun: "Oppotunity For improvement will be displayed down here.",
      actions: [],
      implemented_on: "",
      implemented: false,
    },
    {
      key: (Math.random() - Math.random()).toString(),
      business_functon: "Business function name from audits",
      imprvOpportun: "Oppotunity For improvement will be displayed down here.",
      actions: [],
      implemented_on: "",
      implemented: false,
    },
    {
      key: (Math.random() - Math.random()).toString(),
      business_functon: "Business function name from audits",
      imprvOpportun: "Oppotunity For improvement will be displayed down here.",
      actions: [],
      implemented_on: "",
      implemented: false,
    },
  ]);
  const updateCI_Lists = (CI_item) => {
    setci_list((current_CI) => {
      let found = current_CI.find((item) => item.key == CI_item.key);
      if (found == undefined) return;
      else
        return current_CI.map((item) =>
          item.key == CI_item.key ? CI_item : item
        );
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={ci_list}
        renderItem={(ci_item) => (
          <ListItem
            ci_item={ci_item}
            updateCI_Lists={updateCI_Lists}
            // // formTitle={formTitle}
            // addSchedule={addSchedule}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
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
  LitemFade: {
    backgroundColor: colorPallate.fade,
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
  reviewTitle: {
    marginVertical: 7,
    fontSize: 16,
    fontWeight: "bold",
    color: colorPallate.theme,
  },
  reviewTitlefade: {
    marginVertical: 7,
    fontSize: 16,
    fontWeight: "bold",
    color: colorPallate.gray,
  },
  separator: {
    backgroundColor: colorPallate.dashBoardseparator,
    height: 2,
    borderRadius: 2,
    marginVertical: 4,
  },
});
export default ContImpList;
