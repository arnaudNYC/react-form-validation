import React from 'react';

function Debug({ values, errors, touched }) {
  return (
    <div>
      <code>Values: {JSON.stringify(values)}</code>
      <br />
      <code>Errors: {JSON.stringify(errors)}</code>
      <br />
      <code>Touched: {JSON.stringify(touched)}</code>
      <br />
    </div>
  );
}

export default Debug;
