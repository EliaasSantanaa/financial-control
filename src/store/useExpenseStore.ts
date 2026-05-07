import { create } from "zustand";
import { IExpenseStore } from "./interfaces/expense-store.interface";

export const useExpenseStore = create<IExpenseStore>((set, get) => ({
  items: [],

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),

  removeItem: (id: string) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  getTotal: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.price, 0);
  },
}));
