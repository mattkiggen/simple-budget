import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Button } from "react-native-paper";

import BaseScreen from "./base";
import Envelope from "../components/envelope";
import Constants from "../constants";

const HomeScreen = ({ navigation }) => {
  const [envelopes, setEnvelopes] = useState([
    {
      id: 1,
      name: "Food",
      totalAmount: 2000.0,
      currentAmount: 400.0,
    },
    {
      id: 2,
      name: "Fuel",
      totalAmount: 3000.0,
      currentAmount: 1400.0,
    },
    {
      id: 1,
      name: "Jetbrains",
      totalAmount: 522.0,
      currentAmount: 522.0,
    },
  ]);

  return (
    <BaseScreen>
      <View style={styles.list}>
        <FlashList
          renderItem={({ item }) => (
            <Envelope
              name={item.name}
              currentAmount={item.currentAmount}
              totalAmount={item.totalAmount}
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
