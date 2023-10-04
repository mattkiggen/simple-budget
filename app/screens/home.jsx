import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Button } from "react-native-paper";

import BaseScreen from "./base";
import Constants from "../constants";
import PocketListItem from "../components/PocketListItem";

const HomeScreen = ({ navigation }) => {
  const [envelopes, setEnvelopes] = useState([
    {
      id: 1,
      name: "Food",
      totalAmount: 2000.0,
      currentAmount: 400.0,
      color: "#222",
    },
    {
      id: 2,
      name: "Fuel",
      totalAmount: 3000.0,
      currentAmount: 1400.0,
      color: "green",
    },
    {
      id: 1,
      name: "Jetbrains",
      totalAmount: 522.0,
      currentAmount: 522.0,
      color: "blue",
    },
  ]);

  return (
    <BaseScreen>
      <View style={styles.list}>
        <FlashList
          renderItem={({ item }) => (
            <PocketListItem
              pocket={item}
              onPress={() =>
                navigation.navigate({
                  name: Constants.routes.transactions,
                  params: { pocket: item.name },
                })
              }
            />
          )}
          data={envelopes}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View style={{ marginBottom: 8 }} />}
          ListHeaderComponent={() => (
            <Text style={styles.headline}>My pockets</Text>
          )}
          ListFooterComponent={() => (
            <Button
              style={{ marginTop: 16 }}
              mode={"text"}
              onPress={() => navigation.navigate(Constants.routes.addPocket)}
            >
              Add new pocket
            </Button>
          )}
        />
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  headline: {
    marginBottom: 16,
  },
  list: {
    width: "100%",
    height: "100%",
  },
});

export default HomeScreen;
