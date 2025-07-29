import React from "react";
import "../styles/Pricing.css";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "$29/month",
    features: [
      "Up to 10 job postings",
      "Basic AI matching",
      "Email support",
      "Standard analytics",
    ],
    button: "Get Started",
    highlight: false,
  },
  {
    name: "Professional",
    price: "$79/month",
    features: [
      "Unlimited job postings",
      "Advanced AI matching",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
    ],
    button: "Get Started",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Dedicated support",
      "Custom analytics",
      "SLA guarantee",
    ],
    button: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-content">
        <h2 className="pricing-title">Simple Pricing</h2>
        <p className="pricing-description">
          Choose the plan that fits your needs
        </p>
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            >
              {plan.badge && <div className="badge">{plan.badge}</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">{plan.price}</div>
              <ul className="plan-features">
                {plan.features.map((f, idx) => (
                  <li key={idx}>
                    <FaCheck className="check-icon" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="plan-button">
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
