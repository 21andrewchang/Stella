import React from "react";
import Lesson from "./Lesson";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

const LessonView = ({ toggleLessonModal }) => {
  const closeButton = require("../../assets/close.png");

  const lesson1 = {
    question: "Question 1",
    options: [
      { text: "test", id: 1, correct: true },
      { text: "hello????", id: 2, correct: false },
    ],
  };
  const lesson2 = {
    question: "Question 2",
    options: [
      { text: "test", id: 1, correct: true },
      { text: "hello????", id: 2, correct: false },
    ],
  };
  const lesson3 = {
    question: "Question 3",
    options: [
      { text: "test", id: 1, correct: true },
      { text: "hello????", id: 2, correct: false },
    ],
  };
  const lessons = [lesson1, lesson2, lesson3];
  const [currentLesson, changeLesson] = useState(0);
  function selectAnswer(answer) {
    if (answer) {
      console.log("correct!");
    } else {
      console.log("wrong dumbass!");
    }
    setTimeout(() => {
      if (currentLesson < lessons.length - 1) {
        changeLesson(currentLesson + 1);
      } else {
        toggleLessonModal();
      }
    }, 1000); // 2000 milliseconds = 2 seconds
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity onPress={toggleLessonModal}>
          <Image
            source={closeButton}
            resizeMode="contain"
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <Lesson
          lessonContent={lessons[currentLesson]}
          selectAnswer={selectAnswer}
        />
      </View>
    </View>
  );
};

export default LessonView;
