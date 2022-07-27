import { StyleSheet } from "react-native";

export const stylesFn = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 20,
    },
    teamContainer: {
      margin: 2,
      alignSelf: "stretch",
    },
    textDetails: {
      fontWeight: "800",
      margin: 5,
    },
  });
