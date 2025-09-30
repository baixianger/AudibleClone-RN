import "../../global.css";
import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { PlayerProvider } from "@/providers/PlayerProvider";

const queryClient = new QueryClient();

const customizedTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#010D1A",
    card: "#010D1A",
    primary: "white",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={customizedTheme}>
      <QueryClientProvider client={queryClient}>
        <ClerkProvider tokenCache={tokenCache}>
          <PlayerProvider>
            <Slot />
          </PlayerProvider>
        </ClerkProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
