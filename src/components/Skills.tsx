"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "bi bi-window-sidebar",
    skills: [
      {
        name: "React.js",
        icon: "bi bi-filetype-jsx",
        color: "text-primary",
        percentage: 90,
      },
      {
        name: "Next.js",
        icon: "bi bi-filetype-jsx",
        color: "text-dark",
        percentage: 85,
      },
      {
        name: "JavaScript",
        icon: "bi bi-filetype-js",
        color: "text-warning",
        percentage: 80,
      },
      {
        name: "Tailwind CSS",
        icon: "bi bi-filetype-css",
        color: "text-info",
        percentage: 95,
      },
    ],
  },
  {
    title: "Backend & Database",
    icon: "bi bi-server",
    skills: [
      {
        name: "Node.js",
        icon: "bi bi-diagram-2",
        color: "text-success",
        percentage: 95,
      },
      {
        name: "Django",
        icon: "bi bi-filetype-py",
        color: "text-success",
        percentage: 85,
      },
      {
        name: "MongoDB",
        icon: "bi bi-database",
        color: "text-success",
        percentage: 90,
      },
      {
        name: "SQL",
        icon: "bi bi-database",
        color: "text-secondary",
        percentage: 80,
      },
    ],
  },
  {
    title: "Mobile Development",
    icon: "bi bi-phone",
    skills: [
      {
        name: "Flutter",
        icon: "bi bi-phone",
        color: "text-primary",
        percentage: 90,
      },
    ],
  },
  {
    title: "Tools & Infrastructure",
    icon: "bi bi-tools",
    skills: [
      {
        name: "Firebase",
        icon: "bi bi-fire",
        color: "text-warning",
        percentage: 85,
      },
      {
        name: "REST API",
        icon: "bi bi-cloud-arrow-down",
        color: "text-success",
        percentage: 95,
      },
      {
        name: "Figma",
        icon: "bi bi-vector-pen",
        color: "text-danger",
        percentage: 85,
      },
    ],
  },
];

const SkillBar = ({ skill }: { skill: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCurrentPercentage(0);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isVisible) {
      let start = 0;
      const end = skill.percentage;
      const duration = 1500;
      const increment = end / (duration / 20);

      timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCurrentPercentage(end);
          clearInterval(timer);
        } else {
          setCurrentPercentage(Math.round(start));
        }
      }, 20);
    } else {
      setCurrentPercentage(0);
    }
    return () => clearInterval(timer);
  }, [isVisible, skill.percentage]);

  return (
    <div className="mb-4" ref={ref}>
      <div className="d-flex align-items-center mb-2">
        <i className={`${skill.icon} fs-5 me-2 ${skill.color}`}></i>
        <h6 className="mb-0 me-auto fw-semibold">{skill.name}</h6>
        <span className="fw-bold text-muted small">{currentPercentage}%</span>
      </div>
      <div className="progress" style={{ height: "8px", borderRadius: "10px" }}>
        <div
          className="progress-bar custom-gradient-progress"
          role="progressbar"
          style={{
            width: `${isVisible ? skill.percentage : 0}%`,
            transition: "width 1.5s ease-out",
            borderRadius: "10px",
          }}
          aria-valuenow={currentPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

const SkillCategoryCard = ({ category }: { category: any }) => {
  return (
    <div className="custom-portfolio-card skill-card p-4 mx-auto w-100">
      <h4 className="mb-4 d-flex align-items-center pb-3 border-bottom portfolio-card-title">
        <div
          className="bg-primary bg-opacity-10 p-2 rounded me-3 text-primary d-flex align-items-center justify-content-center"
          style={{ width: "45px", height: "45px" }}
        >
          <i className={category.icon}></i>
        </div>
        <span className="fs-5 fw-bold">{category.title}</span>
      </h4>
      <div className="mt-2">
        {category.skills.map((skill: any, sIdx: number) => (
          <SkillBar key={sIdx} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const additionalTechnologies = [
  { label: "C++", classes: "bg-primary text-white" },
  { label: "Java", classes: "bg-warning text-dark" },
  { label: "Express", classes: "bg-dark text-white" },
  { label: "Python", classes: "bg-success text-white" },
  { label: "git", classes: "bg-danger text-white" },
  { label: "GitHub", classes: "bg-secondary text-white" },
  { label: "PHP", classes: "bg-info text-dark" },
  {
    label: "DataCom",
    classes: "bg-success bg-opacity-10 text-dark border border-success",
  },
];

const AdditionalTechnologiesCard = () => {
  return (
    <div
      className="custom-portfolio-card p-4 mx-auto w-100"
      style={{ maxWidth: "1040px" }}
    >
      <h5 className="mb-3 text-center fw-bold portfolio-card-title">
        Additional Technologies
      </h5>
      <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
        {additionalTechnologies.map((tech) => (
          <span
            key={tech.label}
            className={`badge ${tech.classes} py-2 px-3 fs-6 rounded-pill shadow-sm`}
          >
            {tech.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="skills section bg-light py-5">
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center mb-5">
          <h2>My Skills</h2>
          <p className="lead text-muted">
            A structured overview of my technical expertise, categorized by
            domain. I continuously learn and adapt to new technologies to build
            modern applications.
          </p>
        </div>

        <div className="row skill-row gy-4 justify-content-center">
          {skillCategories.map((category, idx) => (
            <div className="col-lg-5 col-md-6" key={idx}>
              <SkillCategoryCard category={category} />
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-12">
            <AdditionalTechnologiesCard />
          </div>
        </div>
      </div>
    </section>
  );
}
