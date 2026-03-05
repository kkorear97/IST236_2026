import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

function OrderReviewScreen(props) {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[
        Colors.accent800,
        Colors.accent200,
        Colors.accent800,
        Colors.accent200,
      ]}
      style={styles.rootContainer}
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
          <Title>Order Review</Title>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {/* Repair Time */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Repair Time:</Text>
            <Text style={styles.itemText}>
              {props.repairTimeRadioButtons[props.repairTimeId]?.label} ($
              {props.repairTimeRadioButtons[props.repairTimeId]?.price})
            </Text>
          </View>

          {/* Services */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Services:</Text>
            {props.services
              .filter((service) => service.value)
              .map((service) => (
                <Text key={service.id} style={styles.itemText}>
                  {service.name} (${service.price})
                </Text>
              ))}
          </View>

          {/* Newsletter */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Newsletter Signup:</Text>
            <Text style={styles.itemText}>
              {props.newsletter ? "Yes ($0)" : "No ($0)"}
            </Text>
          </View>

          {/* Rental Membership */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Rental Membership:</Text>
            <Text style={styles.itemText}>
              {props.rentalMembership ? "Yes ($100)" : "No ($0)"}
            </Text>
          </View>

          {/* Totals */}
          <View style={styles.section}>
            <Text style={styles.sectionHeader}>Subtotal:</Text>
            <Text style={styles.itemText}>${props.subtotal.toFixed(2)}</Text>

            <Text style={styles.sectionHeader}>Tax (6%):</Text>
            <Text style={styles.itemText}>${props.tax.toFixed(2)}</Text>

            <Text style={styles.sectionHeader}>Total:</Text>
            <Text style={styles.totalText}>${props.total.toFixed(2)}</Text>
          </View>

          {/* Return Home Button */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onReturnHome}>Home</NavButton>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

export default OrderReviewScreen;

const styles = StyleSheet.create({
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
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 15,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary500,
  },
  sectionHeader: {
    fontSize: 22,
    color: Colors.primary500,
    fontWeight: "bold",
    marginBottom: 5,
  },
  itemText: {
    fontSize: 18,
    color: Colors.primary500,
    marginLeft: 10,
  },
  totalText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary800,
    marginLeft: 10,
    marginTop: 5,
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
});
