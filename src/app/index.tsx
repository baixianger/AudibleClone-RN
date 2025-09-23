import "../../global.css";
import { View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import books from "../dummyBooks";
import { BookListItem } from "../component/BookListItem";

export default function App() {
  return (
    <View className="flex-1 bg-slate-800 justify-center p-4 pt-20">
      {/* book row */}
      <FlatList
        data={books}
        // contentContainerStyle={{ gap: 16 }}
        contentContainerClassName="gap-4"
        renderItem={({ item }) => {
          return <BookListItem book={item} />;
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}
