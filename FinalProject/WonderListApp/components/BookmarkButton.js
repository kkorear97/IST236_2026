import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from "react-native";
import Colors from "../constants/colors";

function BookmarkButton(props) {
  if (props.pressed) {
    return (
      <Pressable onPress={props.onPress}>
        <MaterialIcons name="favorite" size={30} color={Colors.accent600} />
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={props.onPress}>
        <MaterialIcons name="favorite-outline" size={30} color={Colors.accent600} />
      </Pressable>
    );
  }
}

export default BookmarkButton;
