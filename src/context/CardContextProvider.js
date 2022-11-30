import React,{createContext, useReducer} from 'react'

const initialState={
    selectedItem:[],
    itemsCounter:0,
    total:0,
    checkout:false
}

const sumitem=(item)=>{
    const itemsCounter=item.reduce((total,product)=>total+product.quantity,0)
    const total=item.reduce((total,product)=>total+product.price*product.quantity,0).toFixed(2);
    return{itemsCounter,total}

}


const cardtReducer=(state,action)=>{
    switch (action.type) {
        case "ADD_ITEM":
            if(!state.selectedItem.find(item=>item.id===action.paylod.id)){
                state.selectedItem.push({
                    ...action.paylod,
                    quantity:1
                })
            }
            return{
                ...state,
                selectedItem:[...state.selectedItem],
                ...sumitem(state.selectedItem),
                checkout:false,
                
            }
            
            case "REMOVE_ITEM":
                    const newSelectedItem=state.selectedItem.filter(item=>item.id !== action.paylod.id)
                    return{
                        ...state,
                        selectedItem:[...newSelectedItem],
                        ...sumitem(newSelectedItem)
                    }
         case "INCREASE":
            const indexI=state.selectedItem.findIndex(item=>item.id === action.paylod.id)
            state.selectedItem[indexI].quantity++
            return{
                ...state,
                ...sumitem(state.selectedItem)
            }
            case "DECRASE":
                const indexD=state.selectedItem.findIndex(item=>item.id === action.paylod.id)
                state.selectedItem[indexD].quantity--
                return{
                    ...state,
                    ...sumitem(state.selectedItem)
                }

           case "CHECKOUT":
            return{
                selectedItem:[],
                itemsCounter:0,
                total:0,
                checkout:true
            }     
          case "CLEAR":
            return{
                selectedItem:[],
                itemsCounter:0,
                total:0,
                checkout:false
            }  
            default:
                return state;

        
    }
}
export const CartContext=createContext()

const CardContextProvider = ({children}) => {
    const [state,dispach]=useReducer(cardtReducer,initialState);
//    localStorage.setItem('state',JSON.stringify(state.selectedItem))
   

  return (
    <div>
        <CartContext.Provider value={{state,dispach}}>
            {children}
        </CartContext.Provider>
    </div>
  )
}

export default CardContextProvider