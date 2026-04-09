import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about section bg-light py-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-4 col-md-5 d-flex justify-content-center mb-4 mb-md-0">
            <Image
              src="/assets/img/my-profile-img.jpg"
              className="img-fluid rounded-circle shadow-lg"
              alt="Dagim Abraham"
              width={250}
              height={250}
              style={{ objectFit: "cover", border: "6px solid #fff" }}
            />
          </div>

          <div className="col-lg-8 col-md-7">
            <div
              className="p-4 rounded-3 h-100 custom-about-bg"
              style={
                {
                  "--bs-bg-opacity": 0.75,
                  background: "linear-gradient(to right, #e0e0e0, #f8f8f8)",
                } as React.CSSProperties
              }
            >
              <h2 className="section-title text-md-start mb-3">About Me</h2>

              <p className="lead text-md-start mb-4">
                I'm Dagim Abraham, a 23-year-old Full-Stack Engineer with a
                passion for building modern, scalable web and mobile
                applications. As a 4th year Software Engineering student at UV,
                I am actively seeking opportunities to apply my technical skills
                to real-world challenges.
              </p>
              <p className="lead text-md-start mb-4">
                I primarily work with the MERN stack (MongoDB, Express, React,
                Node.js) for robust backends and dynamic front-ends, and I
                specialize in cross-platform mobile development using Flutter. I
                focus on writing clean, optimized, and readable code.
              </p>

              <div className="d-flex justify-content-start flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/1yQP64M8cFOJ07IiVhGv5KS8YovaQkbqS/view?usp=sharing"
                  className="btn btn-outline-dark btn-lg shadow-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-eye me-2"></i> View CV
                </a>
                <a
                  href="https://t.me/dgm_abr"
                  className="btn btn-primary btn-lg custom-hire-btn shadow-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-send-fill me-2"></i> Message Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
