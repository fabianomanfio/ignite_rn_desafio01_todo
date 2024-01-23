import { StyleSheet } from "react-native";
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 54,
    marginTop: -30,
    flexDirection: "row",
    padding: 24,
    backgroundColor: theme.colors.gray700,
    gap: 4,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: theme.colors.gray500,
    borderRadius: 6,
    color: theme.colors.gray100,
    padding: 16,
    fontSize: 16,
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: theme.colors.blue_dark,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    padding: 18,
  },
  buttonPlus: {
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 999,
    borderWidth: 2,
    color: theme.colors.gray100,
    borderColor: theme.colors.gray100,
    width: 18,
    height: 18,
    textAlign: "center",
    lineHeight: 18,
  },
});