import { View, Text, FlatList } from "react-native";
import { COUNTRIES } from "../data/dummy-data";
import StateGridTile from "../components/CountryGridTile";

function HomeScreen(props) {
  //function to render each country item in the flatlist
  function renderCountryItem(itemData) {
    //function called when a country title is pressed
    function pressHandler() {
      //Navigate to DestinationOverviewScreen and pass the selected country ID
      props.navigation.navigate("DestinationOverviewScreen", {
        //Pass coutnry ID as route param
        countryId: itemData.item.id,
      });
    }

    //Return a singel country title component
    return (
      <StateGridTile
        //Country name displayed on tile
        name={itemData.item.name}
        //Background gradient color for tile
        color={itemData.item.color}
        //Callback when tile is pressed
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      {/* FlatList efficiently renders a scrollable grid of country tiles */}
      <FlatList
        //Array of countries to render
        data={COUNTRIES}
        keyExtractor={(item) => {
          //Unique key for each item
          return item.id;
        }}
        //Function that renders each item
        renderItem={renderCountryItem}
        //Display items in 2 columns
        numColumns={2}
      />
    </View>
  );
}

export default HomeScreen;
