import { useExpenseStore } from "@/src/store/useExpenseStore";
import { router } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styleHome } from "./style";

export const Home = () => {
  const items = useExpenseStore((state) => state.items);
  const total = useExpenseStore((state) => state.getTotal());
  const removeItem = useExpenseStore((state) => state.removeItem);

  const handleNavigateToExpense = () => {
    console.log("Navegar para tela de despesas");
    router.navigate("/expense");
  };

  return (
    <View style={styleHome.container}>
      <Text style={styleHome.title}>Listagem Despesas</Text>
      <TouchableOpacity
        style={styleHome.addButton}
        onPress={handleNavigateToExpense}
      >
        <Text style={styleHome.addButtonText}>Adicionar Item</Text>
      </TouchableOpacity>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styleHome.listItem}>
            <Text style={styleHome.itemText}>
              {item.name} - R$ {item.price.toFixed(2)}
            </Text>
            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <Text style={styleHome.removeText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styleHome.totalText}>Total: R$ {total.toFixed(2)}</Text>
    </View>
  );
};
