import React from 'react';
import ReactDOM from 'react-dom/client';
import { SuperDatePicker } from './components/SuperDatePicker';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
    <React.StrictMode>
        <SuperDatePicker/>
    </React.StrictMode>
);
