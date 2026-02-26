import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import Colors from "../constants/colors";
import RecipeItem from "../components/RecipeItems";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import RecipeView from "../modals/RecipeView";

function RecipeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  //Controls whether the modal is visible
  const [modalIsVisible, setModalIsVisible] = useState(false);
  //Stores the title of the recipe being veiwed in the modal
  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  //Stores the ingredients of the recipe being viewed
  const [modalRecipeText, setModalRecipeText] = useState("");

  //Opens the modal and sets the selected recipe's data
  function recipeViewHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }

  //Closes teh recipe modal
  function closeRecipeViewHandler() {
    setModalIsVisible(false);
  }

  return (
    <View
      // Main container with safe area padding applied
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
      {/* Screen Title */}
      <View style={styles.titleContainer}>
        <Title>Recipes</Title>
      </View>

      {/* Recipe List Section */}
      <View style={styles.itemContainer}>
        <FlatList
          //data source comes form App.js via props
          data={props.currentRecipes}
          //unique key for each item
          keyExtractor={(item, index) => {
            return item.id;
          }}
          //removes the bounce effect when scrolling
          alwaysBounceVertical={false}
          //Defines how each item should redner
          renderItem={(itemData) => {
            return (
              <RecipeItem
                id={itemData.item.id}
                title={itemData.item.title}
                //Open modal and passes recipe title and text
                onView={recipeViewHandler.bind(
                  this,
                  itemData.item.title,
                  itemData.item.text,
                )}
                //Deletes selected recipe
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>

      {/* Recipe Modal */}
      <RecipeView
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeViewHandler}
      />

      {/* Navigation Buttons */}
      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}>
          {/* Navigates to Add Recipe screen */}
          <NavButton onNext={props.onAdd}>Add New Recipe</NavButton>
        </View>
        <View style={styles.navButtonContainer}>
          <View style={styles.navButton}>
            {/* Navigates back to Home screen */}
            <NavButton onNext={props.onHome}>Home</NavButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default RecipeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  itemContainer: {
    flex: 6,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    resizeMode: "stretch",
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 10,
  },
});
