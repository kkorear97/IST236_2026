import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import { useState } from "react";

function AddNotesScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  function addNoteHandler() {
    props.onAdd(noteTitle, noteText);
    props.onCancel();
  }

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Add New Note</Title>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.noteTitleContainer}>
            <TextInput
              placeholder="Enter Note Title Here"
              style={styles.noteTitle}
              onChangeText={setNoteTitle}
            />
          </View>

          <View style={styles.noteTextContainer}>
            <TextInput
              placeholder="Enter Note Text Here"
              style={styles.noteText}
              onChangeText={setNoteText}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={20}
            />
          </View>

          <View style={styles.navButtonContainer}>
            <View style={styles.navButton}>
              <NavButton onNext={addNoteHandler}>Submit</NavButton>
            </View>
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default AddNotesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 50,
  },
  scrollContainer: {
    flex: 5,
  },
  noteTitleContainer: {
    borderWidth: 3,
    backgroundColor: Colors.primary300,
  },
  noteTitle: {
    color: Colors.accent800,
    fontWeight: "bold",
    fontSize: 30,
  },
  noteTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.primary300,
    alignItems: "flex-start",
  },
  noteText: {
    minHeight: 300, // starts big but grows if needed
    padding: 10,
    fontSize: 18,
    color: Colors.primary800,
    textAlignVertical: "top",
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 10,
  },
});
