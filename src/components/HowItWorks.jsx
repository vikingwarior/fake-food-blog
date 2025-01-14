import { appScreens } from "../utils/constants";

const HowItWorks = () => {
  const [appScreen1, appScreen2, appScreen3] = appScreens;
  return (
    <section className="how-it-works">
      <div className="container">
        <p className="sub-heading">How It Works</p>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
        <div className="app-feature-container margin-top-xl">
          <div className="grid grid--2-cols">
            <div className="app-feature-text">
              <p>01</p>
              <h3 className="heading-tertiary">
                Tell us what you like
                <br />
                (and what not)
              </h3>
              <span>
                Never again waste time thinking about what to eat! Omnifood AI
                will create a 100% personalized weekly meal plan just for you.
                It makes sure you get all the nutrients and vitamins you need,
                no matter what diet you follow!
              </span>
            </div>
            <div className="feature-image-container">
              <img
                src={appScreen1}
                className="app-feature-image"
                alt="A Phone screenshot showing the App feature"
              />
            </div>
          </div>
          <div className="grid grid--2-cols">
            <div className="feature-image-container">
              <img
                src={appScreen2}
                className="app-feature-image"
                alt="A Phone screenshot showing the App feature"
              />
            </div>
            <div className="app-feature-text">
              <p>02</p>
              <h3 className="heading-tertiary">
                Approve your weekly meal plan
              </h3>
              <span>
                Once per week, approve the meal plan generated for you by
                Omnifood AI. You can change ingredients, swap entire meals, or
                even add your own recipes.
              </span>
            </div>
          </div>
          <div className="grid grid--2-cols">
            <div className="app-feature-text">
              <p>03</p>
              <h3 className="heading-tertiary">
                Receive meals at convenient time
              </h3>
              <span>
                Best chefs in town will cook your selected meal every day, and
                we will deliver it to your door whenever works best for you. You
                can change delivery schedule and address daily!
              </span>
            </div>
            <div className="feature-image-container">
              <img
                src={appScreen3}
                className="app-feature-image"
                alt="A Phone screenshot showing the App feature"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
