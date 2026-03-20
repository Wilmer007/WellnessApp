import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { DataContext } from "../Context/DataContext";

export default function SavedItemsScreen() {
  const { historyItems } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Activities</Text>

      {historyItems.length === 0 ? (
        <Text style={styles.emptyText}>
          No completed activities yet ✅
        </Text>
      ) : (
        <FlatList
          data={historyItems}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.itemText}>
                {item.title} ({item.priority})
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f4f6f8" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  emptyText: { textAlign: "center", marginTop: 20, color: "#777" },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  itemText: { fontSize: 16 }
});