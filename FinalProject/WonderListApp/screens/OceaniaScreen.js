import Place from "../components/Place";
import { PLACES } from "../data/dummy_data";
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function OceaniaScreen() {
  //Defines the region we want to filter by
  const type = "Oceania";
  //Filter the full PLACES array to only include places that belong to the "Oceania" region
  const displayedPlaces = PLACES.filter((placesItem) => {
    return placesItem.region === type;
  });

  //Render the Place component and pass the filtered list as props
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Dark gradient overlay */}
      <LinearGradient
        colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.2)", "rgba(0,0,0,0.7)"]}
        style={styles.overlay}
      />
      <Place items={displayedPlaces} />
    </ImageBackground>
  );
}

export default OceaniaScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
