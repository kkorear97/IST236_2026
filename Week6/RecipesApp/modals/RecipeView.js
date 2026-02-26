import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, FlatList, Modal } from "react-native";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";

function RecipeView(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    //Modal component creates a popup overlay
    //visible controls whether modal is shown
    <Modal visible={props.visible} animationType="slide">
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
        {/* Recipe Title Section */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        {/* Recipe Instructions Section */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
        {/* Navigation Button Section */}
        <View style={styles.navButtonContainer}>
          <NavButton onNext={props.onClose}>Return to Recipes</NavButton>
        </View>
      </View>
    </Modal>
  );
}

export default RecipeView;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.accent800,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "paperNoteSketch",
    color: Colors.primary300,
  },
  textContainer: {
    flex: 5,
    width: "90%",
    borderWidth: 3,
    borderColor: Colors.primary500,
    padding: 10,
  },
  text: {
    color: Colors.primary300,
    fontSize: 20,
    fontFamily: "paperNote",
  },
  navButtonContainer: {
    marginTop: 10,
    flex: 1,
  },
});
