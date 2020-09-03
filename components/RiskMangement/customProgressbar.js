import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

function Bar({ level }) {
  console.log(level);
  let [getLevel, setgetLevel] = useState(level);
  let levelColor = ["#62B6CB", "#BEE9E8", "#F5AD1C", "#FE4E00", "#FF1C53"];
  let setLevelcolor = () => {
    return levelColor[getLevel - 1];
  };
  return (
    <>
      <View style={styles.track}>
        <View
          style={[
            styles.level,
            {
              width: `${(getLevel / 5) * 100}%`,
              backgroundColor: setLevelcolor(),
            },
          ]}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 10,
    width: "100%",
    backgroundColor: "#CAE9FF",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 8,
  },
  level: {
    height: "100%",
    borderRadius: 10,
  },
});

export default Bar;
