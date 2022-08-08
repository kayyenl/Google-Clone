import React, { createContext, useContext, useReducer } from 'react';


//preparing the data layer
export const StateContext = createContext()

//initialState is what the data layer looks like when the app is loaded
//reducer listens to changes 
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider >
    );
}

//hook that pulls information from the data layer
export default useStateValue = () => useContext(StateContext)
