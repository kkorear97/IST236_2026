import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Header from "../components/Header";
import Cards from "../constants/cards";
import { useEffect, useState } from "react";

function generateRandomBetween(min, max, exclude) {
  const cardKeys = Object.keys(Cards);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  const cardName = cardKeys[rndNum];

  if (exclude.includes(cardName)) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return cardName;
  }
}

function GameScreen(props) {
  //set safe area screen boundaries
  const inset = useSafeAreaInsets();

  // set state variables for drawn cards
  const [drawnCards, setDrawnCards] = useState([]);
  const [userHand, setUserHand] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [numUserHand, setNumUserHand] = useState(0);
  const [numComputerHand, setNumComputerHand] = useState(0);
  const [computerHand, setComputerHand] = useState([]);
  const [computerScore, setComputerScore] = useState(0);
  const [userFinished, setUserFinished] = useState(false);

  function drawUserCardHandler() {
    //Generate random card name
    let userCard = generateRandomBetween(0, 52, drawnCards);

    //Set the card as drawn from the deck
    setDrawnCards((prevDrawnCards) => {
      return [userCard, ...prevDrawnCards];
    });

    //Set the card in the user hand
    setUserHand((prevUserCards) => {
      return [userCard, ...prevUserCards];
    });

    //Set the number of cards in players hand
    setNumUserHand(userHand.length);

    //Calculate the new score for the user to see if the card will make the player bust
    if (Cards[userCard].value + userScore > 21) {
      //If the new card will make the player bust, check to see if there are any aces in the users hand
      //Ace of clubs
      if (userHand.includes("aceClubs")) {
        //Change aceClubs to lowAceClubs
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceClubs")] = "lowAceClubs";
          return newUserCards;
        });

        //Change User Score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
        //Ace of Diamonds
      } else if (userHand.includes("aceDiamonds")) {
        //change aceDiamonds to lowAceDiamonds
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceDiamonds")] = "lowAceDiamonds";
          return newUserCards;
        });

        //Change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
        //Ace of Hearts
      } else if (userHand.includes("aceHearts")) {
        //change aceHearts to lowAceHearts
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceHearts")] = "lowAceHearts";
          return newUserCards;
        });

        //Change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
        //Ace of Spades
      } else if (userHand.includes("aceSpades")) {
        //change aceSpades to lowAceSpades
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceSpades")] = "lowAceSpades";
          return newUserCards;
        });

        //Change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
        //No aces
      } else {
        //If player has no aces then add score and they bust
        setUserScore((prevUserScore) => {
          return prevUserScore + Cards[userCard].value;
        });
      }
    } else {
      //if the player won't bust add teh score like normal
      setUserScore((prevUserScore) => {
        return prevUserScore + Cards[userCard].value;
      });
    }
  }

  function drawComputerCardHandler() {
    //Generate random card name
    let computerCard = generateRandomBetween(0, 52, drawnCards);

    //Set the card as drawn from the deck
    setDrawnCards((prevDrawnCards) => {
      return [computerCard, ...prevDrawnCards];
    });

    //Set the card in the computers hand
    setComputerHand((prevComputerCards) => {
      return [computerCard, ...prevComputerCards];
    });
    //Set the number of cards in computers hand
    setNumComputerHand(computerHand.length);

    //Calculate the new score for the computer to see if the card will make the player bust
    if (Cards[computerCard].value + computerScore > 21) {
      //If the new card will make the player bust, check to see if there are any aces in the computers hand
      //Ace of clubs
      if (computerHand.includes("aceClubs")) {
        //Change aceClubs to lowAceClubs
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceClubs")] =
            "lowAceClubs";
          return newComputerCards;
        });

        //Change Computer Score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
        //Ace of Diamonds
      } else if (computerHand.includes("aceDiamonds")) {
        //change aceDiamonds to lowAceDiamonds
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceDiamonds")] =
            "lowAceDiamonds";
          return newComputerCards;
        });

        //Change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
        //Ace of Hearts
      } else if (computerHand.includes("aceHearts")) {
        //change aceHearts to lowAceHearts
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceHearts")] =
            "lowAceHeartss";
          return newComputerCards;
        });

        //Change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
        //Ace of Spades
      } else if (computerHand.includes("aceSpades")) {
        //change aceSpades to lowAceSpades
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceSpades")] =
            "lowAceSpades";
          return newComputerCards;
        });

        //Change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
        //No aces
      } else {
        //If computer has no aces then add score and they bust
        setComputerScore((prevComputerScore) => {
          return prevComputerScore + Cards[computerCard].value;
        });
      }
    } else {
      //if the computer won't bust add teh score like normal
      setComputerScore((prevComputerScore) => {
        return prevComputerScore + Cards[computerCard].value;
      });
    }
  }

  //function that handles the user finishing the game and adding cards to computers hand
  function stayHandler() {
    //Set user finished to true
    setUserFinished(true);

    //Attempt to add up to 10 cards to the computers hand
    if (computerScore <= 16) {
      ///Wait to draw handler to complete before contiuning the loop
      drawComputerCardHandler();
    }
  }

  useEffect(() => {
    setUserHand([]);
    setComputerHand([]);
    setDrawnCards([]);
    setNumUserHand(0);
    setUserScore(0);
    setComputerScore(0);
    setUserFinished(false);

    //Draw inital two cards for user and computer
    drawComputerCardHandler();
    drawComputerCardHandler();
    drawUserCardHandler();
    drawUserCardHandler();
  }, []); // Since no dependencies only resoloves when GameScreen is added to UI

  //Hook that will trigger when the user score changes to check to see if the user busts
  useEffect(() => {
    if (userScore > 21) {
      props.onSetUserScore(userScore);
      props.onSetComputerScore(computerScore);
      props.onNext();
    }
  }, [userScore]); //Dependent on userScore and will activate when userScore changes

  useEffect(() => {
    if (userFinished === true && computerScore > 16) {
      props.onSetUserScore(userScore);
      props.onSetComputerScore(computerScore);
      props.onNext();
    }
  }, [userFinished, computerScore]);

  return (
    <ImageBackground
      source={require("../assets/images/blackjack_felt.jpg")}
      resize="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
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
        <View style={styles.headerContainer}>
          <Header>Computer's Hand</Header>
        </View>

        <View style={styles.computerImageContainer}>
          <Image
            style={styles.computerImage}
            source={require("../assets/images/cardback1.png")}
          />
          <View style={{marginLeft: -10}}>
            <Image
              style={styles.computerImage}
              source={
                computerHand.length === 0
                  ? require("../assets/images/cardback1.png")
                  : Cards[computerHand[1]].picture
              }
            />
          </View>
        </View>

        <View style={styles.headerContainer}>
          <Header>Player's Hand</Header>
        </View>

        <View style={styles.playerImageContainer}>
          {userHand.map((index) => {
            return (
              <Image
                style={[
                  styles.playerImage,
                  { marginLeft: -10 * (numUserHand + 1) },
                ]}
                key={index}
                source={
                  userHand.length === 0
                    ? require("../assets/images/cardback1.png")
                    : Cards[index].picture
                }
              />
            );
          })}
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <NavButton onPress={drawUserCardHandler}>Hit Me!</NavButton>
          </View>
          <View style={styles.buttonContainer}>
            <NavButton onPress={stayHandler}>Stay!</NavButton>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.4,
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  computerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  computerImage: {
    height: 150,
    width: 100,
    resizeMode: "contain",
  },
  playerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  playerImage: {
    height: 150,
    width: 100,
    resizeMode: "contain",
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    marginHorizontal: 10,
    marginBottom: 25,
  },
});
