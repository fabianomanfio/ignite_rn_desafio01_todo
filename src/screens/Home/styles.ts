import { StyleSheet } from "react-native";
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray600,
  },
  header: {
    backgroundColor: theme.colors.gray700,
    paddingTop: 24,
    paddingBottom: 70,
    alignItems: "center",
  },
  image: {
    width: 110,
    height: 32,
    marginTop: 42,
    // marginBottom: 10,
  },
  taskContainer: {
    flex: 1,
    padding: 24,
  },
  taskInfoContainer: {
    marginTop: 48,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskCreated: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTaskCreated: {
    color: theme.colors.blue,
    fontFamily: theme.fonts.bold,
  },
  taskCreatedCounter: {
    backgroundColor: theme.colors.gray400,
    color: theme.colors.gray200,
    fontSize: 12,
    fontFamily: theme.fonts.bold,

    marginLeft: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 999,
  },
  taskConcluded: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTaskConcluded: {
    color: theme.colors.purple,
    fontFamily: theme.fonts.bold,
  },
  taskConcludedCounter: {
    backgroundColor: theme.colors.gray400,
    color: theme.colors.gray200,
    fontSize: 12,
    fontFamily: theme.fonts.bold,

    marginLeft: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 999,
  },
  taskList: {
    marginTop: 20,
  },
  taskListEmptyContainer: {
    paddingHorizontal: 20,
    paddingVertical: 48,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray400,
    alignItems: "center",
  },
  taskListEmptyText: {
    color: theme.colors.gray300,
    lineHeight: 20,
    textAlign: "center",
  },
});
