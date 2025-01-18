import { featuredBrandLogos } from "../utils/constants";

const FeaturedIn = () => {
  return (
    <section className="featured">
      <div className="container margin-top-xl">
        <h2 className="featured-in-heading sub-heading">As Featured In</h2>
        <div className="brand-logos-container margin-top-md">
          {featuredBrandLogos.map(({ logo, alt }) => (
            <img key={alt} className="brand-logo" src={logo} alt={alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;