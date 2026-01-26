import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      {/* Set status bar styling */}
      <StatusBar style="light" />

      {/* Set SafeAreaView Screen Container */}
      <SafeAreaView style={styles.appContainer}>
        {/* Set Title container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>

        {/* Set Add Item Button Container */}
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Add Item Button Goes Here</Text>
        </View>

        {/* Set Items to Get Title Container */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Items To Get:</Text>
        </View>
        {/* Set List of Items Container */}
        <View style={styles.listContainer}>
          <Text style={styles.text}>My List of Items Go Here</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#1e085a",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    padding: 5,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontSize: 40,
    color: "#5e08cc",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  subtitleContainer: {
    flex: 1,
    margin: 10,
    padding: 5,
    paddingHorizontal: 30,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  subtitle: {
    fontSize: 30,
    color: "#5e08cc",
  },
  listContainer: {
    flex: 5,
    backgroundColor: "#ffffff",
    justifyContent: "center"
  },
});
