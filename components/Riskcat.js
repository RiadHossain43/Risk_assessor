// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Button,
//   Modal,
//   FlatList,
//   ScrollView,
// } from "react-native";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import RiskAdd from "./RiskAdd";
// import { Risk } from "./Risk";

// function Riskcat({ risk }) {
//   const [formOpen, setFormOpen] = useState(false);

//   const [risks, setRisks] = useState([
//     {
//       key: "999",
//       risk: "Risk name or a suitable title will be here",
//       detail: `Client that type risk detail in the form will be displayed here. Also with Consequence and likwlihood. Dashboard will be updated accordingly. Details will go to database in future`,
//       mitigation: `Controls / Mitigations will be displayed here`,
//       consequence: "4",
//       likelyhood: "3",
//       submission: "Add a Risk manualy to see the submission time",
//       closed: "",
//       mitigated: false,
//     },
//   ]);

//   const addRisk = (risk) => {
//     risk.key = Math.random().toString();
//     setRisks((currentRisks) => {
//       return [risk, ...currentRisks];
//     });
//     console.log(risks);
//     setFormOpen(false);
//   };
//   const updateRisk = (risk, time, mitigated) => {};

//   return (
//     <View style={styles.risk}>
//       <Modal visible={formOpen} animationType={"slide"}>
//         <View style={{ backgroundColor: "#0b0c10" }}>
//           <MaterialIcons
//             name="close"
//             size={28}
//             color="#66fcf1"
//             style={styles.backbtn}
//             onPress={() => setFormOpen(false)}
//           />
//         </View>
//         <ScrollView style={styles.modal}>
//           <View style={styles.form}>
//             <RiskAdd headline={risk} addRisk={addRisk} />
//           </View>
//           <FlatList
//             data={risks}
//             renderItem={(risk) => <Risk risk={risk} updateRisk={updateRisk} />}
//           />
//         </ScrollView>
//       </Modal>

//       <View style={styles.riskcat}>
//         <Text style={styles.text}>{risk.item.text}</Text>
//       </View>
//       <TouchableOpacity>
//         <MaterialIcons
//           name="add"
//           size={25}
//           color="#45a29e"
//           onPress={() => setFormOpen(true)}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   backbtn: {
//     margin: 15,
//     alignSelf: "center",
//   },
//   form: {
//     flex: 0.5,
//   },
//   modal: {
//     backgroundColor: "#0b0c10",
//   },
//   risk: {
//     padding: 15,
//     backgroundColor: "white",
//     borderRadius: 8,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginVertical: 5,
//   },
//   risklevel: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//   },
//   riskcat: {
//     flexDirection: "row",
//   },
//   text: {
//     textAlign: "left",
//     fontSize: 18,
//     color: "#27323f",
//   },
//   centeralign: {
//     marginVertical: "auto",
//   },
//   scores: {
//     padding: 8,
//     borderWidth: 1,
//     backgroundColor: "darkgray",
//     color: "white",
//   },
// });

// export { Riskcat };
