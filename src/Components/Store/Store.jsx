import React, { createContext, useReducer } from 'react'

export const Store = createContext()

let initialvalue = {
name : "ayush"
}
function reducer(){

}

export default function Provider(props){
    const [state , dispatchstate] = useReducer(reducer , initialvalue)
    return(
        <Store.Provider value={{state}}>
      {props.children}
     </Store.Provider>
    )
}