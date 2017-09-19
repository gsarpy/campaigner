import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Billing extends Component {
  render() {
    return (
      <StripeCheckout
        name="Campaigner"
        description="Add 5 credits to your account."
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn-floating btn-small waves-effect waves-light">
          $
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Billing);
