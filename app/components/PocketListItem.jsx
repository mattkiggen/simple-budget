import React from "react";
import { Pressable } from "react-native";
import Pocket from "./Pocket";

const PocketListItem = ({ onPress, pocket }) => {
  return (
    <Pressable onPress={onPress}>
      <Pocket {...pocket} />
    </Pressable>
  );
};
export default PocketListItem;
