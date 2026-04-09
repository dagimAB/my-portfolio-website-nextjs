export default function Services() {
  return (
    <section
      id="services"
      className="services section custom-section-shadow py-5"
    >
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center mb-5">
          <h2>My Services</h2>
          <p className="lead text-muted">
            I offer a comprehensive range of services to help businesses
            establish a strong online presence and achieve their digital goals.
          </p>
        </div>
        <div className="row gy-4 justify-content-center">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-card custom-card-shadow text-center p-4 h-100">
              <div className="service-icon-wrapper mb-4 mx-auto">
                <i className="bi bi-code-slash fs-1 custom-icon-color"></i>
              </div>
              <h4 className="title mb-3">Web Development</h4>
              <p className="description text-muted">
                Building responsive, high-performance websites and web
                applications using the latest technologies.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-card custom-card-shadow text-center p-4 h-100">
              <div className="service-icon-wrapper mb-4 mx-auto">
                <i className="bi bi-search fs-1 custom-icon-color-2"></i>
              </div>
              <h4 className="title mb-3">SEO Optimization</h4>
              <p className="description text-muted">
                Improving website visibility and search engine rankings through
                proven SEO strategies.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-card custom-card-shadow text-center p-4 h-100">
              <div className="service-icon-wrapper mb-4 mx-auto">
                <i className="bi bi-cart-fill fs-1 custom-icon-color-3"></i>
              </div>
              <h4 className="title mb-3">E-commerce Solutions</h4>
              <p className="description text-muted">
                Building online stores with secure payment processing and
                inventory management.
              </p>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-card custom-card-shadow text-center p-4 h-100">
                <div className="service-icon-wrapper mb-4 mx-auto">
                  <i className="bi bi-cloud-upload-fill fs-1 custom-icon-color-4"></i>
                </div>
                <h4 className="title mb-3">Data & Cloud Deployment</h4>
                <p className="description text-muted">
                  Setting up and managing secure databases (SQL/NoSQL) and
                  deploying applications to cloud services like Vercel or
                  Firebase.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row gy-4 justify-content-center mt-4"></div>
      </div>
    </section>
  );
}
