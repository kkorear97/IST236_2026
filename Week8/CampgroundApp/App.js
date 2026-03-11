import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Colors from "./constants/colors";
import { useCallback, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";

//Prevents the splash screen from auto-hiding until fonts load
SplashScreen.preventAutoHideAsync();

export default function App() {
  //Load custom fonts asynchronously
  const [fontsLoaded, fontError] = useFonts({
    blueridge: require("./assets/fonts/PlaypenSans-VariableFont_wght.ttf"),
  });

  //Callback to hide the splash screen once fonts are loaded or if there is an error
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      //Hides native splash screen
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  //While fonts are loading and there is no error, render nothing 
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});
