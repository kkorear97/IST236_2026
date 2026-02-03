import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { TextInput } from "react-native";
import responses from './magicEightBallResponses';

export default function App() {

  const [modalIsVisible , setModalIsVisible] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [magicResponse, setMagicResponse] = useState("")


  function submitButtonHandler() {
    setModalIsVisible(true);
    if (userQuestion.trim() === "") {
      return;
    }

    const randomIndex= Math.floor(Math.random() * responses.length);
    setMagicResponse(responses[randomIndex]);
  }

  function cancelButtonHandler() {
    setModalIsVisible(false);
    setUserQuestion("");
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleBackground}>
            <Text style={styles.title}>Magic 8-Ball</Text>
          </View>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.question}>Ask Your Question Below</Text>
          <TextInput
          style={styles.questionInput} 
          placeholder="Enter Your Question Here"
          onChangeText={setUserQuestion}
          value={userQuestion}
          />
        </View>

        <View style={styles.submitButtonContainer}>
          <View style={styles.submitButton}>
            <Button title="Submit" color='#1f1d1d' onPress={submitButtonHandler}/>
          </View>
        </View>

        <Modal visible={modalIsVisible} animationType='slide'>
          <SafeAreaView style={styles.modalRoot}>
            <View style={styles.modalQuestionContainer}>
              <Text style={styles.modalQuestion}>{userQuestion}</Text>
            </View>

            <View style={styles.modalAnswerContainer}>
              <Text style={styles.modalAnswer}>{magicResponse}</Text>
            </View>

            <View style={styles.modalCloseButtonContainer}>
              <View style={styles.modalCloseButton}>
                <Button title="Close" color='#1f1d1d' onPress={cancelButtonHandler}/>
              </View>
            </View>
          </SafeAreaView>
        </Modal>


      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#31426b',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleBackground: {
    backgroundColor: 'white',
    padding: 20,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold'
  },
  questionContainer: {
    flex: 1
  },
  question: {
    fontSize: 20,
    backgroundColor: 'white',
    borderWidth: 1
  },
  questionInput: {
    fontSize: 20,
    backgroundColor: 'white',
    borderWidth: 1
  },
  submitButtonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  submitButton: {
  width: 200,
  height: 200
  },
  modalRoot: {
    flex: 1,
    backgroundColor: '#31426b',
    alignItems: 'center'
  },
  modalQuestionContainer: {
    flex: 1,
    justifyContent: 'center'
    
  },
  modalQuestion: {
    fontSize: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    textAlign: 'center'
  },
  modalAnswerContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  modalAnswer: {
    fontSize: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    textAlign: 'center'
  },
  modalCloseButtonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  modalCloseButton: {
  width: 200,

  }
});
