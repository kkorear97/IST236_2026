import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";


export default function App() {
  //Load Custom Fonts from assets folder
  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  });

  //Keep track of which screen is currently being displayed
  const [currentScreen, setCurrentScreen] = useState("home");
  //Stores the next avalibel ID for the new recipes
  const [currentID, setCurrentID] = useState(3);
  //Stores all recipe objects in state
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Banana Oat Pancakes",
      text: "1 ripe banana /n2 eggs /n1/2 cup rolled oats",
    },
    {
      id: 2,
      title: "Honey Garlic Chicken",
      text: "2 chicken breast /nSalt & pepper /n2 tbsp honey /n2 cloves garlic(minced) /n1 tbsp soy sauce",
    },
  ]);

  //Navigates back to the Home Screen
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  //Navigates to the Recipe Screen
  function recipeScreenHandler() {
    setCurrentScreen("recipe");
  }

  //Navigates to the Add Recipe Screen
  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  //Adds a new recipe to the recipe list
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        //keeps existing recipe
        ...currentRecipes, 
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    //Increments ID so the next recipe gets a unique ID
    setCurrentID(currentID + 1);
    //After adding, go back to the recipe screen
    addRecipeScreenHandler();
  }

  //Deletes a recipe by filering out the matching ID
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    });
  }

  //If current scsreen is "add", show AddRecipeScreen
  let screen = <HomeScreen onNext={recipeScreenHandler} />;
  if (currentScreen === "add") {
    screen = (
      <AddRecipeScreen onAdd={addRecipeHandler} onCancel={recipeScreenHandler} />
    );
  }

  //If current screen is "recipe", show RecipeScreen
  if (currentScreen === "recipe") {
    screen = (
      <RecipeScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  //Main app render
  return (
    <>
    {/* Controls the apperance of the device status bar */}
      <StatusBar style="auto" />

      {/* SafeAreaProvider ensures content doesn't overlap status bars*/}
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
