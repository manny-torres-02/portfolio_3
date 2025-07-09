import "./About.scss";

const About = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "CSS/SCSS", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Git", level: 85 }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              I'm a passionate full-stack developer with 3+ years of experience creating 
              web applications that solve real-world problems. I love working with modern 
              technologies and am always eager to learn new skills.
            </p>
            <p className="about-description">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or enjoying a good book.
            </p>
          </div>
          <div className="about-skills">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-list">
              {skills.map(skill => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{width: `${skill.level}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;