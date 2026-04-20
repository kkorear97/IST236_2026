import "react-native-reanimated";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AmericasScreen from "./screens/AmericasScreen";
import AsiaScreen from "./screens/AsiaScreen";
import OceaniaScreen from "./screens/OceaniaScreen";
import EuropeScreen from "./screens/EuropeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import Colors from "./constants/colors";
import {
  Fontisto,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useCallback } from "react";
import BookmarksContextProvider from "./store/context/bookmarks-context";

//Create navigator instances
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

//Drawer Navigator
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Places"
      //Header Styling
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "montItalic",
          fontSize: 40,
          color: Colors.accent800,
        },
        //Screen & drawer style
        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      {/* Main Screen contains tabs */}
      <Drawer.Screen
        name="Places"
        component={TabsNavigator}
        options={{
          title: "All Travel Destinations",
          drawerLabel: "All Travel Destinations",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      {/* Bookmarked Places screen */}
      <Drawer.Screen
        name="FavoritePlaces"
        component={FavoritesScreen}
        options={{
          title: "Favoirte Places",
          drawerLabel: "Favorite Places",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

//Bottom Tab Navigator
//Used inside the  drawer screen
//Lets users swtich between categories
function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,

        //Active/Inactive tab styling
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,

        //Label Styling
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "montItalic",
        },

        //Tab bar container styling
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      {/* Europe Tab */}
      <Tabs.Screen
        name="Europe"
        component={EuropeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="newspaper" size={size} color={color} />
          ),
          tabBarLabel: "Europe",
        }}
      />
      {/* Americas Tab */}
      <Tabs.Screen
        name="Americas"
        component={AmericasScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="world-o" size={size} color={color} />
          ),
          tabBarLabel: "Americas",
        }}
      />
      {/* Asia Tab */}
      <Tabs.Screen
        name="Asia"
        component={AsiaScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cable-data"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Asia",
        }}
      />
      {/* Oceania Tab */}
      <Tabs.Screen
        name="Oceania"
        component={OceaniaScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cable-data"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Oceania",
        }}
      />
    </Tabs.Navigator>
  );
}
//Main App Component
export default function App() {
  //Load custom fonts
  const [fontsLoaded, fontError] = useFonts({
    montItalic: require("./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
    mont: require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
    poppins: require("./assets/fonts/Poppins-Medium.ttf"),
    poppinsItalic: require("./assets/fonts/Poppins-MediumItalic.ttf"),
  });

  //Hide splash screen once fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  //If fonts aren't loaded yet, don't render anything
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        {/* Status bar styling */}
        <StatusBar style="light" />
        <BookmarksContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="DrawerScreen"
              screenOptions={{
                headerTintColor: Colors.primary300,
                headerStyle: { backgroundColor: Colors.primary500 },
                contentStyle: { backgroundColor: "black" },
              }}
            >
              {/* Main App (Drawer & Tabs) */}
              <Stack.Screen
                name="DrawerScreen"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              {/* News detail screen (opens when user taps article) */}
              <Stack.Screen
                name="PlaceDetail"
                component={DetailsScreen}
                options={{
                  headerBackTitleVisible: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </BookmarksContextProvider>
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
