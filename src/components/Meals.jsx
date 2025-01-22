import { mealImages, mealOptions } from "../utils/constants";

const Meals = () => {
  return (
    <section className="meals-section container page-section">
      <p className="sub-heading">Meals</p>
      <h2 className="heading-secondary ">
        Omnifood AI chooses from 5,000+ recipes
      </h2>
      <div className="grid grid--3-cols margin-top-xl">
        {mealImages.map(({ img, mealName, categories, nutritionalInfo }) => (
          <div key={mealName} className="meal-card">
            <img src={img} className="meal-img" alt={mealName} />
            <div className="meal-card-text-content">
              <div className="meal-categories">
                {categories.map((categoryName) => (
                  <span
                    key={mealName + "-meal-card-category-" + categoryName}
                    className={"category-name tag " + categoryName}
                  >
                    {categoryName}
                  </span>
                ))}
              </div>
              <p className="meal-name">{mealName}</p>
              <ul className="nutritional-info">
                {nutritionalInfo.map(({ metricKey, metricValue, iconId }) => (
                  <li className="" key={`${mealName}-${metricKey}`}>
                    <ion-icon name={iconId} class="meal-icon"></ion-icon>
                    <span>{metricValue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="meal-types-card">
          <h3 className="heading-tertiary">
            Works with any diet
          </h3>  
          <ul className="meal-types-list clean-list margin-top-lg">
            {mealOptions.map((mealType) => (
              <li key={"meal-type-" + mealType}>
                <ion-icon class="meal-type meal-icon" name="checkmark-outline"></ion-icon>
                <span className="meal-type">{mealType}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="more-recipes margin-top-md">
        <a href="#" className="link">
            See all recipies &rarr;
        </a>
      </div>
    </section>
  );
};

export default Meals;
