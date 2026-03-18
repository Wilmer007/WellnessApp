import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { DataContext } from "../Context/DataContext";

export default function SavedItemsScreen() {

  const context = useContext(DataContext);
  if (!context) throw new Error("Context error");

  const { historyItems } = context;

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Completed Activities</Text>

      {historyItems.length === 0 ? (
        <Text>No activities yet</Text>
      ) : (
        <FlatList
          data={historyItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.title}</Text>
              <Text>{item.structure}</Text>
              <Text>{item.completedAt}</Text>
            </View>
          )}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:20 },
  title:{ fontSize:24, fontWeight:"bold" },
  item:{ padding:10, borderWidth:1, marginVertical:5 }
});