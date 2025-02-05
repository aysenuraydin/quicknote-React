import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Create } from '../pages/Create';
import { List } from '../pages/List';
import { MainLayout } from '../layouts/MainLayout';
import { NoteContext } from "../contexts/NoteContext";

export const AppRouter = () => {
  const { state, dispatch } = useContext(NoteContext); 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: 
          <List 
            // key={notes.length} 
            notes={state.notes} 
            dispatch={ dispatch }
          />
        },
        {
          path: "/create",
          element: 
          <Create 
            dispatch={ dispatch }
            note={state.note} 
          />
        }
      ]
    }
  ]);

  return <RouterProvider key={state.notes.length} router={router} />;
};
