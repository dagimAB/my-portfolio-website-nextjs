"use client";

import { useEffect, useRef, useState } from "react";

const skillsData = [
  { name: "React.js", icon: "bi bi-filetype-jsx", color: "text-primary", percentage: 90 },
  { name: "Next.js", icon: "bi bi-filetype-jsx", color: "text-info", percentage: 85 },
  { name: "Flutter", icon: "bi bi-phone", color: "text-primary", percentage: 90 },
  { name: "JavaScript", icon: "bi bi-filetype-js", color: "text-info", percentage: 80 },
  { name: "Tailwind CSS", icon: "bi bi-filetype-css", color: "text-primary", percentage: 95 },
  { name: "Django", icon: "bi bi-currency-dollar", color: "text-success", percentage: 85 },
  { name: "Node.js", icon: "bi bi-diagram-2", color: "text-success", percentage: 95 },
];

const SkillBar = ({ skill }: { skill: typeof skillsData[0] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset to 0 when it leaves the viewport
          setIsVisible(false);
          setCurrentPercentage(0);
        }
      },
      { threshold: 0.1 } // Triggers when at least 10% is visible
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
      const duration = 1500; // 1.5 seconds for moderate speed
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
    <div className="col-md-6 mb-4" ref={ref}>
      <div className="d-flex align-items-center mb-2">
        <i className={`${skill.icon} fs-4 me-2 ${skill.color}`}></i>
        <h6 className="mb-0 me-auto">{skill.name}</h6>
        <span className="fw-bold">{currentPercentage}%</span>
      </div>
      <div className="progress" style={{ height: "10px" }}>
        <div
          className="progress-bar custom-gradient-progress"
          role="progressbar"
          style={{
            width: `${isVisible ? skill.percentage : 0}%`,
            transition: "width 1.5s ease-out",
          }}
          aria-valuenow={currentPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
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
            I've developed expertise in various technologies and tools
            throughout my career. Here's a snapshot of my technical skills and
            proficiency levels.
          </p>
        </div>
        <div className="row skills-content justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              {skillsData.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="card shadow-sm border-0 p-4 custom-other-tech-card">
              <h4 className="mb-4">Other Technologies</h4>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-secondary text-white py-2 px-3 fs-6">JavaScript</span>
                <span className="badge bg-secondary text-white py-2 px-3 fs-6">HTML5</span>
                <span className="badge bg-secondary text-white py-2 px-3 fs-6">CSS3</span>
                <span className="badge bg-secondary text-white py-2 px-3 fs-6">Express</span>
                <span className="badge bg-secondary text-white py-2 px-3 fs-6">shadcn/ui</span>
                <span className="badge bg-secondary text-white py-2 px-3 fs-6">Python</span>
                <span className="badge bg-secondary text-white py-2 px-3 fs-6">Firebase</span>
                <span className="badge bg-secondary text-white py-2 px-3 fs-6">SQL</span>
                <span className="badge bg-secondary text-white py-2 px-3 fs-6">Material UI</span>
                <span className="badge bg-secondary text-white py-2 px-3 fs-6">REST API</span>
                <span className="badge bg-secondary text-white py-2 px-3 fs-6">Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
