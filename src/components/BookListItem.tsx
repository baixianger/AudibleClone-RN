import { Text, View, Image, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { usePlayer } from "@/providers/PlayerProvider";

type AudioBookProps = {
  id: string;
  title: string;
  author: string;
  audio_url: string;
  thumbnail_url?: string;
};

function BookListItem({ book }: { book: AudioBookProps }) {
  const { setBook } = usePlayer();
  return (
    <Pressable
      className="flex-row gap-4 items-center"
      onPress={() => setBook(book)}
    >
      <Image
        source={{ uri: book.thumbnail_url }}
        className="w-16 aspect-square rounded-md"
      />
      <View className="gap-1 flex-1">
        <Text className="text-2xl font-bold text-gray-100">{book.title}</Text>
        <Text className="text-gray-400">{book.author}</Text>
      </View>
      <AntDesign name="play-circle" size={24} color="white" />
    </Pressable>
  );
}

export { BookListItem, AudioBookProps };
