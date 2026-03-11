import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
  Pressable,
  Platform,
  Modal,
  Button,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { useState } from "react";
import Title from "../components/Title";
import Colors from "../constants/colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import WheelPicker from "react-native-wheely";
import NavButton from "../components/NavButton";

function HomeScreen() {
  //Gets safe area spacing calues for top, bottom, left and right
  const insets = useSafeAreaInsets();

  //Stores the selected checkin date
  const [checkIn, setCheckIn] = useState(new Date());
  //Controls whether the check-in picker is visible
  const [showCheckIn, setShowCheckIn] = useState(false);

  //Show checkin date picker
  function showCheckInPicker() {
    setShowCheckIn(true);
  }

  //Hide check-in date picker
  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  //Handles the date change from the picker
  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate;
    //On Android the picker closes automatically
    if (Platform.OS === "android") {
      hideCheckInPicker(true);
    }
    //Updaes the checkin date
    setCheckIn(currentDate);
  }

  //Stores the selected check-out date
  const [checkOut, setCheckOut] = useState(new Date());
  //Controls visibility of check-out picker
  const [showCheckOut, setShowCheckOut] = useState(false);

  function showCheckOutPicker() {
    setShowCheckOut(true);
  }

  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  //Handles teh date change for checkout
  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckOutPicker(true);
    }
    setCheckOut(currentDate);
  }

  //Stores rescervation summary text
  const [results, setResults] = useState("");

  //Creates a reservation summary when user presses Reserve button
  function onReserveHandler() {
    let res = `Check In:\t\t${checkIn.toDateString()}\n`;
    res = res + `Check Out:\t\t${checkOut.toDateString()}\n`;
    res = res + `Number of Guests:\t\t${guestCounts[numGuests]}\n`;
    res = res + `Number of Camps:\t\t${campCounts[numCamps]}\n`;
    setResults(res);
  }

  //Gets current scren width and height
  const { width, height } = useWindowDimensions();

  //Dynamically scale lavel text based on screen width
  const dateLabelFlex = {
    fontSize: width * 0.1,
  };

  //Dynamically scale value text
  const dateTextFlex = {
    fontSize: width * 0.05,
  };

  //Possible guest count options
  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  //Stores index of selected guest number
  const [numGuests, setNumGuests] = useState(0);
  //Conrtols guest picker modal visibility
  const [showNumGuests, setShowNumGuests] = useState(false);

  function showNumGuestsPicker() {
    setShowNumGuests(true);
  }

  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }

  //Updates guest count when wheel picker changes
  function onChangeNumGuests(index) {
    setNumGuests(index);
  }

  //Possible campsite counts
  const campCounts = [1, 2, 3, 4, 5];
  //Stores selected campsite index
  const [numCamps, setNumCamps] = useState(0);
  //Controls campsite picker modal visibility
  const [showNumCamps, setShowNumCamps] = useState(false);

  function showNumCampsPicker() {
    setShowNumCamps(true);
  }

  function hideNumCampsPicker() {
    setShowNumCamps(false);
  }
  //Updates campsite count from wheel picker
  function onChangeNumCamps(index) {
    setNumCamps(index);
  }

  return (
    //Background image for the entire screen
    <ImageBackground
      source={require("../assets/images/Blueridge.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      {/*Main container with safe area padding*/}
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
        {/* Scrollable content area */}
        <ScrollView style={styles.scrollContainer}>
          {/*Title of Camp*/}
          <View style={styles.titleContainer}>
            <Title>Fern & Firelight</Title>
          </View>
          {/* Check-in and Check-out date display */}
          <View style={styles.rowContainer}>
            {/* Check-in date section */}
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
              {/* Press to open date picker */}
              <Pressable onPress={showCheckInPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>

            {/* Check-out date section */}
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
              <Pressable onPress={showCheckOutPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkOut.toDateString()}
                </Text>
              </Pressable>
            </View>
          </View>
          {/* Date picker logic for Android and iOS */}
          <View>
            {/* Android check-in picker */}
            {showCheckIn && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckInAndroid"
                value={checkIn}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckIn}
              />
            )}
            {/* iOS check-in picker modal */}
            {showCheckIn && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckInIOS"
                      value={checkIn}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckIn}
                    />
                    <Button title="Confirm" onPress={hideCheckInPicker} />
                  </View>
                </View>
              </Modal>
            )}

            {/* Android check-out picker */}
            {showCheckOut && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckOutAndroid"
                value={checkOut}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckOut}
              />
            )}
            {/* iOS check-out picker modal */}
            {showCheckOut && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckOutIOS"
                      value={checkOut}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckOut}
                    />
                    <Button title="Confirm" onPress={hideCheckOutPicker} />
                  </View>
                </View>
              </Modal>
            )}
          </View>

          {/* Guest selection */}
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of Guests:
            </Text>
            {/* Press to open guest picker */}
            <Pressable onPress={showNumGuestsPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {guestCounts[numGuests]}
                </Text>
              </View>
            </Pressable>

            {/* Guest picker modal */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumGuests}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number Of Guests:
                  </Text>
                  {/* Wheel picker for guest count */}
                  <WheelPicker
                    selectedIndex={numGuests}
                    options={guestCounts}
                    onChange={onChangeNumGuests}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumGuestsPicker} />
                </View>
              </View>
            </Modal>
          </View>

          {/* Campsite selection */}
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>
              Number of{"\n"}Campsites:
            </Text>
            <Pressable onPress={showNumCampsPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {campCounts[numCamps]}
                </Text>
              </View>
            </Pressable>

            {/* Campsite picker modal */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumCamps}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number Of Camps:
                  </Text>
                  {/* Wheel picker for campsite count */}
                  <WheelPicker
                    selectedIndex={numCamps}
                    options={campCounts}
                    onChange={onChangeNumCamps}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumCampsPicker} />
                </View>
              </View>
            </Modal>
          </View>

          {/* Reserve button */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
          </View>

          {/* Reservation results display */}
          <View style={styles.resultsContainer}>
            <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    opacity: 0.3,
  },
  titleContainer: {
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    backgroundColor: Colors.primary300,
  },
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "100%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
  },
  dateContainer: {
    backgroundColor: Colors.primary300o5,
    padding: 10,
  },
  dateLabel: {
    fontSize: 100,
    color: Colors.primary500,
    fontFamily: "hotel",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  dateText: {
    color: Colors.primary800,
    fontSize: 20,
    fontWeight: "bold",
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.primary300,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    alignItems: "center",
  },
  results: {
    textAlign: "center",
    color: Colors.primary500,
    fontFamily: "blueridge",
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
});
