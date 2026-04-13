export default function Portfolio() {
  const projects = [
    {
      title: "Apple Home Page Clone",
      category: "FRONTEND CLONE",
      description:
        "A high-fidelity frontend replica of the official Apple homepage, demonstrating advanced UI/UX development skills. It features responsive design, smooth scrolling animations, and precise layouts to match the premium brand experience.",
      techStack: ["React", "Node.js", "Express"],
      image: "/assets/img/portfolio/apple_logo.png",
      link: "https://dagim-abraham-react-fullstack-apl.netlify.app/",
    },
    {
      title: "Amazon E-Commerce Clone",
      category: "FULLSTACK CLONE",
      description:
        "A dynamic e-commerce platform mirroring Amazon's core web functionalities. The system includes user authentication, intuitive product catalog browsing, cart state management, and a streamlined checkout simulation.",
      techStack: ["Node.js", "React", "Tailwind CSS"],
      image: "/assets/img/portfolio/amazon_logo.jpg",
      link: "https://dagim-abraham-nextjs.netlify.app/",
    },
    {
      title: "Netflix Interface Clone",
      category: "WEB APPLICATION",
      description:
        "A media streaming interface replicating the Netflix browsing experience. It integrates seamlessly with external movie APIs to fetch real-time media data, organize cinematic categories, and deliver a visually engaging user interface.",
      techStack: ["Next.js", "Node.js", "TMDB API"],
      image: "/assets/img/portfolio/netfix_logo.png",
      link: "https://dagimabraham-react-netfliks-clone.netlify.app/",
    },
    {
      title: "EzyCart Web Application",
      category: "E-COMMERCE",
      description:
        "A comprehensive online shopping platform built to optimize the digital retail experience. It streamlines product discovery, cart management, and secure user sessions to handle end-to-end purchasing workflows efficiently.",
      techStack: ["React", "Node.js", "CSS3", "HTML5"],
      image: "/assets/img/portfolio/ecommerce_logo.png",
      link: "https://dagimabraham-ezycart.netlify.app/",
    },
    {
      title: "Task Management Application",
      category: "PRODUCTIVITY TOOL",
      description:
        "A sleek and intuitive task tracking utility designed to boost productivity. It allows users to create, organize, and monitor daily workflows with a clean, responsive interface and reliable data persistence.",
      techStack: ["React", "JavaScript", "HTML5", "CSS3"],
      image: "/assets/img/portfolio/task_logo.png",
      link: "https://dagim-abraham-todo-list.netlify.app/",
    },
    {
      title: "Personal Developer Portfolio",
      category: "WEB DEVELOPMENT",
      description:
        "A centralized digital portfolio built to showcase full-stack development projects, technical proficiency, and professional achievements. It utilizes modern web aesthetics and responsive layouts to effectively present software engineering capabilities.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      image: "/assets/img/portfolio/portfolio_log.png",
      link: "https://my-portfolio-website-beryl-three.vercel.app/",
    },
  ];

  return (
    <section
      id="portfolio"
      className="portfolio section py-5 custom-shadow-elevate"
    >
      <div
        className="container section-title text-center mb-5"
        data-aos="fade-up"
      >
        <h2>Portfolio</h2>
        <p className="lead text-muted">
          A showcase of my recent full-stack projects, responsive clones, and
          creative web solutions.
        </p>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {projects.map((project, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div
                className="custom-portfolio-card"
                onClick={() =>
                  project.link !== "#"
                    ? window.open(project.link, "_blank")
                    : null
                }
                style={{ cursor: project.link !== "#" ? "pointer" : "default" }}
              >
                <div className="portfolio-img-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="portfolio-hover-overlay">
                    <span>View Project</span>
                  </div>
                </div>
                <div className="portfolio-card-body">
                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <p className="portfolio-card-desc">{project.description}</p>
                  <div className="portfolio-tech-stack">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4">
                    {project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="explore-details"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Explore Details <i className="bi bi-arrow-right"></i>
                      </a>
                    ) : (
                      <span
                        className="explore-details"
                        style={{
                          color: "#a8a9b4",
                          textDecoration: "none",
                          cursor: "default",
                        }}
                      >
                        Source Available Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
