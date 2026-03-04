import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function NavButton(props) {
  return (
    <Pressable
        android_ripple={{ color: Colors.primary800 }}
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    borderRadius: 300,
    width: 300,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pressedItem: {
    opacity: 0.3,
  },
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    color: Colors.accent500,
  },
});
