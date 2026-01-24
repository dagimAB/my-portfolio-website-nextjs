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
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAACUCAMAAAA3b0xFAAAAyVBMVEX///8AAAD+mQD5+fn8/Pz///329vbx8fG2trZzc3Pg4OCdnZ1HR0empqYlJSXAwMBcXFx9fX3q6uoYGBgRERHY2NggICCVlZXR0dH9kADKyspSUlJBQUFqamo7OzsuLi775MCNjY31jwD1lwD6+uz99OmFhYX5+/Tw+fj238H4zIzxsEjvpCvklxHxmwDsiwD2x3/5xnfz05/1oUL699/568r2uXT3ny703qb4nx/74K/8xo/zrlH57df5pjv61Zj3u2b7tGb8rksZieuNAAALA0lEQVR4nO1aa2OiuhZFCaAooig+8C1WOran13psHR1te/3/P+ruPAmIrTre6XzImjlnGgibvbKfCdU0BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWF2wDR/6Pvff/n0C3Pbrfbtmd9MhsmeZYpCU6NLxR3Asg8KVbg6xkEfmFWzhFUqk5gSithuwRtuGK6repgWK65HtM9KPV7MC7YaXG2O+5ScY1qKbCklTXdQgZ8WWO31C8PB92igx+UZQpFUNupDgbloiM/lwFv3MtJaBYDoYg+o9fKtmb1G2xC38f3rVqTjcsFXRant7qyuEbfjXkF9VwGytylNVToi6t1eFAAMUW6toZaFTZjUDpFCcsLyun31Ati9YpMgo+q8f0hWMyTxrmWJNCv5lJolgSxQjN9k0wQT9ca8vV6LV4srkhbK0ozxqd4Ia2Q9SZOjPPq+TX59iBJK56PtCBLc0Esm1eFPW0e3e1yX+S8eraT+eIj+Fkvwn6X4FUuDZPiUqtR555o93IZqLQ/tRfjZR1ZOpcrmkleZTfpXd1EEEroHsvCcJK8hil1h2nf5evWz2VizO2VGV+MVytTEZTk1U94qhQySQSxANuzS2JUtBK8vgSLBC9m4nt2QRh5yJY1aGQ93CJu2ubpIFcLgrG46SV4NdICTqQObvoetbc/4Ip4aV71br+acMZBtxtbsUrFcXXq9HFPeAOvBZ7PYLv8VbkuMYnJI3hInNbjLPsJXhjlYjF2l1qmI/IXN9osssU62SleQ2xwX3LHGU6KIpswXvx9PLWLID8uNTMhuU16FpuPS7SFEY96KV4zS1qEXN/L4mV1U3cL3M5pXjTgYredkUxh8UWvkiEvBkMuzufigvSb48RTokvAY4A/a/H7rSQval2Pr2D3qCugBvMDp9XviehzecJK8WIJ0uLiKqx2j2VeSLOwuOLA4fXK43nCTb5W80RirLJUyl2hy2boPESqSV5shXiSKWfzSuMUrxqNP5N7T9VLLns1uw88xUsXgVfhXRm/IEotN+DAl3kN2HzupmfwMj3bL3FFUrxoyoIeho2LPHHLi5rSHcQJt07yQnHi5Z7STl8QopsFmRdbYGGAT3iBirpfaNWK1e5A1JcUr1JKId7hnOAF4ma1frcnxCV5xSl9xi+JNCEiUcRySebVYgvqVr62l10rD9MF8zd4WePukbgEr9gLY61EehSZU1iwJfPi9eoLXtBCHzeqv8ELaV5mKU/wEkm6EqdJ8ZTQU/DCzYrg5ZzFCyqFk9myXckLae4wQ1iSV1ws4n1A3ICJeiR44ZJyKS9Nao+b/VmreCJvnGsvV0QO7ClrrXFG3rBFs9CVtryCl9BT1L4reGlt0W91A8/UT+b5M3mZgtXQhZ06so/zPBKRlJNVEn54HF9X8Ioj2KHm+01eIlRZFcqoX7GDuPLJi2ArQq4ty7qQl9g3jNk7fo9XmwdXn91O2wu203HXnjh4EXRF/RK8Enn+PF5jNrvi34SX2EHxfaSfii+kZaR4ApFMnMwrl/HyeLSKvlc0Alfx4gmcN0fxfstltJzckK5cw0kelInILPIr3ILD4GJeIjUJnxClpX0FL4svU5fzGiesgJDbbNblmj2oBR7re7l/9tijSAgzr+fVt1IX2FHLZbzEYY7YawivKxJxXrXZrDTjUoBRGQeEGffhoU8ta3L6pNW6kteQ3kXxEUPlDF7SaVaSF0/WTrxrJwsXNOv1ZooXPk7DrxIHSC3KK7klvTC+xHqWiCxXehsR8CkvZJpJXqYoQjQftiUGM2pdoHXUO9LoE05MDSY2aNQvL+OlxzVy5nl2PAI0gq946VaKlzYWT/dtz0ucL5GDo0KjMqxkHN045ORR3HA8O7a0fQUvuYvKpZex/zkvhBDhRU+IquRMwq3H50Ugjv8MF5t4J4rAXnV2Qb5JeZmJo1eOMbqG1/Expjglyjmg6mle4IQ68cNmvQG6VU0df5ooN+rEfyCO6vi/XGNABo16bmzpusN4SYtJZlFl7UHuCHxffml/WErJaYhz4sLneQMBK8KrUSHW0HUd6SgAikAMzAZsm2CKtosHMKUFywC8mg3ykcXFR23toEQSTZMra+fSGHCtL+WlJWIK12eduEPlq/oFWjJ7YRr1KvCEv5pTxyYhxoIbZV/TW5gpRBfYF/yw0ZvRPA6roJM0OO7VhbJe6hi5Kj7UXMxLc2JZvRL+9IWbkC5L1MLnnTQvE3akct4ARTViQJxiG8TbBi0PLlqwcoNAg7lI94sl8CsgCEuCHRnhJzynxnSDd7ckXyyX4i9nKM0r+Op8A9mFWrnSHFbH/PuaN5vFm9YSgcPf7LNxWyfKaXaphcctF+cN0BJpRNxw2K05PrYh2LxVbGuYiG6SP7g8IM4NcirSdE0Xnb3vVMmiNIvJ74UpRWA16AXXPPFFFOtjeZ5n6eKCjs1maJphxHPED/RcyiRpw9RwWIFHkYFOQk7XLSIOa25hq+BpGp1h6pGl32NNomg6jQyNPgIKSN9r4Wnftr3Mz6wo/SM66ytzDANzMmJmaVAtsevpmCWiQ0KC/KvDHcTHfCF0A+n30d2P+cPjP0//efrn8WExiu5NS7OsK75DXwVDi/Zgs+gUL0wMOw/xNA0x/RHJJuBWeIeLDUmcj6iMr+sg9cfz49Nkkn8K8+Em7HTCxT2eb536jHVrWoa2/He+Om0v8fsNiI/oWPqtB0RGSPJhw3h5DfOdfJiPsTZQ8rH/KzCvSX79k9E6ze4i3I82nU5nAghDsBnBJrqN7HMRadt1fvL4c4qj7EbMjNHrr+3oZTWNIG2slg+E1y0EXwCIrJcdLO5hOWVZ5Pdh0OXhmXaPeT3cQvAFGiB49WrXgWjYLfefxdlFUmmOJREFOWSTz3eebyH4IhXASNPFJB+G+fXz6jZC2fIYLyPs3hHkj872VsF7iR6asX3rgLN0Jg8/7yKq2bWmM8jDUDr270+TzgeMX4BXuLqNK1yszP6DZuXJ4/zHKrqeGS2F0X77usEL9YwzLkjdReg7eEHRmS7XLCU/7RajqXZVrBkGVOpotX19C7Gw8GMPlnvu5CfvN0pJlyuEopfdhFfRzeFjO71O0mr5scZFGYwVzvHy7A+d/Hp/W3XPB1nO0TpuECDW5qO7yBD5WvZMIw1y7W6/neOKTJ/P71Zk4hYc8lf0bb+VSbD69TYJY2aTzW6+/bGfRjIbMVkq49HdfvQ+f9iw7gKL2C2pwaMFNFEvf5hHEljR/fypI7V1+Qn45H9f59vRapXZHE9X+9Fy/ro7bCbSc5PNcsVm7w9hZ24Y35DmOag1jP1zmGBGLbBZvx12H4v5z+2IYzlfPO8Ob+tNmJrceVrs2e4HaSOoi6tbdTJX8yKhNH1/S6sqVE7heEI+xC0ZMlg3ZXx0nl60b7WX4AdxBuXnWOdz8PYsJVIDGfvJ5jtajUwYZLv5fphcSG0SQo85lTZZYKaXhxFtFP8C0HMBY/pjDp3Qudw6+Yf3F5xaUBxK8GN0h3vr72QTg7Z4ZJFXy+d/N19yCteHxXal8U4+FmQQSn94S/k5DF6epqPl4uMNk5tkuN7m8QBVYD+lj6QMk6L5N4FkyGi6hyr1vvg4PG6eiIHCcPP48PFruRztcZd84SnYXwAwwT3tkoBedEexp/9ErDAg9I3V6VrAxgPRve+R7gahdLPjgz8OQ9TVuMeVbmp/bRApKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKPwPGm7SVQc1INMAAAAASUVORK5CYII=" class="img-fluid" alt="Apple Home Clone" />
                <div class="portfolio-info">
                  <h4>Apple Home Page Clone</h4>
                  <p>React / Netlify</p>
                  <a href="https://dagimabraham-react-api.netlify.app/" target="_blank" rel="noopener noreferrer" class="details-link">Visit</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item">
              <div class="portfolio-content h-100" style="cursor: pointer" onclick="window.open('https://dagim-abraham-nextjs.netlify.app/','_blank')">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAAAaVBMVEX///8AAAD8/Pz39/cfHx/R0dHw8PDd3d1aWlqrq6vl5eXt7e18fHzHx8fNzc3Kyspzc3OVlZUNDQ1SUlJlZWUwMDAaGhptbW2EhITBwcGxsbGjo6M1NTU9PT1LS0u3t7cmJiaNjY1EREQPbUXfAAAFCElEQVR4nO2d63KqQBCEWZA7KCsoICrq+z/kQSMnQReNyQ6TFr6q/DNVOy3s9MxeNIyJiYmJiYmJEWNxD+DPYC6KdCUC7mH8CczSExdc7pHwYzqVaBm9HGYghZjkuBJudmKSo8VORIdxpxb/1FVDcA+IlWJ9o8aBe0ScROKWhHtIjNyrIUruMfFxvFdjxDOpP7tXIze5R8WFvVc8HDH3qLgIE4Uau5B7WEyYvkIN4Y/1XXF3CjXSsVb3llSoITbcw+IiWCrUiBzuYTFhqh6O3YJ7WFyYqlel4h4VG7XqVeEeFB8KB5aN154b92p4YzVgDfa9GmN1HGfu8ko26g5pdjuLjloNY9VVQ47Vfl3pNDq29VjrtpavciQjfzSML3Is8zFnlJbzasLysNvLEYlhOsGZUPEyRHkeybqTTqzQtW173vy5Qfhuk4njxnVVZF66T/OjX7qPLacZLEqZt8txBy+q6nnwNpKYc79IO5l0H1VlryJuLbO7nvoqk/VbvEnWprhddr3El8tYUaQFdeGpOkEN60zO0R8Rq7r/plt22e3UGRfeoe/TZ06RzROGJkrvdgm6w/KUVf9fGrtIt48+fGEb4db9TtTz3H9V5JDK5iuPo13vU3TzD6gtQ3v1PLifUHAH9hOsDY0YDR6ej7eOZGo0iRot54YFoRpwzTKHVg0hMiQ9rOPzlPJLCqD5w3/oNvRQwRiQ8psW4jfgrFi6Hr0aEczcod6boJW1zx3k91mQq3ECKuRC8lfFQ1qFUS3GayUFSrGG9bxI/6UaMJPoGbrC7YMd0LzR8LCbpYGaO8CXcInVkFjd0tu1eM1AJRXDMIntOZD9OrOhrWTRlrNV2+z1geTNz1iqBSZ9oG2fs2k92JE7vhdRnVfSxwrtrA9th/QE0/+6QjuTetzhvYhFa8Ikd3wv4qbPY/o5S7QjtTZpnl1jGXTDqInWqK9ygLkOY0Na3c/QEguxHNzhvQqtC5vk6MqB1fkhlwNt7qCVAy6zEMuB5jtoMwucK6WVA65mKWm7P2gVrfJ+Fn2cwBrHAWlFK1ZgkwdxvwNuu3FOKwdaJ11xDZpO0NZZJPF2UrDTGyVp/0egXQYUqK530gnU3mvDpDUeDRVUlU+cWoQ4QK3EVeRb86F2yrn0e/NzpOwywFGFnDvGFyC26ReA7vuNB5AD6X0ZQg6go3C0NX7LFiXfUm/CbpEY1a01kBxi33/lxR/CJDem/8kRBBkkt1wBmEFC6gMtnywBEq5VPY9DExD+9P56SSogTvqExB3TT7gj/R7lQGqA3IUcDJRrURpjwzjTI4ocwRBl/hJnu0c1QBfoCGA6roT0de0MIsteoX88JM7D0RRytKfAhNjOuUN8CWrvgbYxivbaCrDjxQZt03QJtrOhQflbTZpIkObRK3RebIWUZFuUP16lBZDa7YaaaP06QylWulBdSgnQMFZCU8oB9It7iAmmD7D7XTro3/4CeJPtF3Sfyt/CLFYrsfQ2Cme4E8cHWu/cm+H/AqlGN7aGanL0sNC2Sol0oW8/saZe0HuoYRjzh5uR115R+Ru/kslj2d7n98DcXnvqbVzHscwzluWE8/4FTfxZ9BNHGeZJcZrLdJU35szg2l+PiU9dg7peHftKMXOzn3U/PEN25mpMf9+edlnv9kn8MEBXpqfVhyTrbdorHDZlkWRZliSV/Q3/EJQyOVPN38Bs9GE5bxzcxMTExIRh/AMRykxQ5qG+NQAAAABJRU5ErkJggg==" class="img-fluid" alt="Amazon Clone" />
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

      {/* Testimonials Section commented out temporarily — restore real data later */}

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
