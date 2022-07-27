import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { stylesFn } from "./styles";

export default ({ dm }) => {
  const styles = stylesFn();
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate("ChatView", { chatId: dm.id, personName: dm.participant });
      }}
    >
      <View style={styles.avatar}>
        <Text></Text>
      </View>
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{dm.participant}</Text>
        </View>
        <View>
          <Text style={styles.lastMessageText}>Last Message</Text>
        </View>
      </View>
      <View style={styles.time}>
        <Text>{dm.lastMessageTime}</Text>
      </View>
    </TouchableOpacity>
  );
};
