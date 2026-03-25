import { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { DESTINATION, COUNTRIES } from "../data/dummy-data";
import DestinationItem from "../components/DestinationItem";

function DestinationOverviewScreen(props) {
  //Gets the country ID passed as a route parameter
  const countryId = props.route.params.countryId;

  //Update the header title dyamically based on selected country
  useLayoutEffect(() => {
    const country = COUNTRIES.find((country) => country.id === countryId);
    //Set the screem title to the country name fallback to null if not found
    props.navigation.setOptions({ title: country ? country.name : null });
  }, [countryId, props.navigation]);

  //Filter the destination list to only show destinations for this country
  const displayedDestination = DESTINATION.filter((destinationItem) => {
    return destinationItem.countryId === countryId;
  });

  //Function to render each destination in the flatlist
  function renderDestinationItem(itemData) {
    //Prepare props to pass to destinationItem compnent
    const destinationItemProps = {
      name: itemData.item.name,
      imageUrl: itemData.item.imageUrl,
      cost: itemData.item.cost,
      foundedYear: itemData.item.foundedYear,
      rating: itemData.item.rating,
      listIndex: itemData.index,
    };
    // Render the destination item
    return <DestinationItem {...destinationItemProps} />;
  }

  return (
    <View style={styles.container}>
       {/* FlatList renders all destinations for the selected country */}
      <FlatList
        data={displayedDestination}
        keyExtractor={(item) => item.id}
        renderItem={renderDestinationItem}
      />
    </View>
  );
}

export default DestinationOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
