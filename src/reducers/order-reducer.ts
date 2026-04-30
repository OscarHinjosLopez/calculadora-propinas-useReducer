import { MenuItem, OrderItem } from "../types";

export type OrderAction =
  | { type: "ADD_ITEM"; payload: { item: MenuItem } }
  | { type: "REMOVE_ITEM"; payload: { itemId: MenuItem["id"] } }
  | { type: "PLACE_ORDER" }
  | { type: "ADD_TIP"; payload: { value: number } };

export type OrderState = {
  order: OrderItem[];
  tip: number;
};

export const initialState: OrderState = {
  order: [],
  tip: 0,
};

export const orderReducer = (
  state: OrderState = initialState,
  action: OrderAction,
) => {
  switch (action.type) {
    case "ADD_ITEM":
      const itemExist = state.order.find(
        (orderItem) => orderItem.id === action.payload.item.id,
      );
      let updatedOrder: OrderItem[] = [];
      if (itemExist) {
        updatedOrder = state.order.map((orderItem) =>
          orderItem.id === action.payload.item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem,
        );
        return {
          ...state,
          order: updatedOrder,
        };
      } else {
        const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
        return {
          ...state,
          order: [...state.order, newItem],
        };
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        order: state.order.filter((item) => item.id !== action.payload.itemId),
      };
    case "PLACE_ORDER":
      return {
        ...state,
        order: [],
        tip: 0,
      };
    case "ADD_TIP":
      const tip = action.payload.value;
      return {
        ...state,
        tip,
      };
    default:
      return state;
  }
};
