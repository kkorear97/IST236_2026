import { useFonts } from "expo-font";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DestinationOverviewScreen from "./screens/DestinationOverviewScreen";
import Colors from "./constants/colors";

//Creates a stack navigator 
const Stack = createNativeStackNavigator();

export default function App() {
  //loads the custom font
  const [fontsLoaded, fontsError] = useFonts({
    font: require("./assets/fonts/PlaypenSans-VariableFont_wght.ttf"),
  });

  //Callback to hidden splash screen once fonts are loaded or if there's an error
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      //Hides the splash screen
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        {/* Navigation container wraps all navigation screens */}
        <NavigationContainer>
          <Stack.Navigator
          //Set HomeScreen as the default screen
            initialRouteName="HomeScreen"
            screenOptions={{
              headerStyle: { backgroundColor: Colors.primary500 },
              headerTintColor: Colors.primary300,
              headerTitleStyle: { fontFamily: "font", fontSize: 40 },
              contentStyle: { backgroundColor: Colors.primary800 },
            }}
          >
            {/* Home Screen with centered title */}
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Destinations",
                headerTitleAlign: "center"
              }}
            />
             {/* Destination overview screen */}
            <Stack.Screen
              name="DestinationOverviewScreen"
              component={DestinationOverviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
