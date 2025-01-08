import { customerIcons, heroImg } from "../utils/constants";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="hero-content">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-decription">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#" className="btn btn--main margin-right-sm">
            Start Eating Healthy
          </a>
          <a href="#" className="btn btn--outline">
            Learn More &darr;
          </a>
          <div className="customer-icons">
            <div className="customer-icons-container">
              {customerIcons.map((customerImg, i) => (
                <img
                  src={customerImg}
                  key={`customer-${i}`}
                  alt={`customer ${i} image`}
                />
              ))}
            </div>
            <p>
              <span><u>250,000+</u></span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-container">
          <img
            src={heroImg}
            className="hero-img"
            alt="Women enjoying food, Meals in Bento Boxes, som cuisines stored in bowles"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
