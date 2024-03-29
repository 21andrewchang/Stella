import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <TouchableOpacity className="p-4 bg-black rounded-lg">
        <Text className="font-bold text-white">Quickplay</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
