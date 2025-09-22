import "./global.css"
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 bg-red-500 m-4  items-center justify-center">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}