import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { PLACES } from "../data/dummy_data";
import { Text, View, StyleSheet } from "react-native";
import Place from "../components/Place";
import Colors from "../constants/colors";


function FavoritesScreen() {
    const bookmarkedPlacesCtx = useContext(BookmarksContext);
    const bookmarkedPlaces = PLACES.filter((placeItem) => {
        return bookmarkedPlacesCtx.ids.includes(placeItem.id);
    });

    if (bookmarkedPlaces.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no saved destinations yet!</Text>
            </View>
        );
    } else {
        return <Place items={bookmarkedPlaces} />;
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
    fontWeight: "bold",
    fontFamily: "playfairItalic",
    color: Colors.primary300,
    textAlign: "center",
  },
});