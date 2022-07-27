import { View, Text, TouchableOpacity } from "react-native";
import { stylesFn } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import TeamCard from "../TeamCard";
import { getTeams } from "../reducers";
import { FAB } from "react-native-paper";
import { ScrollView } from "react-native-web";
import { useEffect } from "react";

export default () => {
  const styles = stylesFn();
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const teams = useSelector((state) => {
    return state.dashboard;
  });

  return (
    <View style={styles.container}>
      <ScrollView style={{ alignSelf: "stretch" }}>
        <TouchableOpacity
          onPress={() => {
            navigate("InboxView");
          }}
        >
          <Text>Go to Inbox</Text>
        </TouchableOpacity>
        <View style={styles.teamContainer}>
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </View>
      </ScrollView>

      <FAB
        icon="plus"
        label="Add Match"
        style={{ backgroundColor: "white" }}
        color="#6200ee"
      />
    </View>
  );
};
