import { useState } from "react";
import { View, Image, Pressable, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import ImageViewModal from "../modal/ImageViewModal";

function DestinationItem(props) {
  //state to control visibility of the image modal
  const [modalIsVisible, setModalIsVisible] = useState(false);

  //open the image modal
  function viewImageHandler() {
    setModalIsVisible(true);
  }

  //close the image modal
  function closeImageHandelr() {
    setModalIsVisible(false);
  }

  return (
    <View
      style={[
        styles.itemContainer,
        //Alternate row colors for a striped effect
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: Colors.primary300 }}
        onPress={viewImageHandler}
      >
        {/* Container for image and destination info */}
        <View style={styles.rowContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.innerRowContainer}>
              <Text style={styles.year}>Year Founded: {props.foundedYear}</Text>
              <Text style={styles.sites}> Cost: ${props.cost}</Text>
            </View>
            <Text style={styles.rating}>Rating: {props.rating} / 5</Text>
          </View>
        </View>
      </Pressable>

      {/* Modal for viewing the full-size image */}
      <ImageViewModal
        isVisible={modalIsVisible}
        imageUrl={props.imageUrl}
        onClose={closeImageHandelr}
      />
    </View>
  );
}

export default DestinationItem;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#CCC",
    paddingHorizontal: 5,
    paddingTop: 3,
    marginBottom: 3,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  rowContainer: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: "25%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 15,
  },
  infoContainer: {
    width: "75%",
    paddingLeft: 20,
  },
  name: {
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 20,
  },
  sites: {
    width: "85%",
    fontSize: 14,
  },
  year: {
    fontSize: 14,
    fontWeight: "bold",
  },
  innerRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    fontSize: 13,
    fontStyle: "italic",
  },
});
