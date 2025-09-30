import { Redirect, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth } from "@clerk/clerk-expo";
import { ActivityIndicator } from "react-native";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import { FloatingPlayer } from "@/components/FloatingPlayer";

export default function RootLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <ActivityIndicator />;
  }
  if (!isSignedIn) {
    return <Redirect href={"/sign-in"} />;
  }
  return (
    <Tabs 
    screenOptions={{ tabBarShowLabel: false }}
    tabBar={(props) => (
      <>
        <FloatingPlayer />
        <BottomTabBar {...props} />
      </>
    )}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Library",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
