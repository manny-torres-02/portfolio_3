import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Manuel Torres</h1>
        <img src="src/assets/headshot.jpeg" alt="headshot of manuel torres" class="headshot" />
        <p className="hero-subtitle">Full Stack Developer</p>
        <p className="hero-description">
          Creating beautiful and functional web experiences with modern
          technologies.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
