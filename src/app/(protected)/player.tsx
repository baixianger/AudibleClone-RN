import { View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import { SafeAreaView } from "react-native-safe-area-context";
import PlaybackBar from "@/components/PlaybackBar";

import books from "@/dummyBooks";

export default function PlayerScreen() {
  const book = books[1];
  const player = useAudioPlayer({
    uri: book.audio_url,
  });
  const playerStatus = useAudioPlayerStatus(player);

  return (
    <SafeAreaView className="flex-1 py-10 gap-y-4">
      <Pressable
        onPress={() => router.back()}
        className="absolute top-16 left-4 bg-gray-800 rounded-full p-2"
      >
        <Entypo name="chevron-down" size={24} color="white" />
      </Pressable>

      <Image
        source={{ uri: book.thumbnail_url }}
        className="w-[75%] aspect-square rounded-[5px] self-center pt-10"
      />

      <View className="flex-1 gap-8 justify-end px-10">
        <Text className="text-white text-2xl font-bold text-center">
          {book.title}
        </Text>
        <PlaybackBar 
        currentTime={playerStatus.currentTime}
        duration={playerStatus.duration}
        onSeek={(seconds: number) => player.seekTo(seconds)}
        />
        <View className="flex-row items-center justify-between mt-8">
          <Ionicons name="play-skip-back" size={24} color="white" />
          <Ionicons name="play-back" size={24} color="white" />
          <Ionicons
            name={playerStatus.playing ? "pause" : "play"}
            size={50}
            color="white"
            onPress={() => playerStatus.playing ? player.pause() : player.play()}
          />
          <Ionicons name="play-forward" size={24} color="white" />
          <Ionicons name="play-skip-forward" size={24} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
}
