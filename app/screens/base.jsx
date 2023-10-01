import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

const BaseScreen = ({ children }) => {
  return (
    <View>
      {children}
      <StatusBar style="auto" />
    </View>
  );
};

export default BaseScreen;
