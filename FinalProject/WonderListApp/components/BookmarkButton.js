import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from "react-native";
import Colors from "../constants/colors";
import { useScale } from './useScale';

function BookmarkButton(props) {
  //Get scaling utility from custom hook
  const { icon } = useScale();

  //Dynamically scale the icon size for responsiveness
  const iconSize = icon(24);

  //If the item is already bookmarked (pressed = true),
  //show the filled heart icon
  if (props.pressed) {
    return (
      <Pressable onPress={props.onPress}>
        <MaterialIcons name="favorite" size={iconSize} color={Colors.accent600} />
      </Pressable>
    );
  //If not bookmarked, show the outlined heart icon
  } else {
    return (
      <Pressable onPress={props.onPress}>
        <MaterialIcons name="favorite-outline" size={iconSize} color={Colors.accent600} />
      </Pressable>
    );
  }
}

export default BookmarkButton;
