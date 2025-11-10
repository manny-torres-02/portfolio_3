import "./About.scss";

const About = () => {
  const skills = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "CSS/SCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p>
              <span role="img" aria-label="light bulb">
                💡
              </span>{" "}
              I’m a developer and cloud consultant who cares just as much about
              how things feel as how they work. I started in consulting, where I
              learned that building software is really about listening,
              understanding people, and shaping solutions together, not just
              writing code.
            </p>
            <br />

            <p>
              <span role="img" aria-label="computer">
                🖥️
              </span>
              I love turning designs, sketches, and ideas into clean, thoughtful
              experiences. Whether it’s translating a Photoshop mockup into a
              polished interface or architecting the cloud systems behind it, I
              focus on clarity, reliability, and usability. Good software should
              feel intuitive and grounded, something you can trust and want to
              return to.
            </p>
            <br />

            <p>
              <span role="img" aria-label="handshake">
                🤝
              </span>{" "}
              I thrive when I’m helping others bring ideas to life. Individuals,
              small businesses, early teams, anyone with a vision. I enjoy
              connecting with people, understanding what matters to them, and
              building with care. My work is guided by empathy, curiosity, and
              the belief that technology should support real human experience.
            </p>
            <br />

            <p className="pt-2 font-medium">
              If you’re building something meaningful, I’d love to help.
            </p>
            <br />
          </div>
          <div className="about-skills">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-icon">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <span className="skill-name">{skill.name}</span>
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
