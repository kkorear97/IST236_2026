import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import MovieItem from "./components/MovieItem";

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "Sinners",
      image: require("./assets/images/Sinners.jpg"),
      rating: "10",
    },
    {
      name: "Lord of the Rings \n Fellowship of the Ring",
      image: require("./assets/images/LordRingsFellowshipRing.jpg"),
      rating: "9.8",
    },
    {
      name: "Howl's Moving Castle",
      image: require("./assets/images/HowlsMovingCastle.jpg"),
      rating: "9.5",
    },
    {
      name: "Practical Magic",
      image: require("./assets/images/PracticalMagic.jpg"),
      rating: "8",
    },
    {
      name: "The VVitch",
      image: require("./assets/images/TheVVitch.jpg"),
      rating: "7.5",
    },
    {
      name: "Parasite",
      image: require("./assets/images/Parasite.jpg"),
      rating: "7",
    },
    {
      name: "Halloween",
      image: require("./assets/images/Halloween1978.jpg"),
      rating: "7",
    },
    {
      name: "Midsommar",
      image: require("./assets/images/Midsommar.jpg"),
      rating: "6",
    },
    {
      name: "Wind River",
      image: require("./assets/images/WindRiver.jpg"),
      rating: "5",
    },
    {
      name: "Caddo Lake",
      image: require("./assets/images/CaddoLake.jpg"),
      rating: "4",
    },
  ]);
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Top 10 Movies</Text>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={movieItems}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <MovieItem
                name={item.name}
                image={item.image}
                rating={item.rating}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#2985a9",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  },
  titleContainer: {
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 3,
    backgroundColor: "white"
  },
  title: {
    fontSize: 35,
    fontWeight: "bold"
  },
  listContainer: {
    flex: 8,
    width: "80%",
  }
});
