import { View, StyleSheet, FlatList } from "react-native";
import PlacesItem from "./PlacesItem";

function Place(props) {
  function renderPlacesItem(itemData) {
    const placesItemProps = {
      id: itemData.item.id,
      name: itemData.item.name,
      country: itemData.item.country,
      region: itemData.item.region,
      rating: itemData.item.rating,
      imageUrl: itemData.item.imageUrl,
      description: itemData.item.description,
      mapLink: itemData.item.mapLink,
      placeIndex: itemData.index,
    };
    return <PlacesItem {...placesItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderPlacesItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Place;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backgroundImage: {
    opacity: .1,
  },
});
