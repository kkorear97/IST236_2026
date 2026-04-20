import Place from "../components/Place";
import { PLACES } from "../data/dummy_data";
import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function AsiaScreen() {
    //Define the region we want to filter by
    const type = "Asia";
    //filter the full PLACES array to only include places that belong to the "Asia" region
    const displayedPlaces = PLACES.filter((placesItem) => {
        return placesItem.region === type;
    });

    //Render the Place compnent and pass the filtered list as props
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

export default AsiaScreen;

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