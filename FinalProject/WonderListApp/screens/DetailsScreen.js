import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect, useContext } from "react";
import { PLACES } from "../data/dummy_data";
import { BookmarksContext } from "../store/context/bookmarks-context";
import Colors from "../constants/colors";
import BookmarkButton from "../components/BookmarkButton";



function DetailsScreen(props) {
    
    const bookmarkedPlacesCtx = useContext(BookmarksContext);
    //Gets the place ID passed from previous screeen
    const placeId = props.route.params.placeId;
    //Finds the selected place using the ID
    const selectedPlacesItem = PLACES.find((places) => placeId.id === placeId);

    const placeIsBookmarked = bookmarkedPlacesCtx.ids.includes(placeId);

    function changeBookmarkStatusHandler() {
        if (placeIsBookmarked) {
            bookmarkedPlacesCtx.removeFavorite(placeId);
        } else {
            bookmarkedPlacesCtx.addFavorite(placeId);
        }
    }


    /*
    useLayoutEffect runs before the screen is rendered.
    Used here to dynamically update the header (top bar)
  */
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      // Add bookmark button to the header (top right)
      headerRight: () => {
        return (
          <BookmarkButton
          //Pass current state
            pressed={placeIsBookmarked}
          //Handle press
            onPress={changeBookmarkStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeBookmarkStatusHandler]);

  return (
    <View style={styles.rootContainer}>
      {/* Image section */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedPlacesItem.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        {/* Headline section */}
        <Text style={styles.headline}>
          {selectedPlacesItem.name}, {selectedPlacesItem.country}
        </Text>
        {/* Rating section */}
        <Text style={styles.meta}>
          {selectedPlacesItem.rating}/5
        </Text>
        {/* Description section */}
        <Text style={styles.description}>{selectedNewsItem.description}</Text>
        {/* Google Maps Link */}
        <Text>{selectedPlacesItem.mapLink}</Text>
      </View>
    </View>
  );
}
export default DetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
  },
  headline: {
    color: Colors.primary300,
    fontSize: 35,
    textAlign: "center",
    fontFamily: "playfairBold",
    paddingBottom: 5,
  },
  meta: {
    color: Colors.primary300,
    fontSize: 20,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  description: {
    color: Colors.primary300,
    width: "90%",
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "playfair",
  },
});