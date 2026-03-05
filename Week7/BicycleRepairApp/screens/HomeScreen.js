import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Switch,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import RadioGroup from "react-native-radio-buttons-group";
import Colors from "../constants/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import NavButton from "../components/NavButton";

function HomeScreen(props) {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require("../assets/images/bicyclewall.jpeg")}
      style={styles.background}
      imageStyle={{ opacity: 0.4 }}
    >
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
          <Title>Bike Repair Shop</Title>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {/* Repair Times */}
          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Repair Times:</Text>
            <RadioGroup
              radioButtons={props.repairTimeRadioButtons}
              selectedId={props.repairTimeId.toString()}
              onPress={props.setRepairTimeId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabels}
            />
          </View>

          {/* Service Options */}
          <View style={styles.rowContainer}>
            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkBoxHeader}>Services:</Text>
              <View style={styles.checkBoxSubContainer}>
                {props.services.map((service) => (
                  <BouncyCheckbox
                    key={service.id}
                    text={`${service.name} ($${service.price})`}
                    isChecked={service.value}
                    fillColor={Colors.primary500}
                    textStyle={{
                      textDecorationLine: "none",
                      color: Colors.primary500,
                    }}
                    innerIconStyle={{
                      borderRadius: 0,
                      borderColor: Colors.primary500,
                    }}
                    iconStyle={{ borderRadius: 0 }}
                    style={{ padding: 2 }}
                    onPress={() =>
                      props.setServices((prev) =>
                        prev.map((item) =>
                          item.id === service.id
                            ? { ...item, value: !item.value }
                            : item,
                        ),
                      )
                    }
                  />
                ))}
              </View>
            </View>
          </View>

          {/* Newsletter & Rental Membership Switches */}
          <View style={styles.rowContainer}>
            <View style={styles.addOnsContainer}>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Newsletter Signup ($0)</Text>
                <Switch
                  value={props.newsletter}
                  onValueChange={props.setNewsletter}
                  thumbColor={
                    props.newsletter ? Colors.primary500 : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.primary800,
                  }}
                />
              </View>

              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Rental Membership ($100)</Text>
                <Switch
                  value={props.rentalMembership}
                  onValueChange={props.setRentalMembership}
                  thumbColor={
                    props.rentalMembership
                      ? Colors.primary500
                      : Colors.primary800
                  }
                  trackColor={{
                    false: Colors.primary500,
                    true: Colors.primary800,
                  }}
                />
              </View>
            </View>
          </View>

          {/* Submit Button */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onSubmit}>Submit Order</NavButton>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#0f0901"
  },
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    paddingHorizontal: 30,
    paddingVertical: 5,
    alignItems: "center",
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.primary500,
    marginBottom: 5,
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabels: {
    fontSize: 15,
    color: Colors.primary500,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  checkBoxContainer: {
    width: "100%",
  },
  checkBoxHeader: {
    fontSize: 20,
    color: Colors.primary500,
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  addOnsContainer: {
    justifyContent: "space-between",
    width: "100%",
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  addOnsLabel: {
    color: Colors.primary500,
    fontSize: 20,
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
});
