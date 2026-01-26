import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      {/* Set status bar styling */}
      <StatusBar style="auto" />

      {/* Set SafeAreaView Screen Container */}
      <SafeAreaView style={styles.container}>
        {/* Set Image container */}
        <View style={styles.imagecontainer}>
          <Image style={styles.image} source={require("./assets/images/Me.jpg")}/>
        </View>
        {/* Sets the Info Container */}
        <View style={styles.infocontainer}>
          <Text style={styles.text}>Kylie O'Rear</Text>
          {/* Sends you to your email app so you can email the address listed  */}
          <Text style={styles.text} onPress={() => Linking.openURL("mailto:korear@hgtc.edu")}>korear@hgtc.edu</Text>
          {/* Will bring up your call log and will auto populate the number listed to call */}
          <Text style={styles.text} onPress={() => Linking.openURL("tel:+18434679293")}>(843)467-9293</Text>
          {/* Will send you to the website that is linked */}
          <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/kkorear97/IST236_2026")}>https://github.com/kkorear97/IST236_2026</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ac8cb9",
    alignItems: "center",
    justifyContent: "center",
  },
  imagecontainer: {
    flex: 3,
    width: "100%"
  },
  image: {
    height: 400,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "#0c0701"
  },
  infocontainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  text: {
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 20
  }
});
