import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

let option1 = "test";
let option2 = "test";
let option3 = "test";
let option4 = "hello????";

export default function App() {
  return (
    <SafeAreaView className="flex-1 justify-between items-center bg-white">
      <View className="flex-1 justify-center p-4 w-full">
        <View className="overflow-hidden h-full bg-black rounded-lg shadow-md">
          <Text className="p-4 text-center text-white">Question 1</Text>
        </View>
      </View>
      <View className="p-4 space-y-4 w-full">
        <View className="flex flex-row justify-between space-x-4 h-20">
          <TouchableOpacity className="flex justify-center items-center p-4 w-40 bg-black rounded-lg">
            <Text className="font-bold text-white">{option1}</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex justify-center items-center p-4 w-40 bg-black rounded-lg">
            <Text className="font-bold text-white">{option2}</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-between space-x-4 h-20">
          <TouchableOpacity className="flex justify-center items-center p-4 w-40 bg-black rounded-lg">
            <Text className="font-bold text-white">{option3}</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex justify-center items-center p-4 w-40 bg-black rounded-lg">
            <Text className="font-bold text-white">{option4}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
