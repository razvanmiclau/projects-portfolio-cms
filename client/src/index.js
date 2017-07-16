import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';

// Import CSS
import '../../public/css/styles.css';

render(
  Routes,
  document.getElementById('root')
);
