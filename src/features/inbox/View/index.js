import { View, Text, TouchableOpacity } from "react-native";
import { stylesFn } from "./styles";
import { ScrollView } from "react-native-web";
import DM from "../DM";
import { useDispatch, useSelector } from "react-redux";
import { getChats } from "../reducers";
import { useEffect } from "react";

export default () => {
  const styles = stylesFn();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChats());
  }, []);

  const inbox = useSelector((state) => {
    return state.inbox;
  });

  return (
    <View style={styles.container}>
      <ScrollView style={{ alignSelf: "stretch" }}>
        {inbox.map((i) => (
          <DM key={i.id} dm={i}></DM>
        ))}
      </ScrollView>
    </View>
  );
};
