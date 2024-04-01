import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Lesson = ({ lessonContent, selectAnswer }) => {
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
        <View className="flex-1 justify-center bg-white rounded-lg">
          <Text style={{ padding: 10, textAlign: "center", color: "black" }}>
            {lessonContent.question}
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        {lessonContent.options.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={() => selectAnswer(option.correct)}
            className="my-4 bg-white rounded-lg"
          >
            <Text className="p-8 text-center">{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Lesson;
