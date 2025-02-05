
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Create } from '../pages/Create';
import { List } from '../pages/List';
import { MainLayout } from '../layouts/MainLayout';

export const AppRouter = ({ notes, note, dispatch }) => {
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
                    dispatch={ dispatch }
                  />
        },
        {
          path: "/create",
          element: <Create 
                    dispatch={ dispatch }
                    note={note} 
                  />
        }
      ]
    }
  ]);

  return <RouterProvider key={notes.length} router={router} />;
};
