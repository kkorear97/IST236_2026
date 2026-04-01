import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect } from "react";
import { NEWSDATA } from "../data/dummy-data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";

function NewsDetailScreen(props) {
  const newsId = props.route.params.newsId;
  const selectedNewsItem = NEWSDATA.find((news) => news.id === newsId);

  const [pressed, setPressed] = useState(false);

  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedNewsItem.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.headline}>
          {selectedNewsItem.headline.toLocaleString()}
        </Text>
        <Text style={styles.meta}>
          {selectedNewsItem.date} | {selectedNewsItem.author} | {selectedNewsItem.agency}
        </Text>

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
