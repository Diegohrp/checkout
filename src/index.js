import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './routes/App';

const root = ReactDOM.createRoot(document.getElementById('app'));
const element = <App />;

root.render(element);
