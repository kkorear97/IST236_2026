import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function HomeScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

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
        <Title>Local</Title>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/Local-front.png")}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:8433140474")}
        >
          843-314-0474
        </Text>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/ZzHBCiz6o6SjgHHw7")
          }
        >
          10880 Ocean Hwy Unit 21{"\n"} Pawleys Island,{"\n"} SC 29585
        </Text>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://www.pawleyslocal.com/")
          }
        >
          www.pawleyslocal.com
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>View Menu</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380,
  },
  infoContainer: {
    flex: 3,
    justifyContent: "center",
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
    padding: 7,
    color: Colors.primary500,
    fontFamily: "baskervville"
  },
  buttonContainer: {
    flex: 1,
  },
});
