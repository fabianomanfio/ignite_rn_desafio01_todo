import { StyleSheet } from "react-native";
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray500,
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    elevation: 2,
    shadowColor: theme.colors.gray700,
  },
  description: {
    flex: 3,
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 10,
  },
  descriptionText: {
    color: theme.colors.gray100,
    fontSize: 15,
  },
  descriptionTextCheck: {
    color: theme.colors.gray300,
    fontSize: 15,
    textDecorationLine: "line-through",
  },
  checkBox: {},
  trashButton: {},
});