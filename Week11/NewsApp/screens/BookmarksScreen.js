import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { NEWSDATA } from "../data/dummy-data";
import List from "../components/List";
import Colors from "../constants/colors";

function BookmarksScreen() {
  const bookmarkedNewsCtx = useContext(BookmarksContext);
  const bookmarkedNews = NEWSDATA.filter((newsItem) => {
    return bookmarkedNewsCtx.ids.includes(newsItem.id);
  });

  if (bookmarkedNews.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no saved news articles yet!</Text>
      </View>
    );
  } else {
    return <List items={bookmarkedNews} />;
  }
}

export default BookmarksScreen;

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
