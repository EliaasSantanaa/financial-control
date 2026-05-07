import { StyleSheet } from "react-native";

export const styleExpense = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
    color: "#111827",
  },
  backButton: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: "#fafafa",
  },
  button: {
    backgroundColor: "#0a84ff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
});
