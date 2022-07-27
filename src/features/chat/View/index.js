import { View, Text, TouchableOpacity } from "react-native";
import { stylesFn } from "./styles";
import { ScrollView } from "react-native-web";
import { TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { getChats } from "../../inbox/reducers";

export default () => {
  const styles = stylesFn();
  const route = useRoute();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChats);
  }, []);

  const { chatId, personName } = route.params;
  const messagess = useSelector((state) => state.chat);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(
    messagess.find((m) => m.id === chatId).messages
  );

  const messageSend = () => {
    console.log(messages);
    const x = [...messages];
    x.push({
      timestamp: Date.now(),
      message: message,
      sender: "To",
    });
    setMessages(x);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ alignSelf: "stretch" }}>
        {messages.map((message) => {
          return (
            <View
              key={message.timestamp}
              style={
                message.sender === "From"
                  ? styles.messageFrom
                  : styles.messageTo
              }
            >
              <Text>{message.message}</Text>
            </View>
          );
        })}
      </ScrollView>
      <TextInput
        style={{ alignSelf: "stretch" }}
        placeholder={`Chatting with ${personName}...`}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          messageSend();
        }}
        style={{ marginVertical: 10 }}
      >
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  );
};
