import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect, useContext } from "react";
import { NEWSDATA } from "../data/dummy-data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";
import { BookmarksContext } from "../store/context/bookmarks-context";

function NewsDetailScreen(props) {

  const bookmarkedNewsCtx = useContext(BookmarksContext);
  //Gets the news ID passed form previous screen
  const newsId = props.route.params.newsId;
  //Finds the selected news item using the ID
  const selectedNewsItem = NEWSDATA.find((news) => news.id === newsId);

  const newsIsBookmarked = bookmarkedNewsCtx.ids.includes(newsId);

  function changeBookmarkStatusHandler() {
    if (newsIsBookmarked) {
      bookmarkedNewsCtx.removeFavorite(newsId);
    } else {
      bookmarkedNewsCtx.addFavorite(newsId);
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
            pressed={newsIsBookmarked}
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
          source={{ uri: selectedNewsItem.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        {/* Headline section */}
        <Text style={styles.headline}>
          {selectedNewsItem.headline.toLocaleString()}
        </Text>
        {/* info section */}
        <Text style={styles.meta}>
          {selectedNewsItem.date} | {selectedNewsItem.author} | {selectedNewsItem.agency}
        </Text>
        {/* Description section */}
        <Text style={styles.description}>{selectedNewsItem.description}</Text>
      </View>
    </View>
  );
}
export default NewsDetailScreen;

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
