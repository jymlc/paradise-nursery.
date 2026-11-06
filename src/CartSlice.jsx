import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, { payload: plant }) {
      const item = state.items.find(({ id }) => id === plant.id)
      if (item) {
        item.quantity += 1
      } else {
        state.items.push({ ...plant, quantity: 1 })
      }
    },
    removeItem(state, { payload: id }) {
      state.items = state.items.filter((item) => item.id !== id)
    },
    updateQuantity(state, { payload: { id, quantity } }) {
      const item = state.items.find((entry) => entry.id === id)
      if (item && Number.isInteger(quantity)) {
        if (quantity <= 0) {
          state.items = state.items.filter((entry) => entry.id !== id)
        } else {
          item.quantity = quantity
        }
      }
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions
export const selectCartItems = (state) => state.cart.items
export const selectCartCount = (state) =>
  selectCartItems(state).reduce((count, item) => count + item.quantity, 0)
export const selectCartTotal = (state) =>
  selectCartItems(state).reduce((total, item) => total + item.price * item.quantity, 0)

export default cartSlice.reducer
