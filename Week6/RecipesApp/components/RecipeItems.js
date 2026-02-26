import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Colors from "../constants/colors";

function RecipeItem(props) {
  return (
    //Main container for a single recipe item
    <View style={styles.item}>
      {/* Title Section */}
      <View style={styles.itemTitleContainer}>
        {/* Displays recipe title passed from parent */}
        <Text style={styles.itemTitle}>{props.title}</Text>
      </View>
      {/* Buttons Section */}
      <View style={styles.itemButtonsContainer}>
        {/* View Button */}
        <View style={styles.button}>
          {/* When pressed, opens modal via props.onView */}
          <Button title="View" onPress={props.onView} />
        </View>
        {/* Delete Button */}
        <View style={styles.button}>
          {/* When pressed, deletes recipe via props.onDelete */}
          <Button title="Delete" onPress={props.onDelete} />
        </View>
      </View>
    </View>
  );
}

export default RecipeItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    borderRadius: 6,
    backgroundColor: Colors.accent500,
  },
  itemTitleContainer: {
    justifyContent: "center",
  },
  itemTitle: {
    fontFamily: "paperNoteBold",
    fontSize: 20,
    color: Colors.primary300,
    padding: 8,
  },
  itemButtonsContainer: {
    flexDirection: "row",
  },
  button: {
    marginVertical: 5,
    marginHorizontal: 3,
  },
});
