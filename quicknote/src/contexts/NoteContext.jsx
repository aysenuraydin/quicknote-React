import { noteReducer } from "../reducers/noteReducer";
import React,{ useEffect, useReducer, createContext }  from 'react';

export const NoteContext = createContext();

const initialState = { 
    notes: [
        {id: 1, title: 'Note 1', content: 'Content 1'},
        {id: 2, title: 'Note 2', content: 'Content 2'},
        {id: 3, title: 'Note 3', content: 'Content 3'}
    ],
    note: {},
};

export function NoteProvider({ children }) {
    const [state, dispatch] = useReducer(noteReducer, initialState);

    useEffect(() => {
        const json_obj = localStorage.getItem("notes");
        const items = JSON.parse(json_obj);

        if (items && JSON.stringify(items) !== JSON.stringify(state.notes)) {
        dispatch({ type: "CLEAR_NOTES" }); 
        items.forEach(note => dispatch({ type: "ADD_NOTE", payload: note })); 
        }
    }, []); 

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(state.notes));
    }, [state.notes]);

    return (
        <NoteContext.Provider value={{ state, dispatch }}>
            {children}
        </NoteContext.Provider>
    );
}