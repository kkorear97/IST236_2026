import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function NewsItem({ id, headline, date, author, agency, imageUrl, listIndex }) {
  const navigation = useNavigation();

  function selectedNewsItemHandler() {
    navigation.navigate("NewsDetail", {
      newsId: id,
    });
  }

  return (
    <Pressable
      style={({ pressed }) => [
        styles.itemContainer,
        { backgroundColor: listIndex % 2 === 0 ? "#1a1a1a" : "#222" },
        pressed && styles.pressed,
      ]}
      onPress={selectedNewsItemHandler}
    >
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.infoContainer}>
        <Text style={styles.headline}>{headline}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.authorAgency}>
          {author} | {agency}
        </Text>
      </View>
    </Pressable>
  );
}

export default NewsItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.75,
  },
  image: {
    width: "100%",
    height: 180,
  },
  infoContainer: {
    padding: 12,
  },
  headline: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 4,
  },
  authorAgency: {
    fontSize: 14,
    color: "#ccc",
  },
});