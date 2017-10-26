import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmail';
import formFields from './formFields';

import SurveyField from './SurveyField';


class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, defaultText }) => {
      return (
        <Field
          component={SurveyField}
          type="text"
          label={label}
          name={name}
          defaultText={defaultText}
          key={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="grey btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="btn-flat teal white-text right">
            <i className="material-icons right">navigate_next</i>
            Next
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
