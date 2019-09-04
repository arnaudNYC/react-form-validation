import React from 'react';
import Form from './Form';
import Debug from './Debug';

function FormVanilla({ values: propValues, validate }) {
  const [values, setValues] = React.useState(propValues);

  const [errors, setErrors] = React.useState({});

  const [touched, setTouched] = React.useState({});

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
      [name]: true,
    });
  };

  const handleBlur = evt => {
    const { name, value } = evt.target;

    // remove whatever error was there previously
    const { [name]: removedError, ...rest } = errors;

    // check for a new error
    const error = validate[name](value);

    // // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error }),
    });
  };

  // form submit handler
  const handleSubmit = evt => {
    evt.preventDefault();
    if (
      !Object.values(errors).length && // errors object is empty
      Object.values(touched).length === Object.values(values).length && // all fields were touched
      Object.values(touched).every(t => t === true) // every touched field is true
    ) {
      alert(JSON.stringify(values, null, 2));
    }
  };

  return (
    <>
      <h2>Form validated manually</h2>
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
