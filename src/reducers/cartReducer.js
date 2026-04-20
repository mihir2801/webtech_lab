export const initialState = [
  { id: 1, name: "Web Development Book", price: 1200, quantity: 1 },
  { id: 2, name: "Mechanical Keyboard", price: 4500, quantity: 1 },
];

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];

    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    case "INCREMENT":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

    case "DECREMENT":
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};
