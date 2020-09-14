import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Svg, { Circle } from "react-native-svg";

function OpendColosedChartData() {
  return (
    <View
      style={{
        position: "absolute",
        alignSelf: "center",
        color: "#1B4965",
        zIndex: 1,
        fontSize: 20,
      }}
    >
      <Text>Open risk</Text>
      <View style={styles.riskamounts}>
        <AntDesign
          name="warning"
          size={20}
          color="#FF1C53"
          style={{ marginHorizontal: 10 }}
        />
        <Text>54</Text>
      </View>
      <Text>Closed risk</Text>
      <View style={styles.riskamounts}>
        <Ionicons
          name="md-done-all"
          size={20}
          color="#45A29E"
          style={{ marginHorizontal: 10 }}
        />
        <Text>44</Text>
      </View>
    </View>
  );
}

function RiskData() {
  return (
    <View style={styles.riskdata}>
      <View style={styles.risklvl}>
        <View style={styles.risklvlcontent}>
          <View style={[styles.levelindicator, styles.levelindicatorH]}></View>
          <Text>High</Text>
        </View>
        <Text style={styles.risknumber}>54</Text>
      </View>
      <View style={styles.risklvl}>
        <View style={styles.risklvlcontent}>
          <View style={[styles.levelindicator, styles.levelindicatorM]}></View>
          <Text>Medium</Text>
        </View>
        <Text style={styles.risknumber}>10</Text>
      </View>
      <View style={styles.risklvl}>
        <View style={[styles.risklvlcontent]}>
          <View style={[styles.levelindicator, styles.levelindicatorL]}></View>
          <Text>Low</Text>
        </View>
        <Text style={styles.risknumber}>30</Text>
      </View>
    </View>
  );
}

function Summery() {
  let [svgWidth, setsvgWidth] = useState(null);
  return (
    <View style={styles.summery}>
      <View style={styles.chart}>
        <View
          style={styles.risk}
          onLayout={(event) => {
            var { x, y, width, height } = event.nativeEvent.layout;
            console.log(width);
            setsvgWidth(width);
          }}
        >
          <Text style={styles.chartLlefttile}>Risk</Text>
          <Svg style={styles.test} width={svgWidth} height={svgWidth}>
            <Circle
              stroke="#CAE9FF"
              fill="none"
              cy={svgWidth / 2}
              cx={svgWidth / 2}
              r={svgWidth / 2 - 10}
              strokeWidth={10}
              opacity={0.5}
            />
            <Circle
              stroke="#5FA8D3"
              fill="none"
              cy={svgWidth / 2}
              cx={svgWidth / 2}
              r={svgWidth / 2 - 10}
              strokeWidth={10}
              strokeLinecap="round"
              strokeDasharray={503}
              strokeDashoffset={503 - 503 * 0.9}
            />
            <Circle
              stroke="#E8D7B5"
              fill="none"
              cy={svgWidth / 2}
              cx={svgWidth / 2}
              r={svgWidth / 2 - 20}
              strokeWidth={10}
              opacity={0.4}
            />
            <Circle
              stroke="#F6AC4A"
              fill="none"
              cy={svgWidth / 2}
              cx={svgWidth / 2}
              r={svgWidth / 2 - 20}
              strokeWidth={10}
              strokeLinecap="round"
              strokeDasharray={440}
              strokeDashoffset={440 - 440 * 0.6}
            />
            <Circle
              stroke="#EABAC5"
              fill="none"
              cy={svgWidth / 2}
              cx={svgWidth / 2}
              r={svgWidth / 2 - 30}
              strokeWidth={10}
              opacity={0.4}
            />
            <Circle
              stroke="#FF1C53"
              fill="none"
              cy={svgWidth / 2}
              cx={svgWidth / 2}
              r={svgWidth / 2 - 30}
              strokeWidth={10}
              strokeLinecap="round"
              strokeDasharray={378}
              strokeDashoffset={378 - 378 * 0.8}
            />
          </Svg>
        </View>
        <View style={styles.risk}>
          <OpendColosedChartData />
          <Svg style={styles.test} width={svgWidth} height={svgWidth}>
            <Circle
              stroke="#BEE9E8"
              fill="none"
              cy={svgWidth / 2}
              cx={svgWidth / 2}
              r={svgWidth / 2 - 10}
              strokeWidth={10}
              opacity={0.5}
            />
            <Circle
              stroke="#FF1C53"
              fill="none"
              cy={svgWidth / 2}
              cx={svgWidth / 2}
              r={svgWidth / 2 - 10}
              strokeWidth={10}
              strokeLinecap="round"
              strokeDasharray={503}
              strokeDashoffset={503 - 503 * 0.9}
            />
          </Svg>
        </View>
      </View>
      <RiskData />
    </View>
  );
}
const styles = StyleSheet.create({
  test: {
    // backgroundColor: "black",
  },
  chart: {
    flexDirection: "row",
  },
  chartLlefttile: {
    position: "absolute",
    alignSelf: "center",
    color: "#1B4965",
    zIndex: 1,
    fontSize: 20,
  },
  levelindicator: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  levelindicatorH: {
    backgroundColor: "#FF1C53",
  },
  levelindicatorM: {
    backgroundColor: "#F6AC4A",
  },
  levelindicatorL: {
    backgroundColor: "#5FA8D3",
  },
  oprnrisk: {},
  riskamounts: {
    flexDirection: "row",
  },
  summery: {
    width: "100%",
    paddingVertical: 5,
    backgroundColor: "white",
    paddingHorizontal: 5,
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
  text: {
    textAlign: "left",
    fontSize: 15,
  },
  risk: {
    justifyContent: "center",
    // backgroundColor: "red",
    marginBottom: 7,
    width: "50%",
  },
  riskdata: {
    padding: 8,
    backgroundColor: "#CAE9FF",
    flex: 1,
    alignSelf: "flex-start",
    borderRadius: 4,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  risklvl: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    borderRadius: 4,
    width: "32%",
  },
  risklvlcontent: {
    flexDirection: "row",
    width: "70%",
    // justifyContent: "space-between",
    alignItems: "center",
  },
  risknumber: {
    margin: 3,
    fontSize: 15,
  },
});

export { Summery };
