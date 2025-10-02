import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import { useSupabase } from "@/lib/supabase";
import { BookListItem } from "@/components/BookListItem";

export default function Discover() {
  const supabaseClient = useSupabase();
  const { data, error, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () =>
      supabaseClient
        .from("books")
        .select("*")
        .throwOnError()
        .then((res) => res.data),
  });

  if (isLoading)
    return (
      <ActivityIndicator
        className="flex-1 justify-center items-center"
        size="large"
        color="white"
      />
    );
  if (error)
    return <Text className="text-red-500">Error: {error?.message}</Text>;

  return (
    <FlatList
      data={data}
      contentContainerClassName="gap-4 p-4"
      renderItem={({ item }) => <BookListItem book={item} />}
    />
  );
}
