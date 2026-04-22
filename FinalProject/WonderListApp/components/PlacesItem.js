import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function PlacesItem(props) {
  const navigation = useNavigation();

  function selectedPlaceHandler() {
    navigation.navigate("PlaceDetail", {
      placeId: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.placeIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable onPress={selectedPlaceHandler}>
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        {/* Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{props.name}, {props.country}</Text>
          <Text style={styles.rating}>{props.rating}/5</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default PlacesItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 340,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },
  name: {
    fontSize: 35,
    fontFamily: "poppinsItalic",
    paddingBottom: 5,
    textAlign: "center"
  },
  rating: {
    fontSize: 25,
    fontFamily: "poppinsItalic",
    paddingBottom: 5,
  },
});
