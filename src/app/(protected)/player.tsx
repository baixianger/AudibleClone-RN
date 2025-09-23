import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { Entypo } from "@expo/vector-icons";

export default function Player() {
  return (
    <View className="flex-1 justify-center items-center">
      <Pressable
        onPress={() => router.back()}
        className="absolute top-16 left-4 bg-gray-800 rounded-full p-2"
      >
        <Entypo name="chevron-down" size={24} color="white" />
      </Pressable>
      <Text className="text-white text-2xl">Player</Text>
    </View>
  );
}
