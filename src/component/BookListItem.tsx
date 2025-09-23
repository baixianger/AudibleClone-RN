import { Text, View, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

type AudioBookProps = {
  id: string;
  title: string;
  author: string;
  audio_url: string;
  thumbnail_url?: string;
};

function BookListItem({ book }: { book: AudioBookProps }) {
  return (
    <View className="flex-row gap-4 items-center">
      <Image
        source={{ uri: book.thumbnail_url }}
        className="w-16 aspect-square rounded-md"
      />
      <View className="gap-1 flex-1">
        <Text className="text-2xl font-bold text-gray-100">{book.title}</Text>
        <Text className="text-gray-400">{book.author}</Text>
      </View>
      <AntDesign name="play-circle" size={24} color="white" />
    </View>
  );
}

export { BookListItem };
