import { Text, View, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

import books from "@/dummyBooks";

import { AudioBookProps } from "./BookListItem";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";

function FloatingPlayer({ book = books[1] }: { book?: AudioBookProps }) {

  const player = useAudioPlayer({
    uri: book.audio_url,
  });
  const playerStatus = useAudioPlayerStatus(player);

  return (
    <Link href="/player" asChild>
      <Pressable className="flex-row gap-4 items-center bg-slate-900 p-4">
        <Image
          source={{ uri: book.thumbnail_url }}
          className="w-16 aspect-square rounded-md"
        />
        <View className="gap-1 flex-1">
          <Text className="text-2xl font-bold text-gray-100">{book.title}</Text>
          <Text className="text-gray-400">{book.author}</Text>
        </View>
        <AntDesign 
        name={playerStatus.playing ? "pause-circle" : "play-circle"} 
        onPress={() => playerStatus.playing ? player.pause() : player.play()}
        size={24} 
        color="white" 
        />
      </Pressable>
    </Link>
  );
}

export { FloatingPlayer };
