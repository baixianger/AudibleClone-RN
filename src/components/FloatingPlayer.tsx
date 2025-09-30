import { Text, View, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import { useAudioPlayerStatus } from "expo-audio";
import AntDesign from "@expo/vector-icons/AntDesign";
import { usePlayer } from "@/providers/PlayerProvider";

function FloatingPlayer() {
  const { player, book } = usePlayer();
  const playerStatus = useAudioPlayerStatus(player);
  if (!book) return null;
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
          name={
            playerStatus.isBuffering
              ? "loading"
              : playerStatus.playing
                ? "pause-circle"
                : "play-circle"
          }
          onPress={() =>
            playerStatus.playing ? player.pause() : player.play()
          }
          size={24}
          color="white"
        />
      </Pressable>
    </Link>
  );
}

export { FloatingPlayer };
