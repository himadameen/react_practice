import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home, {Home2} from './Home';
import { render } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// ReactDOM.render(<App/>, document.getElementById('root'));