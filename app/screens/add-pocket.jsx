import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import BaseScreen from "./base";

const AddPocketScreen = () => {
  const [text, setText] = useState("");
  return (
    <BaseScreen>
      <View>
        <Text>Hell from add pocket</Text>
        <TextInput
          label="Name"
          mode={"outlined"}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          label="Description"
          mode={"outlined"}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          keyboardType={"number-pad"}
          label="Max amount"
          mode={"outlined"}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          keyboardType={"number-pad"}
          defaultValue={"0.00"}
          label="Current amount"
          mode={"outlined"}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button
          mode={"contained-tonal"}
          onPress={() => console.log("something")}
        >
          Save pocket
        </Button>
      </View>
    </BaseScreen>
  );
};
export default AddPocketScreen;
