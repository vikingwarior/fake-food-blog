import { appFeatures } from "../utils/constants";

const Features = () => {
  return (
    <div className="grid grid--4-cols margin-top-xl platform-feature-container">
      {appFeatures.map(({ featureHeadline, featureDescription, iconName }) => (
        <div className="platform-feature" key={"app-feature-" + iconName}>
          <ion-icon class="meal-icon feature-icon" name={iconName}></ion-icon>
          <p className="feature-heading margin-top-sm">{featureHeadline}</p>
          <p className="feature-content margin-top-xs">{featureDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;