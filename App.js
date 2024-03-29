import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Text className="font-bold text-black">Quickplay</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
