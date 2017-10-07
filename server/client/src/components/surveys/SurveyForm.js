import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmail';

import SurveyField from './SurveyField';

const FIELDS = [
  {
    label: 'Survey Title',
    defaultText: 'Give your survey a neat title!',
    name: 'title',
    noValueError: ' You Must Provide a Title',
  },
  {
    label: 'Subject Line',
    defaultText: 'The email subject your recipients will see',
    name: 'subject',
    noValueError: ' You Must Provide a Subject Line',
  },
  {
    label: 'Message Body',
    defaultText: 'Introduce this survey and ask a yes or no question',
    name: 'body',
    noValueError: ' You Must Provide an Email Body',
  },
  {
    label: 'Recipients List',
    defaultText: 'Comma separated email list',
    name: 'emails',
    noValueError: ' You Must Provide At Least One Email',
  },
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name, defaultText }) => {
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
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

  errors.emails = validateEmails(values.emails || '');

  _.each(FIELDS, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm);
