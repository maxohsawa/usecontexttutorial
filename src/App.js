import React from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import ClassContextComponent from './ClassContextComponent';
import ThemeProvider from './ThemeContext';

export const ThemeContext = React.createContext();

export default function App() {



  return (
    <div className="App">
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>    
    </div>
  );
}