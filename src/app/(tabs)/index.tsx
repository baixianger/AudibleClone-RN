import { FlatList } from "react-native";

import books from "@/dummyBooks";
import { BookListItem } from "@/components/BookListItem";

export default function App() {
  return (
    <FlatList
      data={books}
      // contentContainerStyle={{ gap: 16 }}
      contentContainerClassName="gap-4 p-4"
      renderItem={({ item }) => {
        return <BookListItem book={item} />;
      }}
    />
  );
}
