import { useWindowDimensions } from "react-native";

export function useScale() {
  const { width } = useWindowDimensions();

  const scale = width / 375;

  const font = (size) => Math.min(size * scale, size * 1.6);
  const icon = (size) => Math.min(size * scale, size * 1.8);
  const space = (size) => Math.min(size * scale, size * 2);

  return { font, icon, space, width };
}