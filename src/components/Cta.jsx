const Cta = () => {
  return (
    <section className="page-section">
      <div className="container">
        <div className="cta-parent">
          <div className="cta-form-container">
            <h2 className="heading-secondary">Your First Meal is On Us</h2>
            <p className="margin-top-xs">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime.
            </p>
            <h3 className="heading-tertiary margin-top-lg">
             Tell Us About You
            </h3>
            <form action="#" className="margin-top-sm cta-form">
              <div>
                <label htmlFor="full-name">Your Name</label>
                <input type="text" name="name" id="full-name" placeholder="John Doe" required />
              </div>
              <div>
                <label htmlFor="email">Your Email</label>
                <input type="email" name="Email Address" id="email" placeholder="name@example.com"/>
              </div>
              <div>
                <label htmlFor="referrer">Where did you hear about us?</label>
                <select name="Referrer" id="referrer">
                  <option value="">Please select an option</option>
                  <option value="relatives">Friends or Family</option>
                  <option value="youtube">YouTube</option>
                  <option value="podcasts">Podcasts</option>
                  <option value="other">Others</option>
                </select>
              </div>
              <div>
                <button type="submit" className="btn">Eat Healthy!</button>
              </div>
            </form>
          </div>
          <div
            className="cta-image"
            role="image"
            aria-label="woman enjoying omnifood meal"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
