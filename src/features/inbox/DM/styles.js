import { StyleSheet } from "react-native";

export const stylesFn = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#fff",
      justifyContent: "flex-start",
      paddingVertical: 15,
      paddingHorizontal: 5,
      borderBottomWidth: 2,
    },
    avatar: {
      marginRight: 20,
      borderWidth: 2,
      borderRadius: 50,
      minHeight: 35,
      minWidth: 35,
    },
    nameText: {
      fontWeight: "600",
    },
    lastMessageText: {
      color: "gray",
    },
    time: {
      marginLeft: 150,
    },
    nameContainer: {
      minWidth: 80,
    },
  });
