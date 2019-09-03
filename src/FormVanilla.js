import React from 'react';
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

const defaultFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  age: 0,
};

function FormVanilla() {
  const [values, setValues] = React.useState(defaultFormValues);

  const [errors, setErrors] = React.useState(
    Object.keys(defaultFormValues).reduce(
      (acc, key) => ({
        ...acc,
        [key]: '',
      }),
      {},
    ),
  );

  const [touched, setTouched] = React.useState(
    Object.keys(defaultFormValues).reduce(
      (acc, key) => ({
        ...acc,
        [key]: false,
      }),
      {},
    ),
  );

  // change event handler
  const handleChange = evt => {
    const { name, value: newValue } = evt.target;

    // prevent the age from being < 0
    const value = name === 'age' ? Math.max(0, newValue) : newValue;

    // save field values
    setValues({
      ...values,
      [name]: value,
    });

    // was the field modified
    setTouched({
      ...touched,
      [name]: value !== defaultFormValues[name],
    });
  };

  const handleBlur = evt => {
    const { name, value } = evt.target;
    // validate the field if the value has been touched
    setErrors({
      ...errors,
      [name]: touched[name] && validate[name](value),
    });
  };

  // form submit handler
  const handleSubmit = evt => {
    evt.preventDefault();
    if (Object.values(errors).every(v => v === '')) {
      alert(JSON.stringify(values));
    }
  };

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        touched={touched}
        errors={errors}
      />
      <Debug values={values} errors={errors} touched={touched} />
    </>
  );
}

export default FormVanilla;
