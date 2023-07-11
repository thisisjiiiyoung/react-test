import { configureStore, createSlice } from "@reduxjs/toolkit";



const user = createSlice({ 
  name: 'user',
  //initialState: '홍길동', 
  initialState: {name: '홍길동', memberYear: 1}, 
  //초기값


  reducers: {
    
    changeName(state){
      state.name = state.name + ' : Green'
      
    },
    changeYear(state, action){
      state.memberYear += action.payload
      
    }
  }
})


export const { changeName, changeYear } = user.actions


const cart = createSlice({
  name: 'cart',
  initialState: [], 
  reducers: {
    addItem(state, action) { 
      const index = state.findIndex((findId) => { return findId.id === action.payload.id})
      if(index > -1) {
        state[index].count++
      } else {
          state.push(action.payload)
      }
    }, 
    deleteItem(state, action){
      const index = state.findIndex((findId) => { return findId.id === action.payload})
      
      state.splice(index, 1)
    }, 
    addCount(state, action){
      const index = state.findIndex((findId) => {return findId.id === action.payload})
        state[index].count++
    }, 
    subCount(state, action){
      const index = state.findIndex((findId) => {return findId.id === action.payload})
      if(state[index].count > 1) state[index].count--
    } 
  }
})

export const { addItem, deleteItem, addCount, subCount } = cart.actions


export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer 
  }
})