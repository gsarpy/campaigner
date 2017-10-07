import React from 'react';

export default ({ input, label, defaultText, meta }) => {
  return (
    <div>
      <label>{label}</label>
      <small className="red-text">
        {meta.touched && meta.error}
      </small>
      <input {...input} placeholder={defaultText} />
    </div>
  );
};
