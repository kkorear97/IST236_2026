import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import Title from "../components/Title";

function HomeScreen(props) {
  // Set Safe Area Screen Boundaries
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
        <Title>Thought Vault</Title>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/note-taking.jpg")}
          style={styles.image}
        />
      </View>

      <View style={styles.navButtonContainer}>
        <NavButton onNext={props.onNext}>Go to Notes</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    flex: 2,
    justifyContent: "center",
    borderWidth: 4,
    borderRadius: 55,
    borderColor: Colors.accent500,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    resizeMode: "stretch",
  },
  navButtonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
