import { StyleSheet } from "react-native";

export const stylesFn = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 20,
      alignSelf: "stretch",
      borderWidth: 1,
    },
    messageTo: {
      paddingVertical: 3,
    },
    messageFrom: {
      justifyContent: "flex-end",
      flexDirection: "row",
      paddingVertical: 3,
    },
  });
