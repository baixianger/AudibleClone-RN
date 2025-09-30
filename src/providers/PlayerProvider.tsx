import { AudioPlayer, useAudioPlayer } from "expo-audio";
import { createContext, useContext, useState } from "react";
import dummyBooks from "@/dummyBooks";
import { AudioBookProps } from "@/components/BookListItem";

type PlayerContextType = {
  player: AudioPlayer;
  book: AudioBookProps | null;
  setBook: (book: AudioBookProps) => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [book, setBook] = useState<AudioBookProps | null>(null);
  const player = useAudioPlayer({ uri: book?.audio_url });

  return (
    <PlayerContext.Provider value={{ player, book, setBook }}>
      {children}
    </PlayerContext.Provider>
  );
}

const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
};

export { PlayerProvider, usePlayer };
