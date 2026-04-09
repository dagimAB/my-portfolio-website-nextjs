export default function Stats() {
  return (
    <section id="stats" className="stats section py-5">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item stats-card-shadow">
              <i className="bi bi-journal-richtext stats-icon-color-1"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="15"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Projects Delivered</strong>
                <span>Full-Stack & Frontend Solutions</span>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stats-item stats-card-shadow">
              <i className="bi bi-emoji-smile stats-icon-color-2"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="10"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Happy Clients</strong>
                <span>Long-term, Satisfied Partnerships</span>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stats-item stats-card-shadow">
              <i className="bi bi-laptop stats-icon-color-3"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="2500"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Hours Coded</strong>
                <span>Dedicated to clean, performant logic</span>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="stats-item stats-card-shadow">
              <i className="bi bi-infinity stats-icon-color-4"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="7"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Key Technologies</strong>
                <span>React, Next.js, Node.js, and more</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
