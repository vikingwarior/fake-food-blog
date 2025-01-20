import { mealImages } from "../utils/constants";

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
        <div className="meals-list">Meal</div>
      </div>
    </section>
  );
};

export default Meals;