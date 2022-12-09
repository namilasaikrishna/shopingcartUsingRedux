import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        totalQuantity:0,
        showCart:false 
    },

    reducers:{
        addItems(state,action){
            const newItem = action.payload

            const existingItem = state.cartItems.find((item)=>item.id === newItem.id)

            if(existingItem){
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            }

            else{
                state.cartItems.push({
                    id:newItem.id,
                    totalPrice:newItem.price,
                    quantity:1,
                    name:newItem.name
                })
            }
            state.totalQuantity++
        },
        removeItem(){},
        setShowCart(){}
    }

})


export const cartActions = cartSlice.actions

export default cartSlice