import { View, StyleSheet, FlatList, useWindowDimensions } from "react-native";
import PlacesItem from "./PlacesItem";

function Place(props) {
  const { width, height } = useWindowDimensions();

  const isLandscape = width > height;
  const numColumns = isLandscape || width > 600 ? 2 : 1;

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
    return (
      <View style={styles.itemWrapper}>
        <PlacesItem {...placesItemProps} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        //Important for layout switching
        key={numColumns}
        numColumns={numColumns}
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
    opacity: 0.1,
  },
  itemWrapper: {
    flex: 1,
    margin: 12,
    minWidth: 0,
  },
});
