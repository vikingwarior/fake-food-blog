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
    categories: ["vegetarian"],
    nutritionalInfo: [
      {
        metricKey: "calories",
        metricValue: "Calories: 650",
        iconId: "flame-outline",
      },
      {
        metricKey: "nutriScore",
        metricValue: "Nutri Score: 74",
        iconId: "restaurant-outline",
      },
      { metricKey: "rating", metricValue: "4.9 (537)", iconId: "star-outline" },
    ],
  },
  {
    img: meal2,
    mealName: "Avocado Salad",
    categories: ["vegan", "paleo"],
    nutritionalInfo: [
      {
        metricKey: "calories",
        metricValue: "Calories: 400",
        iconId: "flame-outline",
      },
      {
        metricKey: "nutriScore",
        metricValue: "Nutri Score: 92",
        iconId: "restaurant-outline",
      },
      { metricKey: "rating", metricValue: "4.8 (441)", iconId: "star-outline" },
    ],
  },
];

import benImg from "/assets/img/customers/ben.jpg";
import daveImg from "/assets/img/customers/dave.jpg";
import hannahImg from "/assets/img/customers/hannah.jpg";
import steveImg from "/assets/img/customers/steve.jpg";

export const testimonials = [
  {
    customerId: "customer-testimonial-ben",
    customerName: "Ben Hadley",
    testimonial:
      "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    customerImg: benImg,
  },
  {
    customerId: "customer-testimonial-dave",
    customerName: "Dave Bryson",
    testimonial:
      "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
    customerImg: daveImg,
  },
  {
    customerId: "customer-testimonial-hannah",
    customerName: "Hannah Smith",
    testimonial:
      "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
    customerImg: hannahImg,
  },
  {
    customerId: "customer-testimonial-steve",
    customerName: "Steve Miller",
    testimonial:
      "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    customerImg: steveImg,
  },
];

import gallery1 from "/assets/img/gallery/gallery-1.jpg";
import gallery2 from "/assets/img/gallery/gallery-2.jpg";
import gallery3 from "/assets/img/gallery/gallery-3.jpg";
import gallery4 from "/assets/img/gallery/gallery-4.jpg";
import gallery5 from "/assets/img/gallery/gallery-5.jpg";
import gallery6 from "/assets/img/gallery/gallery-6.jpg";
import gallery7 from "/assets/img/gallery/gallery-7.jpg";
import gallery8 from "/assets/img/gallery/gallery-8.jpg";
import gallery9 from "/assets/img/gallery/gallery-9.jpg";
import gallery10 from "/assets/img/gallery/gallery-10.jpg";
import gallery11 from "/assets/img/gallery/gallery-11.jpg";
import gallery12 from "/assets/img/gallery/gallery-12.jpg";

export const foodGallery = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
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

export const mealOptions = [
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Gluten-free",
  "Lactose-free",
  "Keto",
  "Paleo",
  "Low FODMAP",
  "Kid-friendly",
];

export const mealSubscriptionPlans = [
  {
    planName: "Starter",
    pricing: 399,
    pricePerMeal:13,
    features: [
        "1 meal per day",
        "Order times are between 11am and 9pm",
        "Delivery is free",
    ],
},
{
    planName: "Complete",
    pricing: 649,
    pricePerMeal: 11,
    features: [
      "2 meal2 per day",
      "Order 24/7",
      "Delivery is free",
      "Get access to latest recipes",
    ],
  },
];
