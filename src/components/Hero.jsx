import { heroImg } from "../utils/constants";


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
            needs. We have delivered 250,000+ meals last year!
          </p>
          <a href="#" className="btn">
            Start Eating Healthy
          </a>
          <a href="#" className="btn">
            Learn More &darr;
          </a>
        </div>
        <div className="hero-img-container">
            <img src={heroImg} className="hero-img" alt="Women enjoying food, Meals in Bento Boxes, som cuisines stored in bowles" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
