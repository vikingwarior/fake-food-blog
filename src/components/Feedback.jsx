import { foodGallery, testimonials } from "../utils/constants";

const Feedback = () => {
  return (
    <section className="feedback">
      <div className="grid grid--2-cols">
        <div className="testimonials-container">
          <p className="sub-heading">Testimonials</p>
          <h2 className="heading-secondary ">
            Try once and you won't be able to resist
          </h2>
          <div className="testimonials grid grid--2-cols margin-top-xl">
            {testimonials.map(
              ({ customerId, customerName, testimonial, customerImg }) => (
                <figure key={customerId} className="testimonial-card">
                  <img src={customerImg} alt="customer-image" />
                  <blockquote className="testimonial-text margin-top-sm">
                    {testimonial}
                  </blockquote>
                  <p className="customer-name margin-top-xs">
                    &mdash; {customerName}
                  </p>
                </figure>
              )
            )}
          </div>
        </div>
        <div className="image-gallery grid grid--3-cols">
          {foodGallery.map((image, index) => (
            <figure
              key={`food-item-gallery-image-${index}`}
              className="gallery-item"
            >
              <img src={image} alt="food-item-image" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;