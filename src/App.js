import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import FormVanilla from './FormVanilla';
import FormFormik from './FormFormik';

import 'bootstrap/dist/css/bootstrap.min.css';

const nameValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === '') {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return 'Invalid characters';
  }
  if (fieldValue.length < 3) {
    return `${fieldName} needs to be at least three characters`;
  }
  return null;
};

const emailValidation = email => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email,
    )
  ) {
    return null;
  }
  if (email.trim() === '') {
    return 'Email is required';
  }
  return 'Please enter a valid email';
};

const ageValidation = age => {
  if (age === '') {
    return 'Age is required';
  }
  if (age < 18) {
    return 'Age must be at least 18';
  }
  if (age > 99) {
    return 'Age must be under 99';
  }
  return null;
};

const validate = {
  firstName: name => nameValidation('First Name', name),
  lastName: name => nameValidation('Last Name', name),
  email: emailValidation,
  age: ageValidation,
};

const formValues = {
  age: 0,
  email: '',
  firstName: '',
  lastName: '',
};

function App() {
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '960px',
        padding: '10px',
      }}
    >
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
        <Route
          path="/form-vanilla"
          render={() => <FormVanilla validate={validate} values={formValues} />}
        />
        <Route
          path="/form-formik"
          render={() => <FormFormik validate={validate} values={formValues} />}
        />
      </Router>
    </div>
  );
}

export default App;
