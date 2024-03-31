import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import Lesson from "./src/components/Lesson";
import Modal from "react-native-modal";

export default function App() {
  const [isLessonVisible, setLessonVisible] = useState(false);

  const toggleLessonModal = () => {
    setLessonVisible(!isLessonVisible);
  };

  return (
    <SafeAreaView className="flex-1 items-center bg-white">
      <TouchableOpacity onPress={toggleLessonModal}>
        <Text>Show Lesson</Text>
      </TouchableOpacity>
      <Modal animationType="slide" isVisible={isLessonVisible}>
        <SafeAreaView className="flex-1">
          <TouchableOpacity onPress={toggleLessonModal}>
            <Text>Close</Text>
          </TouchableOpacity>
          <Lesson />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}
