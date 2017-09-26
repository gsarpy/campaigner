import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s6">
            <form
              onSubmit={this.props.handleSubmit(values => console.log(values))}
            >
              <Field
                type="text"
                name="surveyTitle"
                component="input"
                placeholder="Give this survey a name!"
              />
              <button
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
