/********************/
/* Media*/
/********************/

import hImg from "/assets/img/hero.png";
export const heroImg = hImg;

import cui1 from "/assets/img/customers/customer-1.jpg";
import cui2 from "/assets/img/customers/customer-2.jpg";
import cui3 from "/assets/img/customers/customer-3.jpg";
import cui4 from "/assets/img/customers/customer-4.jpg";
import cui5 from "/assets/img/customers/customer-5.jpg";
import cui6 from "/assets/img/customers/customer-6.jpg";

export const customerIcons = [cui1, cui2, cui3, cui4, cui5, cui6];

import logo from "/assets/img/omnifood-logo.png";
export const ofLogo = logo;

import appScreen1 from "/assets/img/app/app-screen-1.png";
import appScreen2 from "/assets/img/app/app-screen-2.png";
import appScreen3 from "/assets/img/app/app-screen-3.png";
export const appScreens = [appScreen1, appScreen2, appScreen3];

import businessInsider from "/assets/img/logos/business-insider.png";
import forbes from "/assets/img/logos/forbes.png";
import techCrunch from "/assets/img/logos/techcrunch.png";
import newYorkTimes from "/assets/img/logos/the-new-york-times.png";
import usaToday from "/assets/img/logos/usa-today.png";

export const featuredBrandLogos = [
  { logo: techCrunch, alt: "techcrunch" },
  { logo: businessInsider, alt: "business" },
  { logo: newYorkTimes, alt: "the-new-york-times" },
  { logo: forbes, alt: "forbes" },
  { logo: usaToday, alt: "usa-today" },
];

import meal1 from "/assets/img/meals/meal-1.jpg";
import meal2 from "/assets/img/meals/meal-2.jpg";

export const mealImages = [
  {
    img: meal1,
    mealName: "Japanese Gyozas",
    categories: ["Vegetarian"],
    nutritionalInfo: [
      { metricKey: "calories", metricValue: 650, iconId: "flame-outline" },
      { metricKey: "nutriScore", metricValue: 74, iconId: "restaurant-outline" },
      { metricKey: "rating", metricValue: "4.9 (537)", iconId: "star-outline" },
    ],
  },
  {
    img: meal2,
    mealName: "Avocado Salad",
    categories: ["Vegan", "Paleo"],
    nutritionalInfo: [
      { metricKey: "calories", metricValue: 400, iconId: "flame-outline" },
      { metricKey: "nutriScore", metricValue: 92, iconId: "restaurant-outline" },
      { metricKey: "rating", metricValue: "4.8 (441)", iconId: "star-outline" },
    ],
  },
];

/********************/
/* Data*/
/********************/

export const headerNavList = [
  "Section-1",
  "Section-2",
  "Section-3",
  "Section-4",
];
