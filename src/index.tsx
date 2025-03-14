import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { EmployeeDetails } from './components/employeeDetails/EmployeeDetails';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<EmployeeDetails/>
);

reportWebVitals();
