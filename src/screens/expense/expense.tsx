import { useExpenseStore } from "@/src/store/useExpenseStore";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styleExpense } from "./style";

export const Expense = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const addItem = useExpenseStore((state) => state.addItem);

  const handleAddItem = () => {
    if (!name || !price) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    addItem({
      id: Date.now().toString(),
      name,
      price: price,
    });

    setName("");
    setPrice(0);
    router.navigate("/");
  };

  const navigateHome = () => {
    router.navigate("/");
  };

  return (
    <View style={styleExpense.container}>
      <Text style={styleExpense.title}>Adicione uma nova despesa</Text>
      <TouchableOpacity style={styleExpense.backButton} onPress={navigateHome}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Insira o nome da despesa"
        value={name}
        onChangeText={setName}
        style={styleExpense.input}
      />
      <TextInput
        placeholder="Insira o valor"
        value={price.toString()}
        onChangeText={(text) =>
          Number(text) ? setPrice(Number(text)) : setPrice(0)
        }
        keyboardType="numeric"
        style={styleExpense.input}
      />
      <TouchableOpacity style={styleExpense.button} onPress={handleAddItem}>
        <Text style={styleExpense.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};
