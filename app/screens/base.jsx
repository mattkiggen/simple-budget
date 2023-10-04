import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

const BaseScreen = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default BaseScreen;
