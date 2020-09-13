import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colorPallate } from "../GlobalStyleVars";
// import DocumentPicker from "react-native-document-picker";
import * as DocumentPicker from "expo-document-picker";

function OpenDocs({ setDoclst }) {
  let [URI, setURI] = useState("");
  let [progress, setProgress] = useState(0);
  let _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result.uri);
    setURI(result.uri);
  };
  let [newDoc, setNewdoc] = useState("New Document");
  let [docEditable, setDoceditable] = useState(true);
  let uploadFile = async () => {
    console.log(URI);
    let filename = URI.split("/").pop();
    console.log(filename);
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `file/${match[1]}` : `image`;
    console.log(type);
    let file = new FormData();
    file.append("file", {
      uri: URI,
      name: filename,
      type,
    });
    // using fetch api....
    // fetch("https://nrhealthcare.net/iMSUpload.php", {
    //   method: "POST",
    //   body: file,
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // })
    //   .then((res) => JSON.stringify(res))
    //   .then((data) => console.log(data.succ_msg));

    // using xhr for tracking upload percentage
    setDoceditable(false);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://nrhealthcare.net/iMSUpload.php");
    xhr.upload.addEventListener("progress", (e) => {
      let progress = e.lengthComputable ? (e.loaded / e.total) * 100 : 0;
      console.log(progress);
      setProgress(progress);
      if (progress == 100) {
        setTimeout(() => {
          newDoc == "" && setNewdoc("New Documnet");
          setDoclst((items) => {
            return [...items, newDoc];
          });
          setDoceditable(true);
          setProgress(0);
          setURI("");
        }, 2000);
      }
    });
    xhr.setRequestHeader("Content-Type", "multipart/form-data");
    xhr.send(file);
    // xhr.onerror = (e) => {
    //   alert("Error sending data, check internet connection and try again");
    // };
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          _pickDocument();
        }}
        style={styles.btn}
      >
        <Text style={styles.text}>Open a Document</Text>
        {progress > 0 && (
          <>
            <Text style={styles.text}>Uploaded {Math.round(progress)}%</Text>
            <View style={styles.progressbar}>
              <View
                style={{
                  width: `${Math.round(progress)}%`,
                  backgroundColor: colorPallate.theme,
                  height: "100%",
                }}
              />
            </View>
          </>
        )}
      </TouchableOpacity>
      {URI != "" && (
        <>
          <TextInput
            style={{
              padding: 5,
              borderBottomWidth: 1,
              borderBottomColor: colorPallate.them,
            }}
            value={newDoc}
            onChangeText={(doc_name) => {
              if (docEditable) setNewdoc(doc_name);
            }}
          />
          <TouchableOpacity
            onPress={() => uploadFile()}
            style={styles.uploadbtn}
          >
            <Text style={styles.text}>Upload</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: colorPallate.secondary,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 35,
    borderRadius: 10,
    marginTop: 20,
  },
  progressbar: {
    width: "50%",
    backgroundColor: "transparent",
    height: 5,
    borderColor: colorPallate.theme,
    borderWidth: 1,
  },
  text: {
    fontSize: 15,
    color: colorPallate.theme,
    marginVertical: 10,
  },
  uploadbtn: {
    backgroundColor: colorPallate.secondaryFocus,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 10,
    marginVertical: 8,
  },
});

export default OpenDocs;
