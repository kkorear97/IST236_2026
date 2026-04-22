import Place from "../components/Place";
import { PLACES } from "../data/dummy_data";
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function AmericasScreen() {
  //Defines the region we want to filter by
  const type = "Americas";
  //Filter the full PLACES array to only include places that belong to the "Americas" region
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
        colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.3)", "rgba(0,0,0,0.7)"]}
        style={styles.overlay}
      />

      <Place items={displayedPlaces} />
    </ImageBackground>
  );
}

export default AmericasScreen;

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
