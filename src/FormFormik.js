import React from 'react';
import { withFormik } from 'formik';
import Form from './Form';
import Debug from './Debug';

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
  return '';
};

const emailValidation = email => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email,
    )
  ) {
    return '';
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
  return '';
};

const validate = {
  firstName: name => nameValidation('First Name', name),
  lastName: name => nameValidation('Last Name', name),
  email: emailValidation,
  age: ageValidation,
};

const formValues = {
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
};

function MyForm({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) {
  return (
    <>
      <Form
        values={values}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
      />
      <Debug values={values} errors={errors} touched={touched} />
    </>
  );
}

const FormFormik = withFormik({
  mapPropsToValues: () => formValues,

  // Custom sync validation
  validate: values =>
    Object.keys(values).reduce(
      (errors, field) => ({
        ...errors,
        [field]: validate[field](values[field]),
      }),
      {},
    ),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm',
})(MyForm);

export default FormFormik;
