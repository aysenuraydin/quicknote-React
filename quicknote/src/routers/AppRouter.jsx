import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Create } from '../pages/Create';
import { List } from '../pages/List';
import { MainLayout } from '../layouts/MainLayout';

export const AppRouter = ({ notes, deleteNote, clearAll, editNote, addNote, clearNote, note }) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <List 
                    // key={notes.length} 
                    notes={notes} 
                    deleteNote={deleteNote} 
                    clearAll={clearAll} 
                    editNote={editNote} 
                  />
        },
        {
          path: "/create",
          element: <Create 
                    addNote={addNote} 
                    clearNote={clearNote} 
                    note={note} 
                  />
        }
      ]
    }
  ]);

  return <RouterProvider key={notes.length} router={router} />;
};
