import React from 'react'

import PropTypes from 'prop-types'

import './pricing-card.css'

const PricingCard = (props) => {
  return (
    <div className="pricing-card-pricing-card freePricingCard">
      <div className="pricing-card-container">
        <h3 className="pricing-card-text">{props.text}</h3>
        <span className="pricing-card-free-plan-description bodySmall">
          {props.freePlanDescription}
        </span>
      </div>
      <div className="pricing-card-container1">
        <span className="pricing-card-text1">
          <span>$</span>
          <span></span>
        </span>
        <span className="pricing-card-free-plan-price">
          {props.freePlanPrice}
        </span>
        <span className="pricing-card-text4">{props.text1}</span>
      </div>
      <div className="pricing-card-container2">
        <div className="pricing-card-container3">
          <span className="pricing-card-text5">{props.text2}</span>
          <span className="bodySmall">{props.freePlanFeatures}</span>
        </div>
        <div className="pricing-card-container4">
          <span className="pricing-card-text6">{props.text3}</span>
          <span className="bodySmall">{props.freePlanFeatures1}</span>
        </div>
        <div className="pricing-card-container5">
          <span className="pricing-card-text7">{props.text4}</span>
          <span className="bodySmall">{props.freePlanFeatures2}</span>
        </div>
        <div className="pricing-card-container6">
          <span className="pricing-card-text8">{props.text5}</span>
          <span className="bodySmall">{props.freePlanFeatures3}</span>
        </div>
      </div>
      <button className="pricing-card-button buttonOutline">
        {props.button}
      </button>
    </div>
  )
}

PricingCard.defaultProps = {
  text3: '✔',
  freePlanFeatures1: 'Limited customization options',
  text2: '✔',
  freePlanDescription: 'Get started with a basic website',
  freePlanFeatures3: 'Basic SEO optimization',
  text: 'Basic',
  freePlanPrice: '50',
  text5: '✔',
  freePlanFeatures2: 'Standard support',
  freePlanFeatures: 'Basic website setup',
  text1: '/ month',
  button: 'Continue with Free',
  text4: '✔',
}

PricingCard.propTypes = {
  text3: PropTypes.string,
  freePlanFeatures1: PropTypes.string,
  text2: PropTypes.string,
  freePlanDescription: PropTypes.string,
  freePlanFeatures3: PropTypes.string,
  text: PropTypes.string,
  freePlanPrice: PropTypes.string,
  text5: PropTypes.string,
  freePlanFeatures2: PropTypes.string,
  freePlanFeatures: PropTypes.string,
  text1: PropTypes.string,
  button: PropTypes.string,
  text4: PropTypes.string,
}

export default PricingCard
