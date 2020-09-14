import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import * as shape from "d3-shape";
import { AreaChart, Grid, YAxis, XAxis } from "react-native-svg-charts";
import { colorPallate } from "../GlobalStyleVars";
const Gradient = () => (
  <Defs key={"gradient"}>
    <LinearGradient id={"gradient"} x1={"0"} y={"0%"} x2={"0%"} y2={"100%"}>
      <Stop offset={"0%"} stopColor={"#5FA8D3"} />
      <Stop offset={"75%"} stopColor={"#DFEBF2"} />
      <Stop offset={"100%"} stopColor={"#FFFFFF"} />
    </LinearGradient>
  </Defs>
);

function ManagementChart() {
  const data = {
    review: [50, 10, 40, 95, 90, 95, 30, 24, 85, 91, 35, 53, 53, 53],
    date: ["2 Aug", "12 Aug", "22 Aug", "2 Sep", "12 Sep", "22 Sep", "28 Sep"],
    date2: [1, 5, 6, 8, 9, 9],
  };

  return (
    <View style={styles.chartcontainer}>
      <View style={styles.charttitlecont}>
        <Text style={styles.charttitle}>Risk raised Past 90 Days</Text>
      </View>

      <AreaChart
        style={{ height: 200 }}
        data={data.review}
        contentInset={{ top: 15, bottom: 15, left: 0, right: 0 }}
        curve={shape.curveBasis}
        svg={{
          fill: "url(#gradient)",
          stroke: "#62B6CB",
        }}
      >
        <Gradient />
      </AreaChart>
      {/* <XAxis
        style={{ marginTop: 10 }}
        data={data.date}
        formatLabel={(value, index) => index}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 8, fill: "#62B6CB" }}
        numberOfTicks={7}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  chartcontainer: {
    backgroundColor: "white",
    paddingVertical: 6,
    borderRadius: 6,
    shadowColor: "#CAE9FF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chart: {
    height: 220,
    flex: 1,
  },
  charttitlecont: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#1B4965",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  charttitle: {
    fontSize: 15,
    color: "#62B6CB",
    fontWeight: "bold",
  },
  svg: {
    backgroundColor: "black",
  },
});

export default ManagementChart;
