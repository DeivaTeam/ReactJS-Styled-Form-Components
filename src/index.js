import React from 'react';
import { render } from 'react-dom';
import App from './index.jsx';
import Footer from './components/Footer/index.jsx';
import Header from './components/Header/index.jsx';

render(<div><Header/><App /> <Footer/></div>, document.querySelector('.Form-container'));