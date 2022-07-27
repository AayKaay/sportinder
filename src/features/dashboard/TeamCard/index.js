import { View, Text } from "react-native";
import { stylesFn } from "./styles";

export default ({ team }) => {
  const styles = stylesFn();

  return (
    <View style={styles.team}>
      <Text style={styles.textDetails}>{team.name}</Text>
      <Text style={styles.textDetails}>{team.name}</Text>
      <Text style={styles.textDetails}>{team.name}</Text>
    </View>
  );
};
