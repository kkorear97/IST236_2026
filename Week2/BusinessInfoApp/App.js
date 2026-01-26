import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.imagecontainer}>
          <Image style={styles.image} source={require("./assets/images/Local.jpg")}/>
        </View>
        <View style={styles.infocontainer}>
          <Text style={styles.text} onPress={() => Linking.openURL("http://www.pawleyslocal.com/")}>Local: Eat, Drink, Celebrate</Text>
          <Text style={styles.text}>www.pawleyslocal.com</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:+18433140474")}>(843) 314-0474</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://maps.app.goo.gl/H1bVcmKzu8a8Awh57")}>Open in Google Maps</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c6f7d",
    alignItems: "center",
    justifyContent: "center",
  },
  imagecontainer: {
    flex: 3,
    width: "100%"
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "#7c5b30"
  },
  infocontainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  text: {
    fontSize: 30,
    fontStyle: "italic",
    marginBottom: 20
  }
});
