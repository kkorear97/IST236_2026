import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from "react-native";
import Colors from "../constants/colors";
import { useScale } from './useScale';

function BookmarkButton(props) {
  const { icon } = useScale();

  const iconSize = icon(24);

  if (props.pressed) {
    return (
      <Pressable onPress={props.onPress}>
        <MaterialIcons name="favorite" size={iconSize} color={Colors.accent600} />
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={props.onPress}>
        <MaterialIcons name="favorite-outline" size={iconSize} color={Colors.accent600} />
      </Pressable>
    );
  }
}

export default BookmarkButton;
