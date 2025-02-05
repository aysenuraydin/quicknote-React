import React from "react";
import { AppRouter } from './routers/AppRouter';
import { NoteProvider } from './contexts/NoteContext';

const App = () => {
  return (
      <NoteProvider>
        <AppRouter/>
      </NoteProvider>
  );
}
export default App;
