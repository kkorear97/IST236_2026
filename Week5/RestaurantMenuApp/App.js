import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";

export default function App() {
  //Set up custom font
  const [fontsLoaded] = useFonts({
    "baskervville": require("./assets/fonts/Baskervville-VariableFont_wght.ttf"),
    "baskervville-italic": require("./assets/fonts/Baskervville-SemiBoldItalic.ttf")
  });

  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  function menuScreenHandelr() {
    setCurrentScreen("menu");
  }

  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  // Determine which screen to be on
  let screen = <HomeScreen onNext={menuScreenHandelr} />;

  if (currentScreen === "menu") {
    screen = <MenuScreen onNext={homeScreenHandler} />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
});
