import React from 'react';
import { withFormik } from 'formik';
import Form from './Form';
import Debug from './Debug';

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
      <h2>Form validated using Formik</h2>
      <Form
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        values={values}
      />
      <Debug values={values} errors={errors} touched={touched} />
    </>
  );
}

const FormFormik = withFormik({
  mapPropsToValues: ({ initialValues }) => {
    return {
      ...initialValues,
    };
  },

  validate: (values, { validate }) =>
    Object.keys(values).reduce((errors, field) => {
      const error = validate[field](values[field]);
      return {
        ...errors,
        ...(error && { [field]: error }),
      };
    }, {}),

  handleSubmit: (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  },

  validateOnChange: false,

  displayName: 'FormFormik',
})(MyForm);

export default FormFormik;
