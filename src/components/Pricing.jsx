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
      <div className="grid grid--2-cols">
        {mealSubscriptionPlans.map(
          ({ planName, pricing, features, pricePerMeal }) => (
            <div key={`${planName}-meal-plan-card`} className="pricing-card">
              <header className="plan-header">
                <p className="plan-name">{planName}</p>
                <p className="plan-price">
                  <span>$</span>
                  {pricing}
                </p>
                <p>per month. That's just ~${pricePerMeal} per meal!</p>
              </header>
              <ul className="subscription-features-list clean-list">
                {features.map((subscriptionFeature, index) => (
                  <li key={"subscription-feature-" + subscriptionFeature}>
                    <ion-icon
                      class="meal-icon"
                      name="checkmark-outline"
                    ></ion-icon>
                    <span className="meal-type">{subscriptionFeature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Pricing;
