import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, Image, View } from "react-native";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function HomeScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    <View
      //Apply main container styles and dynamci padding from safe area
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
      {/* Title Secion */}
      <View style={styles.titleContainer}>
        <Title>Quick Dish</Title>
      </View>

      {/* Image Secion */}
      <View style={styles.imageContainer}>
        <Image
          //Loads local image from assets folder
          source={require("../assets/images/recipebook.jpg")}
          style={styles.image}
        />
      </View>

      {/* Navigation Button Section */}
      <View style={styles.navButtonContainer}>
        {/* When pressed, calls the onNext function passed from App.js */}
        <NavButton onNext={props.onNext}>Go to Recipes</NavButton>
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
    borderRadius: 30,
    borderColor: Colors.accent500,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 30,
    resizeMode: "stretch",
  },
  navButtonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
