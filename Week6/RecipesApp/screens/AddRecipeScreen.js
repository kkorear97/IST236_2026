import { StyleSheet, ScrollView, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function AddRecipeScreen(props) {
  // Set Sage Area Screen Bondaries
  const insets = useSafeAreaInsets();

  //State for recipe title input
  const [recipeTitle, setRecipeTitle] = useState("");
  //State for recipe instructions input
  const [recipeText, setRecipeText] = useState("");

  //Handles when the user presses "Submit"
  function addRecipeHandler() {
    //Pass entered data back to App.js
    props.onAdd(recipeTitle, recipeText);
    //Navigate back after submitting
    props.onCancel();
  }

  return (
    <View
      //Apply safe area padding dynamically
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
      {/* Screen Title */}
      <View style={styles.titleContainer}>
        <Title>Add New Recipe</Title>
      </View>

      {/* Scrollable Content Area */}
      <View style={styles.scrollContainer}>
        <ScrollView>
          {/* Recipe Title Input */}
          <View style={styles.recipeTitleContainer}>
            <TextInput
              placeholder="Enter Recipe Title Here"
              style={styles.recipeTitle}
              onChangeText={setRecipeTitle}
            />
          </View>
          {/* Recipe Instructions Input */}
          <View style={styles.recipeTextContainer}>
            <TextInput
              placeholder="Enter Recipe Instructions Here"
              style={styles.recipeText}
              onChangeText={setRecipeText}
              textAlignVertical="top"
              multiline={true}
              numberOfLines={20}
            />
          </View>
          {/* Navigation Buttons */}
          <View style={styles.navButtonContainer}>
            <View style={styles.navButton}>
              <NavButton onNext={addRecipeHandler}>Submit</NavButton>
            </View>
            <View style={styles.navButtonContainer}>
              <View>
                <NavButton style={styles.navButton}>Cancel</NavButton>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default AddRecipeScreen;

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
  recipeTitleContainer: {
    borderWidth: 3,
    backgroundColor: Colors.primary300,
  },
  recipeTitle: {
    color: Colors.accent800,
    fontWeight: "bold",
    fontSize: 30,
  },
  recipeTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.primary300,
    alignItems: "flex-start",
  },
  recipeText: {
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
