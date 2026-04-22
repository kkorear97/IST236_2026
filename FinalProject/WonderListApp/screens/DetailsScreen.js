import {
  Alert,
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  Pressable,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useState, useLayoutEffect, useContext } from "react";
import { PLACES } from "../data/dummy_data";
import { BookmarksContext } from "../store/context/bookmarks-context";
import Colors from "../constants/colors";
import BookmarkButton from "../components/BookmarkButton";
import { useScale } from "../components/useScale";

function DetailsScreen(props) {
  const { width, height } = useWindowDimensions();
  const { font, space } = useScale();

  const bookmarkedPlacesCtx = useContext(BookmarksContext);
  //Gets the place ID passed from previous screeen
  const placeId = props.route.params.placeId;
  //Finds the selected place using the ID
  const selectedPlacesItem = PLACES.find((place) => place.id === placeId);

  const placeIsBookmarked = bookmarkedPlacesCtx.ids.includes(placeId);

  function changeBookmarkStatusHandler() {
    if (placeIsBookmarked) {
      //Adds an alert popup for when the user wants to unfavorite a location
      Alert.alert(
        "Remove Favoirte",
        "Are you sure you want to unfavoirte this location?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Remove",
            style: "destructive",
            onPress: () => bookmarkedPlacesCtx.removeFavorite(placeId),
          },
        ],
      );
    } else {
      bookmarkedPlacesCtx.addFavorite(placeId);
    }
  }

  /*
    useLayoutEffect runs before the screen is rendered.
    Used here to dynamically update the header (top bar)
    Changed my mind and used useLayoutEffect vs useEffect
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

  const imageHeight = width > 600 ? 400 : 280;

  //Had to move into the details screen function to allow dynamic changes to screen
  const styles = StyleSheet.create({
    rootContainer: {
      flexGrow: 1,
    },
    imageContainer: {
      marginVertical: space(1),
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
      paddingVertical: space(2),
    },
    headline: {
      color: Colors.primary300,
      fontSize: font(32),
      textAlign: "center",
      fontFamily: "poppins",
      paddingBottom: space(1),
    },
    meta: {
      color: Colors.primary300,
      fontSize: font(20),
      fontFamily: "poppins",
      paddingBottom: space(1),
    },
    description: {
      color: Colors.primary300,
      width: "90%",
      fontSize: font(16),
      textAlign: "center", //center looked best in the over all alignment compared to other options
      fontFamily: "poppins",
    },
    maps: {
      fontFamily: "poppins",
      fontSize: font(14),
      color: Colors.primary300,
      marginTop: space(2),
    },
  });

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.rootContainer}
    >
      {/* Image section */}
      <View style={[styles.imageContainer, { height: imageHeight }]}>
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
        <Text style={styles.meta}>{selectedPlacesItem.rating}/5</Text>
        {/* Description section */}
        <Text style={styles.description}>{selectedPlacesItem.description}</Text>
        {/* Google Maps Link */}
        <Pressable onPress={() => Linking.openURL(selectedPlacesItem.mapLink)}>
          <Text style={styles.maps}>Open Destination in Google Maps</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
export default DetailsScreen;
