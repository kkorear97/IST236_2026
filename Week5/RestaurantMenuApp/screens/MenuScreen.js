import { View, StyleSheet, Text, FlatList } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import MenuItem from "../components/MenuItems";

function MenuScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  //All of the menu items that will show in a flat list
  const [menuItems, setMenuItems] = useState([
    {
      name: "Skillet Cornbread",
      image: require("../assets/images/cornbread.jpg"),
      price: "$9.00",
      id: 1,
    },
    {
      name: "Crab Cake Appetizer",
      image: require("../assets/images/crabcake.jpg"),
      price: "MKT",
      id: 2,
    },
    {
      name: "Shrimp and Grits",
      image: require("../assets/images/shrimpandgrits.jpeg"),
      price: "$26.00",
      id: 3,
    },
    {
      name: "Spinach Salad",
      image: require("../assets/images/spinachsalad.jpeg"),
      price: "$14.00",
      id: 4,
    },
    {
      name: "Peanut Butter Pie",
      image: require("../assets/images/peanutbutterpie.jpg"),
      price: "$10.00",
      id: 5,
    },
  ]);

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Menu</Title>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <MenuItem
                name={itemData.item.name}
                image={itemData.item.image}
                price={itemData.item.price}
              />
            );
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Home Page</NavButton>
      </View>
    </View>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: 400,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    width: "95%",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20,
  },
});
