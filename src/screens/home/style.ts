import { StyleSheet } from "react-native";

export const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111827",
  },
  addButton: {
    backgroundColor: "#0a84ff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  addButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
  listItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    color: "#111827",
  },
  removeText: {
    color: "#ef4444",
    fontWeight: "600",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 16,
    textAlign: "right",
    color: "#111827",
  },
});
