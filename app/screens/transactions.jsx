import React, { useState } from "react";
import { Text, View } from "react-native";

const TransactionsScreen = ({ route }) => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      pocket: "Food",
      amount: 200,
    },
    {
      id: 2,
      pocket: "Food",
      amount: 200,
    },
    {
      id: 3,
      pocket: "Fuel",
      amount: 350,
    },
    {
      id: 4,
      pocket: "Fuel",
      amount: 1050,
    },
  ]);

  const filtered = () => {
    if (route.params === undefined) {
      return transactions;
    }

    return transactions.filter((x) => x.pocket === route.params.pocket);
  };

  return (
    <View>
      <Text>Transactions {JSON.stringify(route.params)}</Text>
      {filtered().map((x) => {
        return <Text key={x.id}>{x.amount}</Text>;
      })}
    </View>
  );
};
export default TransactionsScreen;
