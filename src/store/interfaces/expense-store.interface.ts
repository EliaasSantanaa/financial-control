export interface IItem {
  id: string;
  name: string;
  price: number;
}

export interface IExpenseStore {
  items: IItem[];
  addItem: (item: IItem) => void;
  removeItem: (index: string) => void;
  getTotal: () => number;
}
