import { View, StyleSheet, Image, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import Header from "../components/Header";

function GameOverScreen(props) {
  //set safe area screen boundaries
  const inset = useSafeAreaInsets();

  const playerScore = 21;
  const computerScore = 21;

  let titleText = <Title>It's a Tie</Title>;

  if (
    (playerScore <= 21 && playerScore > computerScore) ||
    (playerScore <= 21 && computerScore > 21)
  ) {
    titleText = <Title>Player Wins!</Title>;
  }
  if (
    (computerScore <= 21 && computerScore > playerScore) ||
    (computerScore <= 21 && playerScore > 21)
  ) {
    titleText = <Title>Computer Wins!</Title>;
  }

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: inset.top,
          paddingBottom: inset.bottom,
          paddingLeft: inset.left,
          paddingRight: inset.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>{titleText}</View>

      <View style={styles.scoreContainer}>
        <Header>Computer Score:</Header>
        <Text style={styles.scoreText}>{computerScore}</Text>
      </View>

      <View style={styles.scoreContainer}>
        <Header>Player Score:</Header>
        <Text style={styles.scoreText}>{playerScore}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Play Now</NavButton>
      </View>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  scoreContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  scoreText: {
    fontSize: 50,
    color: Colors.primary500
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
