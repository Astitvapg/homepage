import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// app.ts file

// Define a variable for the website owner's name
const websiteOwner: string = 'Astitva Singh';

// Get the heading element from the HTML file
const heading = document.querySelector('h1');

// Set the content of the heading to include the website owner's name
heading.textContent = `Website created by ${websiteOwner}`;


