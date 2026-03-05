import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { useState, useMemo } from "react";
import { useFonts } from "expo-font";
import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    bikeFont: require("./assets/fonts/RacingSansOne-Regular.ttf"),
  });

  const [screen, setScreen] = useState("home");

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    [],
  );

  const [repairTimeId, setRepairTimeId] = useState(0);
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  if (!fontsLoaded) {
    return null;
  }

  function submitOrder() {
    let sum = 0;

    // Add repair time cost
    const selectedRepair = repairTimeRadioButtons[repairTimeId];
    if (selectedRepair) sum += selectedRepair.price;

    // Add selected services
    services.forEach((service) => {
      if (service.value) sum += service.price;
    });

    // Add rental membership
    if (rentalMembership) sum += 100;

    // Calculate tax (6%)
    const taxAmount = sum * 0.06;
    const finalTotal = sum + taxAmount;

    // Update totals in state
    setSubtotal(sum);
    setTax(taxAmount);
    setTotal(finalTotal);

    // Switch to review screen
    setScreen("review");
  }

function returnHome() {
  setServices((prev) => prev.map((service) => ({ ...service, value: false })));
  setNewsletter(false);
  setRentalMembership(false);
  setRepairTimeId(0); // reset repair time
  setScreen("home");
}

  return (
    <SafeAreaProvider>
      {screen === "home" ? (
        <HomeScreen
          repairTimeRadioButtons={repairTimeRadioButtons}
          repairTimeId={repairTimeId}
          setRepairTimeId={setRepairTimeId}
          services={services}
          setServices={setServices}
          newsletter={newsletter}
          setNewsletter={setNewsletter}
          rentalMembership={rentalMembership}
          setRentalMembership={setRentalMembership}
          onSubmit={submitOrder}
        />
      ) : (
        <OrderReviewScreen
          services={services}
          repairTimeRadioButtons={repairTimeRadioButtons}
          repairTimeId={repairTimeId}
          newsletter={newsletter}
          rentalMembership={rentalMembership}
          subtotal={subtotal}
          tax={tax}
          total={total}
          setScreen={setScreen}
          setServices={setServices}
          setNewsletter={setNewsletter}
          setRentalMembership={setRentalMembership}
          onReturnHome={returnHome}
        />
      )}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
