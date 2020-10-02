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

import Schedulebtn from "./Schedulebtn";
import {
  Fontisto,
  Foundation,
  Feather,
  AntDesign,
  Ionicons,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import DetailView from "./DetailView";
import { colorPallate } from "../GlobalStyleVars";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

function ListItem({ review, updatereviewLists, formTitle, addSchedule }) {
  let [detailOpen, setDetailOpen] = useState(false);

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
            review={review}
            updatereviewLists={updatereviewLists}
            addSchedule={addSchedule}
          />
        </ScrollView>
      )}

      {!detailOpen && (
        <>
          <View style={[styles.row, { alignItems: "center" }]}>
            <Fontisto
              name="preview"
              size={20}
              color={colorPallate.theme}
              style={{ marginRight: 10 }}
            />
            <Text style={styles.reviewTitle}>Review</Text>
            <View style={styles.intervals}>
              <View style={styles.intervalIndicator}></View>
              <View style={styles.intervalIndicator}></View>
              <View style={styles.intervalIndicator}></View>
              <Text style={[styles.reviewTitle, { marginLeft: 3 }]}>
                Intervals: Quaterly
              </Text>
            </View>
          </View>
          <View style={[styles.row]}></View>
          <View
            style={[styles.row, { marginVertical: 7, alignItems: "center" }]}
          >
            <FontAwesome name="calendar" size={18} color={colorPallate.theme} />
            <Text style={{ marginHorizontal: 10 }}>
              Date: {review.item.scheduleDate}
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

function ListItemCompleted({ review, updatereviewLists, formTitle, addRisk }) {
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
          <DetailView
            review={review}
            // updatereviewLists={updatereviewLists}
          />
        </ScrollView>
      </Modal>

      {!detailOpen && (
        <>
          <View style={[styles.row, { alignItems: "center" }]}>
            <Fontisto
              name="preview"
              size={20}
              color={colorPallate.theme}
              style={{ marginRight: 10 }}
            />
            <Text style={styles.reviewTitle}>Review</Text>
            <View style={styles.intervals}>
              <View style={styles.intervalIndicator}></View>
              <View style={styles.intervalIndicator}></View>
              <View style={styles.intervalIndicator}></View>
              <Text style={[styles.reviewTitle, { marginLeft: 3 }]}>
                Intervals: Quaterly
              </Text>
            </View>
          </View>
          <View style={[styles.row]}></View>
          <View
            style={[styles.row, { marginVertical: 7, alignItems: "center" }]}
          >
            <FontAwesome name="calendar" size={18} color={colorPallate.theme} />
            <Text style={{ marginHorizontal: 10 }}>
              Closed: {review.item.completed_on}
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

function Reviews({ reviews, updatereviewLists, formTitle, addSchedule }) {
  return (
    <View style={styles.list}>
      <Schedulebtn addSchedule={addSchedule} />
      <FlatList
        style={styles.list}
        data={reviews}
        renderItem={(review) => (
          <ListItem
            review={review}
            updatereviewLists={updatereviewLists}
            // formTitle={formTitle}
            addSchedule={addSchedule}
          />
        )}
      />
    </View>
  );
}
function Completed({ completedReview, updatereviewLists }) {
  return (
    <View style={styles.list}>
      <FlatList
        style={styles.list}
        data={completedReview}
        renderItem={(review) => (
          <ListItemCompleted
            review={review}
            // updatereviewLists={updatereviewLists}
            // formTitle={formTitle}
            // addRisk={addRisk}
          />
        )}
      />
    </View>
  );
}

function reviewList() {
  const [reviews, setreviews] = useState([
    {
      key: (Math.random() - Math.random()).toString(),
      attendees: ["Nuraz zamal", "Reyad Hossain"],
      intervals: "Quaterly",
      agenda: ["Item1", "item2"],
      minutes: ["Itewm1", "item2"],
      submission: "3 August 2020",
      completed_on: "",
      completed: false,
      scheduleDate: "10 October 2020",
    },
  ]);

  const [completedReview, setcompletedReview] = useState([
    {
      key: (Math.random() - Math.random()).toString(),
      attendees: ["Nuraz zamal", "Reyad Hossain"],
      intervals: "Quaterly",
      agenda: ["Item1", "item2"],
      minutes: ["Itewm1", "item2"],
      submission: "3 August 2020",
      completed_on: "",
      completed: false,
      scheduleDate: "10 October 2020",
    },
  ]);

  const addSchedule = (risk) => {
    setreviews((currentreviews) => {
      let found = currentreviews.find((item) => item.key == risk.key);
      console.log("Found :", found);
      if (found == undefined) return [...currentreviews, risk];
      else
        return currentreviews.map((item) =>
          item.key == risk.key ? risk : item
        );
    });
    console.log(reviews);
  };
  const updatereviewLists = (review) => {
    setreviews((currentreviews) => {
      return currentreviews
        .map((reviewitem) =>
          reviewitem.key == review.key ? review : reviewitem
        )
        .filter((reviewitem) => reviewitem.completed == false);
    });
    setcompletedReview((currentreviews) => {
      return [...currentreviews, review];
    });
    console.log(completedReview);
  };
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name="reviews"
          children={() => (
            <Reviews
              reviews={reviews}
              updatereviewLists={updatereviewLists}
              //   formTitle={formTitle}
              addSchedule={addSchedule}
            />
          )}
        />
        <Tab.Screen
          name="Completed"
          children={() => (
            <Completed
              completedReview={completedReview}
              // formTitle={formTitle}
              //   updatereviewLists={updatereviewLists}
            />
          )}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  reviewTitle: {
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
  intervals: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
  intervalIndicator: {
    height: 5,
    width: 10,
    borderRadius: 10,
    backgroundColor: colorPallate.theme,
    marginHorizontal: 2,
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
export default reviewList;
