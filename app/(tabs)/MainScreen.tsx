import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// cHANGE THIS ARRAY TO ADD YOUR QUESTIONS
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Rome"]
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Jupiter", "Saturn", "Uranus", "Neptune"]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Caravaggio"]
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: ["Au", "Ag", "Hg", "Pb"]
  },
  {
    question: "What is the smallest country in the world?",
    answers: ["Vatican City", "Monaco", "Nauru", "Tuvalu"]
  },
  {
    question: "Who wrote Romeo and Juliet?",
    answers: ["William Shakespeare", "Jane Austen", "Charles Dickens", "J.K. Rowling"]
  },
  {
    question: "What is the largest mammal on Earth?",
    answers: ["Blue whale", "Fin whale", "Humpback whale", "Sperm whale"]
  },
  {
    question: "What is the highest mountain in the solar system?",
    answers: ["Olympus Mons", "Mount Everest", "Kilimanjaro", "Mauna Kea"]
  },
  {
    question: "Who was the first president of the United States?",
    answers: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Franklin D. Roosevelt"]
  },
  {
    question: "What is the farthest human-made object from Earth?",
    answers: ["Voyager 1", "Voyager 2", "Pioneer 10", "New Horizons"]
  }
];


const shuffleArray = (array: string[]) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MainScreen :React.FC= () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const shuffledAnswers = shuffleArray(currentQuestion.answers);

  const handleAnswerPress = (answer: string) => {
    if (selectedAnswer === null) {
      const isCorrect = answer === quizQuestions[currentQuestionIndex]?.answers[0];
      if (isCorrect) {
        setScore(score + 1);
      }
      setSelectedAnswer(answer);
  
      setTimeout(() => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedAnswer(null);
        } else {
          setQuizFinished(true);
        }
      }, 10); //DELAY
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>Quiz Finished!</Text>
        <Text style={styles.resultText}>Your score: {score} out of {quizQuestions.length}</Text>
        <TouchableOpacity style={styles.restartButton} onPress={handleRestartQuiz}>
          <Text style={styles.restartButtonText}>Restart Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!currentQuestion) {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      {shuffledAnswers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.answerButton, selectedAnswer === answer ? styles.selectedAnswer : {}]}
          onPress={() => handleAnswerPress(answer)}
          disabled={selectedAnswer !== null}
        >
          <Text style={styles.answerText}>{answer}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent:'center',
    backgroundColor: '#fff',
  },
  question: {
    textAlign:'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  answerButton: {
   
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 10,
  },
  selectedAnswer: {
    backgroundColor: '#c0c0c0',
  },
  answerText: {
    fontSize: 16,
  },
  resultText: {
    fontSize: 24,
    textAlign:'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  restartButton: {
    marginTop:50,
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
  },
  restartButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default MainScreen;
