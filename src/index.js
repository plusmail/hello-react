import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, AppClass} from './App';
import MyComponent from "./MyComponent";
//App 컴포너트
const root = ReactDOM.createRoot(document.getElementById('root'));

const noop = () => {};
console.error = noop;
console.warn = noop;
root.render(
    // <React.StrictMode>

        <App/>
    // </React.StrictMode>
);
