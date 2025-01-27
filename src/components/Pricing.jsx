import { mealSubscriptionPlans } from "../utils/constants";

const Pricing = () => {
  return (
    <section className="pricing page-section">
      <div className="container">
        <p className="sub-heading">Pricing</p>
        <h2 className="heading-secondary ">
          Eat well without breaking the bank
        </h2>
      </div>
      <div className="grid grid--2-cols margin-top-xl">
        {mealSubscriptionPlans.map(
          ({ planName, pricing, features, pricePerMeal }) => (
            <div key={`${planName}-meal-plan-card`} className="pricing-card">
              <header className="plan-header">
                <p className="plan-name sub-heading">{planName}</p>
                <p className="plan-price heading-primary">
                  <span>$</span>
                  {pricing}
                </p>
                <p className="pricing-summary margin-top-xs">
                  per month. That's just ~${pricePerMeal} per meal!
                </p>
              </header>
              <ul className="subscription-features-list clean-list margin-top-md">
                {features.map(({ featureText, iconName }) => (
                  <li key={"subscription-feature-" + featureText}>
                    <ion-icon class="meal-icon" name={iconName}></ion-icon>
                    <span className="meal-type">{featureText}</span>
                  </li>
                ))}
                <a href="#" className="btn btn--main margin-top-lg">
            Start Eating Well
          </a>
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Pricing;