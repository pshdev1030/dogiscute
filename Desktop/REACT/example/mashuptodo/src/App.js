import React from 'react'
import {createGlobalStyle} from 'styled-components';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';
import TodoCreate from './TodoCreate';
import {TodoProvider} from './TodoContext';
const GlobalStyle = createGlobalStyle`
body{
  background:#e9ecef;
}
`;

function App() {
  return (
  <>
  <TodoProvider>
    <GlobalStyle/>
    <TodoTemplate>
    <TodoHead/>
    <TodoList/>
    <TodoCreate />
    </TodoTemplate>
  </TodoProvider>
  </>
  );
}

export default App;
