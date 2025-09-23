import "./global.css";
import { Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import books from "./src/dummyBooks";
import { BookListItem } from "./src/component/BookListItem";

export default function App() {
  return (
    <View className="flex-1 bg-slate-800 justify-center p-4">
      {/* book row */}
      <View className="space-y-4">
        <BookListItem book={books[0]} />
        <BookListItem book={books[1]} />
        <BookListItem book={books[2]} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
