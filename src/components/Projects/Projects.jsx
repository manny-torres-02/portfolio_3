import "./Projects.scss";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Exploring Community fitness through a LuluLemon Themed App",
      description:
        "This was a exploration for a LuLuLemon themed app. The idea was to allow a creater, instructor, or passionate guru to create local community events. People would be able to search, create events, or attend events. Data gathered from the app could feed insight in new and up and coming fitness trends. ",
      image: "src/assets/luluLemon_Project.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "https://industryprojectteam1.netlify.app/",
      codeLink: "https://github.com/manny-torres-02/IndustryProjectTeam1",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.demoLink}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
