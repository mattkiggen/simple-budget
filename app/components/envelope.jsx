import { StyleSheet, Text, View } from "react-native";
import { Button, ProgressBar, MD3Colors } from "react-native-paper";

const Envelope = ({ name, currentAmount, totalAmount }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text>
          {currentAmount} / {totalAmount}
        </Text>
      </View>
      <ProgressBar
        style={{ borderRadius: 8, marginTop: 8 }}
        progress={currentAmount / totalAmount}
        color={MD3Colors.neutral10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  name: {
    fontWeight: "bold",
  },
});

export default Envelope;
