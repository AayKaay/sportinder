import { StyleSheet } from "react-native";

export const stylesFn = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 20,
    },
    textDetails: {
      fontWeight: "800",
      margin: 5,
    },
    team: {
      borderWidth: 2,
      padding: 5,
      margin: 5,
      alignSelf: "stretch",
    },
  });
