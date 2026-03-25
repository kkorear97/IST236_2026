import { Modal, View, Button, Image, StyleSheet } from "react-native";

//Modal compnent to show a full-size image
function ImageViewModal(props) {
  return (
    <View style={styles.container}>
      <Modal
        //Controls visibility of the modal
        visible={props.isVisible}
        //Slide animation when opening/closing
        animationType="slide"
        //Modal background is not transparent
        transparent={false}
      >
        <View style={styles.modalContainer}>
          {/* Full-size image */}
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          {/* Button to close the modal and return to destinations */}
          <Button title="Return to Destinations" onPress={props.onClose} />
        </View>
      </Modal>
    </View>
  );
}

export default ImageViewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(11, 57, 80)",
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
});
