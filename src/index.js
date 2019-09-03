import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import FormVanilla from './FormVanilla';
import FormFormik from './FormFormik';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ maxWidth: '960px', marginRight: 'auto', marginLeft: 'auto' }}>
      <Router>
        <div>
          <h1>Forms</h1>
          <ul>
            <li>
              <Link to="/form-vanilla">Form with manual validation</Link>
            </li>
            <li>
              <Link to="/form-formik">Form validation using Formik</Link>
            </li>
          </ul>
        </div>
        <Route path="/form-vanilla" component={FormVanilla} />
        <Route path="/form-formik" component={FormFormik} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
