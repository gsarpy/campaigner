import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

const surveyStyle = {
  marginTop: '3rem',
};

class SurveyNew extends Component {
  render() {
    return (
      <div style={surveyStyle}>
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;
