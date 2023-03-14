import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
const input = window.prompt("Enter your name:");
if (input !== null) {
  alert(`Hello, ${input}!`);
} else {
  alert("You did not enter a name.");
}

