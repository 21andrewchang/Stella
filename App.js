import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import LessonView from "./src/components/LessonView";
import Modal from "react-native-modal";

export default function App() {
  const [isLessonVisible, setLessonVisible] = useState(false);
  const [food, setFood] = useState(false);
  const [friends, setFriends] = useState(false);

  const toggleLessonModal = () => {
    setLessonVisible(!isLessonVisible);
  };
  const selectFriends = () => {
    setFriends(!friends);
  };
  const selectFood = () => {
    setFood(!food);
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-black">
      <Modal
        animationType="slide"
        isVisible={isLessonVisible}
        backdropOpacity={1}
      >
        <View className="flex-1">
          <LessonView toggleLessonModal={toggleLessonModal} />
        </View>
      </Modal>
      <TouchableOpacity
        onPress={selectFood}
        className={`my-4 w-60 rounded-lg ${food ? "bg-white/60" : "bg-white"}`}
      >
        <Text className="p-4 text-center text-black">🍙 Food</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={selectFriends}
        className={`my-4 w-60 rounded-lg ${friends ? "bg-white/60" : "bg-white"}`}
      >
        <Text className="p-4 text-center text-black">💬 Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="my-4 w-60 bg-white rounded-lg"
        onPress={toggleLessonModal}
      >
        <Text className="p-4 text-center text-black">Show Lesson</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
