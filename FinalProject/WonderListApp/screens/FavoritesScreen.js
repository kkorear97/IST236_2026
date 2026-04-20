import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { PLACES } from "../data/dummy_data";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import Place from "../components/Place";
import Colors from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

function FavoritesScreen() {
  //Access the bookmarks context to get globally stored bookmarked place IDS
  const bookmarkedPlacesCtx = useContext(BookmarksContext);
  //Filter the full PLACES list to only include places whos IDs are stored in the bookmarks context
  const bookmarkedPlaces = PLACES.filter((placeItem) => {
    return bookmarkedPlacesCtx.ids.includes(placeItem.id);
  });

  //if no bookmarked places exist show an empty state message
  if (bookmarkedPlaces.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no saved destinations yet!</Text>
      </View>
    );
    //Otherwise display the list of bookmarked places
  } else {
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
        <Place items={bookmarkedPlaces} />
      </ImageBackground>
    );
  }
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 24,
    fontFamily: "poppins",
    color: Colors.primary300,
    textAlign: "center",
  },
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
