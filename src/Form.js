import React from 'react';

function Form({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values,
}) {
  return (
    <div>
      <div>
        For the form to be valid:
        <ul>
          <li>All fields must be filled</li>
          <li>First and last name must be at least three characters</li>
          <li>Age must be between 18 and 99</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="first-name-input">
            First Name *
            <input
              type="text"
              className="form-control"
              id="first-name-input"
              placeholder="Enter first name"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="firstName"
              required
            />
            {touched.firstName && errors.firstName}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="last-name-input">
            Last name *
            <input
              type="text"
              className="form-control"
              id="last-name-input"
              placeholder="Enter last name"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              name="lastName"
              required
            />
            {touched.lastName && errors.lastName}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email address *
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              required
            />
            {touched.email && errors.email}
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="age">
            Age *
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
              value={values.age || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              name="age"
              required
            />
            {touched.age && errors.age}
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
