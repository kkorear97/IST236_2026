import { LinearGradient } from "expo-linear-gradient";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";

//Component repersenting a single country tile in a grid
function CountryGridTile(props) {
  return (
    <View style={styles.gridItem}>
      {/* Outer container for spacing, shadow, and border radius */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          //Apply pressed style when the button is tapped
          pressed ? styles.buttonsPressed : null,
        ]}
        android_ripple={{ color: Colors.primary300 }}
        onPress={props.onPress}
      >
        <LinearGradient
        //Gradient background using the color prop; last color is semi-transparent accent
          colors={[props.color, props.color, props.color, props.color, props.color, Colors.accent300o75]}
          style={styles.innerContainer}
        >
          {/* Displays the name of the country */}
          <Text style={styles.name}>{props.name}</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

export default CountryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible", //Hides android ripple overflow on android only
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "font"
  },
});
