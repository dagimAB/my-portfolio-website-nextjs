export default function Home() {
  const html = `
    <main class="main">
      <!-- Hero Section -->
      <section id="hero" class="hero section dark-background">
        <img src="/assets/img/hero-bg.jpg" alt="" data-aos="fade-in" class="" />

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <h2>Dagim Abraham</h2>
          <p>
            <span
              class="typed"
              data-typed-items="I'm A Freelancer, I'm A Mobile Application Developer, I'm A Full-Stack Developer"
            ></span>
            <span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
          </p>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="about section bg-light py-5">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-4 col-md-5 d-flex justify-content-center mb-4 mb-md-0">
              <img src="/assets/img/my-profile-img.jpg" class="img-fluid rounded-circle shadow-lg" alt="Dagim Abraham" style="width: 250px; height: 250px; object-fit: cover; border: 6px solid #fff;"/>
            </div>

            <div class="col-lg-8 col-md-7">
              <div class="p-4 rounded-3 h-100 custom-about-bg" style="--bs-bg-opacity: 0.75; background: linear-gradient(to right, #e0e0e0, #f8f8f8);">
                <h2 class="section-title text-md-start mb-3">About Me</h2>

                <p class="lead text-md-start mb-4">I'm Dagim Abraham, a 22-year-old Full-Stack Engineer with a passion for building modern, scalable web and mobile applications. As a current UV Student, I am actively seeking opportunities to apply my technical skills to real-world challenges.</p>
                <p class="lead text-md-start mb-4">I primarily work with the MERN stack(MongoDB, Express, React, Node.js) for robust backends and dynamic front-ends, and I specialize in cross-platform mobile development using Flutter. I focus on writing clean, optimized and readable code.</p>

                <div class="d-flex justify-content-start flex-wrap gap-3">
                  <a href="/assets/docs/your-cv.pdf" class="btn btn-outline-dark btn-lg shadow-sm" download>
                    <i class="bi bi-download me-2"></i> Download CV
                  </a>
                  <a href="#contact" class="btn btn-primary btn-lg custom-hire-btn shadow-sm">
                    <i class="bi bi-send-fill me-2"></i> Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section id="stats" class="stats section py-5">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">

            <div class="col-lg-3 col-md-6">
                <div class="stats-item stats-card-shadow">
                    <i class="bi bi-journal-richtext stats-icon-color-1"></i>
                    <span
                        data-purecounter-start="0"
                        data-purecounter-end="15"
                        data-purecounter-duration="1"
                        class="purecounter"
                    ></span>
                    <p>
                        <strong>Projects Delivered</strong> 
                        <span>Full-Stack & Frontend Solutions</span>
                    </p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="stats-item stats-card-shadow">
                    <i class="bi bi-emoji-smile stats-icon-color-2"></i>
                    <span
                        data-purecounter-start="0"
                        data-purecounter-end="10"
                        data-purecounter-duration="1"
                        class="purecounter"
                    ></span>
                    <p>
                        <strong>Happy Clients</strong>
                        <span>Long-term, Satisfied Partnerships</span>
                    </p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="stats-item stats-card-shadow">
                    <i class="bi bi-laptop stats-icon-color-3"></i>
                    <span
                        data-purecounter-start="0"
                        data-purecounter-end="2500"
                        data-purecounter-duration="1"
                        class="purecounter"
                    ></span>
                    <p>
                        <strong>Hours Coded</strong>
                        <span>Dedicated to clean, performant logic</span>
                    </p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6">
                <div class="stats-item stats-card-shadow">
                    <i class="bi bi-infinity stats-icon-color-4"></i>
                    <span
                        data-purecounter-start="0"
                        data-purecounter-end="7"
                        data-purecounter-duration="1"
                        class="purecounter"
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
      <!-- /Stats Section -->

      <!-- Skills Section -->
      <section id="skills" class="skills section bg-light py-5">
        <div class="container" data-aos="fade-up">
          <div class="section-title text-center mb-5">
            <h2>My Skills</h2>
            <p class="lead text-muted">
              I've developed expertise in various technologies and tools
              throughout my career. Here's a snapshot of my technical skills and
              proficiency levels.
            </p>
          </div>
          <div class="row skills-content justify-content-center">
            <div class="col-lg-10">
              <div class="row">
                <div class="col-md-6 mb-4">
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-filetype-jsx fs-4 me-2 text-primary"></i>
                    <h6 class="mb-0 me-auto">React.js</h6>
                    <span class="fw-bold">90%</span>
                  </div>
                  <div class="progress" style="height: 10px">
                    <div
                      class="progress-bar custom-gradient-progress"
                      role="progressbar"
                      style="width: 90%"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div class="col-md-6 mb-4">
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-filetype-jsx fs-4 me-2 text-info"></i>
                    <h6 class="mb-0 me-auto">Next.js</h6>
                    <span class="fw-bold">85%</span>
                  </div>
                  <div class="progress" style="height: 10px">
                    <div
                      class="progress-bar custom-gradient-progress"
                      role="progressbar"
                      style="width: 85%"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div class="col-md-6 mb-4">
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-phone fs-4 me-2 text-primary"></i>
                    <h6 class="mb-0 me-auto">Flutter</h6>
                    <span class="fw-bold">90%</span>
                  </div>
                  <div class="progress" style="height: 10px">
                    <div
                      class="progress-bar custom-gradient-progress"
                      role="progressbar"
                      style="width: 90%"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div class="col-md-6 mb-4">
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-filetype-js fs-4 me-2 text-info"></i>
                    <h6 class="mb-0 me-auto">JavaScript</h6>
                    <span class="fw-bold">80%</span>
                  </div>
                  <div class="progress" style="height: 10px">
                    <div
                      class="progress-bar custom-gradient-progress"
                      role="progressbar"
                      style="width: 80%"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div class="col-md-6 mb-4">
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-filetype-css fs-4 me-2 text-primary"></i>
                    <h6 class="mb-0 me-auto">Tailwind CSS</h6>
                    <span class="fw-bold">95%</span>
                  </div>
                  <div class="progress" style="height: 10px">
                    <div
                      class="progress-bar custom-gradient-progress"
                      role="progressbar"
                      style="width: 95%"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div class="col-md-6 mb-4">
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-currency-dollar fs-4 me-2 text-success"></i>
                    <h6 class="mb-0 me-auto">Django</h6>
                    <span class="fw-bold">85%</span>
                  </div>
                  <div class="progress" style="height: 10px">
                    <div
                      class="progress-bar custom-gradient-progress"
                      role="progressbar"
                      style="width: 85%"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div class="col-md-6 mb-4">
                  <div class="d-flex align-items-center mb-2">
                    <i class="bi bi-diagram-2 fs-4 me-2 text-success"></i>
                    <h6 class="mb-0 me-auto">Node.js</h6>
                    <span class="fw-bold">75%</span>
                  </div>
                  <div class="progress" style="height: 10px">
                    <div
                      class="progress-bar custom-gradient-progress"
                      role="progressbar"
                      style="width: 75%"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-5">
            <div class="col-lg-10">
              <div class="card shadow-sm border-0 p-4 custom-other-tech-card">
                <h4 class="mb-4">Other Technologies</h4>
                <div class="d-flex flex-wrap gap-2">
                  <span class="badge bg-secondary text-white py-2 px-3 fs-6"
                    >JavaScript</span
                  >
                  <span class="badge bg-secondary text-white py-2 px-3 fs-6"
                    >HTML5</span
                  >
                  <span class="badge bg-secondary text-white py-2 px-3 fs-6"
                    >CSS3</span
                  >
                  <span class="badge bg-secondary text-white py-2 px-3 fs-6"
                    >Express</span
                  >
                  <span class="badge bg-secondary text-white py-2 px-3 fs-6"
                    >shadcn/ui</span
                  >
                  <span class="badge bg-secondary text-white py-2 px-3 fs-6"
                    >Python</span
                  >
                  <span class="badge bg-secondary text-white py-2 px-3 fs-6"
                    >Firebase</span
                  >
                  <span class="badge bg-secondary text-white py-2 px-3 fs-6"
                    >SQL</span
                  >
                  <span class="badge bg-secondary text-white py-2 px-3 fs-6"
                    >Material UI</span
                  >
                  <span class="badge bg-secondary text-white py-2 px-3 fs-6"
                    >REST API</span
                  >
                  <span class="badge bg-secondary text-white py-2 px-3 fs-6"
                    >Figma</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /Skills Section -->

      <!-- Portfolio Section -->
      <section id="portfolio" class="portfolio section light-background p-5 custom-shadow-elevate">
        <div class="container section-title text-center mb-5" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p class="lead text-muted">Selected projects — live links included.</p>
        </div>
        <div class="container">
          <div class="row gy-4 justify-content-center">
            <div class="col-lg-4 col-md-6 portfolio-item">
              <div class="portfolio-content h-100" style="cursor: pointer" onclick="window.open('https://dagim-abraham-todo-list.netlify.app/','_blank')">
                <img src="/assets/img/portfolio/app-1.jpg" class="img-fluid" alt="Todo List" />
                <div class="portfolio-info">
                  <h4>Todo List</h4>
                  <p>React / Netlify</p>
                  <a href="https://dagim-abraham-todo-list.netlify.app/" target="_blank" rel="noopener noreferrer" class="details-link">Visit</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item">
              <div class="portfolio-content h-100" style="cursor: pointer" onclick="window.open('https://dagimabraham-react-api.netlify.app/','_blank')">
                <img src="/assets/img/portfolio/product-1.jpg" class="img-fluid" alt="Apple Home Clone" />
                <div class="portfolio-info">
                  <h4>Apple Home Page Clone</h4>
                  <p>React / Netlify</p>
                  <a href="https://dagimabraham-react-api.netlify.app/" target="_blank" rel="noopener noreferrer" class="details-link">Visit</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item">
              <div class="portfolio-content h-100" style="cursor: pointer" onclick="window.open('https://dagim-abraham-nextjs.netlify.app/','_blank')">
                <img src="/assets/img/portfolio/app-2.jpg" class="img-fluid" alt="Amazon Clone" />
                <div class="portfolio-info">
                  <h4>Amazon Clone (Front-end)</h4>
                  <p>Next.js / Netlify</p>
                  <a href="https://dagim-abraham-nextjs.netlify.app/" target="_blank" rel="noopener noreferrer" class="details-link">Visit</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item">
              <div class="portfolio-content h-100" style="cursor: pointer" onclick="window.open('https://dagimabraham-react-netfliks-clone.netlify.app/','_blank')">
                <img src="data:image/png;base64,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" class="img-fluid" alt="Netflix Clone" />
                <div class="portfolio-info">
                  <h4>Netflix Clone</h4>
                  <p>React / Netlify</p>
                  <a href="https://dagimabraham-react-netfliks-clone.netlify.app/" target="_blank" rel="noopener noreferrer" class="details-link">Visit</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item">
              <div class="portfolio-content h-100" style="cursor: pointer" onclick="window.open('https://dagimabraham-ezycart.netlify.app/','_blank')">
                <img src="/assets/img/portfolio/product-3.jpg" class="img-fluid" alt="EzyCart" />
                <div class="portfolio-info">
                  <h4>EzyCart</h4>
                  <p>E-commerce / Netlify</p>
                  <a href="https://dagimabraham-ezycart.netlify.app/" target="_blank" rel="noopener noreferrer" class="details-link">Visit</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="services section custom-section-shadow py-5">
        <div class="container" data-aos="fade-up">
          <div class="section-title text-center mb-5">
            <h2>My Services</h2>
            <p class="lead text-muted">
              I offer a comprehensive range of services to help businesses
              establish a strong online presence and achieve their digital
              goals.
            </p>
          </div>
          <div class="row gy-4 justify-content-center">
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="service-card custom-card-shadow text-center p-4 h-100">
                <div class="service-icon-wrapper mb-4 mx-auto">
                  <i class="bi bi-code-slash fs-1 custom-icon-color"></i>
                </div>
                <h4 class="title mb-3">Web Development</h4>
                <p class="description text-muted">Building responsive, high-performance websites and web applications using the latest technologies.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="service-card custom-card-shadow text-center p-4 h-100">
                <div class="service-icon-wrapper mb-4 mx-auto">
                  <i class="bi bi-search fs-1 custom-icon-color-2"></i>
                </div>
                <h4 class="title mb-3">SEO Optimization</h4>
                <p class="description text-muted">Improving website visibility and search engine rankings through proven SEO strategies.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="service-card custom-card-shadow text-center p-4 h-100">
                <div class="service-icon-wrapper mb-4 mx-auto">
                  <i class="bi bi-cart-fill fs-1 custom-icon-color-3"></i>
                </div>
                <h4 class="title mb-3">E-commerce Solutions</h4>
                <p class="description text-muted">Building online stores with secure payment processing and inventory management.</p>
              </div>
            </div>
            <div class="row gy-4 justify-content-center">
              <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div class="service-card custom-card-shadow text-center p-4 h-100">
                  <div class="service-icon-wrapper mb-4 mx-auto"><i class="bi bi-cloud-upload-fill fs-1 custom-icon-color-4"></i></div>
                  <h4 class="title mb-3">Data & Cloud Deployment</h4>
                  <p class="description text-muted">Setting up and managing secure databases (SQL/NoSQL) and deploying applications to cloud services like Vercel or Firebase.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row gy-4 justify-content-center mt-4"></div>
        </div>
      </section>
      <!-- /Services Section -->

      <!-- Testimonials Section -->
      <section id="testimonials" class="testimonials section custom-section-shadow py-5">
        <div class="container section-title text-center mb-5" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p class="lead text-muted">Hear from clients about their experience working with a dedicated full-stack developer.</p>
        </div>
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper init-swiper">
            <script type="application/json" class="swiper-config">{
                    "loop": true,
                    "speed": 600,
                    "autoplay": {"delay": 5000},
                    "slidesPerView": "auto",
                    "pagination": {"el": ".swiper-pagination","type": "bullets","clickable": true},
                    "breakpoints": {"320": {"slidesPerView": 1,"spaceBetween": 40},"1200": {"slidesPerView": 3,"spaceBetween": 30}}
                }</script>
            <div class="swiper-wrapper">

              <!-- Slide 1 -->
              <div class="swiper-slide">
                <div class="testimonial-item custom-testimonial-shadow d-flex align-items-center">
                  <div class="testimonial-left text-center me-4">
                    <img src="/assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="Saul Goodman" />
                    <div class="author-name mt-2">Saul Goodman</div>
                    <div class="author-role">Ceo &amp; Founder</div>
                  </div>
                  <div class="testimonial-content">
                    <p class="testimonial-text"><i class="bi bi-quote quote-icon-left"></i> Dagim delivered an incredibly complex e-commerce application on time and under budget. His expertise in React and Node.js was evident in the clean, scalable code. Highly recommended for full-stack projects. <i class="bi bi-quote quote-icon-right"></i></p>
                  </div>
                  <button class="author-toggle btn btn-sm d-md-none">Info</button>
                </div>
              </div>

              <!-- Slide 2 -->
              <div class="swiper-slide">
                <div class="testimonial-item custom-testimonial-shadow d-flex align-items-center">
                  <div class="testimonial-left text-center me-4">
                    <img src="/assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="Sara Wilsson" />
                    <div class="author-name mt-2">Sara Wilsson</div>
                    <div class="author-role">Designer</div>
                  </div>
                  <div class="testimonial-content">
                    <p class="testimonial-text"><i class="bi bi-quote quote-icon-left"></i> Sara Wilsson is a true professional. The website redesign using Tailwind CSS was flawless and lightning-fast. The attention to responsive detail was excellent. I look forward to our next collaboration. <i class="bi bi-quote quote-icon-right"></i></p>
                  </div>
                  <button class="author-toggle btn btn-sm d-md-none">Info</button>
                </div>
              </div>

              <!-- Slide 3 -->
              <div class="swiper-slide">
                <div class="testimonial-item custom-testimonial-shadow d-flex align-items-center">
                  <div class="testimonial-left text-center me-4">
                    <img src="/assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="Jena Karlis" />
                    <div class="author-name mt-2">Jena Karlis</div>
                    <div class="author-role">Store Owner</div>
                  </div>
                  <div class="testimonial-content">
                    <p class="testimonial-text"><i class="bi bi-quote quote-icon-left"></i> The Django API developed by Dagim was robust and perfectly documented. It integrated seamlessly with our existing mobile app. His backend solutions are reliable and high-quality. <i class="bi bi-quote quote-icon-right"></i></p>
                  </div>
                  <button class="author-toggle btn btn-sm d-md-none">Info</button>
                </div>
              </div>

              <!-- Slide 4 -->
              <div class="swiper-slide">
                <div class="testimonial-item custom-testimonial-shadow d-flex align-items-center">
                  <div class="testimonial-left text-center me-4">
                    <img src="/assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="Matt Brandon" />
                    <div class="author-name mt-2">Matt Brandon</div>
                    <div class="author-role">Freelancer</div>
                  </div>
                  <div class="testimonial-content">
                    <p class="testimonial-text"><i class="bi bi-quote quote-icon-left"></i> I hired Dagim for a performance audit on my Next.js application. He identified several bottlenecks and optimized the code, resulting in a 40% improvement in load speed. Exceptional results! <i class="bi bi-quote quote-icon-right"></i></p>
                  </div>
                  <button class="author-toggle btn btn-sm d-md-none">Info</button>
                </div>
              </div>

              <!-- Slide 5 -->
              <div class="swiper-slide">
                <div class="testimonial-item custom-testimonial-shadow d-flex align-items-center">
                  <div class="testimonial-left text-center me-4">
                    <img src="/assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="John Larson" />
                    <div class="author-name mt-2">John Larson</div>
                    <div class="author-role">Entrepreneur</div>
                  </div>
                  <div class="testimonial-content">
                    <p class="testimonial-text"><i class="bi bi-quote quote-icon-left"></i> Dagim is a detail-oriented developer who treats every project with care. From database design to final deployment, the process was smooth and communication was excellent. <i class="bi bi-quote quote-icon-right"></i></p>
                  </div>
                  <button class="author-toggle btn btn-sm d-md-none">Info</button>
                </div>
              </div>

            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <!-- /Testimonials Section -->

      <!-- Contact Section -->
        <div class="container section-title text-center mb-5" data-aos="fade-up">
          <h2 class="display-5 fw-bold text-dark">Contact</h2>
          <p class="text-secondary lead">Let's connect and build something great together.</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-lg-5">
              <div class="info-wrap">
                <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                  <i class="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Addis Ababa Science & Technology University (AASTU), Kilinto, Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <i class="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+251 979 282 367</p>
                  </div>
                </div>

                <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <i class="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>dagimabraham79@gmail.com</p>
                  </div>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.3409151590214!2d38.79093409999999!3d8.8741131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85ab11a51163%3A0x8670c538a7c20c03!2sAddis%20Ababa%20Science%20and%20Technology%20University%20(AASTU)!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set" frameborder="0" style="border: 0; width: 100%; flex-grow: 1; min-height: 270px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              </div>
            </div>

            <div class="col-lg-7">
              <form action="/api/contact" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div class="row gy-4">
                  <div class="col-md-6">
                    <label for="name-field" class="pb-2">Your Name</label>
                    <input type="text" name="name" id="name-field" class="form-control" placeholder="Enter your name" required />
                  </div>

                  <div class="col-md-6">
                    <label for="email-field" class="pb-2">Your Email</label>
                    <input type="email" class="form-control" name="email" id="email-field" placeholder="Enter your email" required />
                  </div>

                  <div class="col-md-12">
                    <label for="subject-field" class="pb-2">Subject</label>
                    <input type="text" class="form-control" name="subject" id="subject-field" placeholder="Project Inquiry, Internship, etc." required />
                  </div>

                  <div class="col-md-12">
                    <label for="message-field" class="pb-2">Message</label>
                    <textarea class="form-control" name="message" rows="8" id="message-field" placeholder="Write your detailed message here..." required></textarea>
                  </div>

                  <div class="col-md-12 text-center">
                    <div class="loading">Sending...</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent successfully! Thank you!</div>

                    <button type="submit" class="btn btn-primary"><i class="bi bi-arrow-right-circle-fill me-2"></i> Send Message</button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  `;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
