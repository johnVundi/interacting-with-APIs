// import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
// import SearchBar from './components/SearchBar';

// Get a reference to the div with ID root
const el = document.getElementById('root');

// Tell React to take control of that element

const root = ReactDOM.createRoot(el);



// show the component to the screen
root.render( <App />);


