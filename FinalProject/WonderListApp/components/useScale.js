import { useWindowDimensions } from "react-native";

//Custom hook to handle responsive scaling based on screen width
export function useScale() {
  //Get the current screen width from device
  const { width } = useWindowDimensions();

  //Base width (375 is a common iPhone reference width)
  //This is used to calculate how much larger or smaller the current screen is
  const scale = width / 375;

  //Scale font sizes proportionally to screen width
  //Math.min prevents text from becoming excessively large on big screens
  const font = (size) => Math.min(size * scale, size * 1.6);
   //Scale icon sizes slightly more than fonts (allows better visibility on large screens)
  const icon = (size) => Math.min(size * scale, size * 1.8);
   //Scale spacing (margins, padding, gaps) for consistent layout across devices
  const space = (size) => Math.min(size * scale, size * 2);

  return { font, icon, space, width };
}