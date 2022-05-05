import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Cricket from './Cricket';
import Bollywood from './Bollywood';
import { render } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Bollywood />);

// ReactDOM.render(<App/>, document.getElementById('root'));