import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* <h1 className="hero-title">Manuel Torres</h1> */}
        {/* <img alt="Manuel Torres vector" href="../../assets/name.svg" />  */}
        <img
          src="src/assets/headshot_10Pxborder.png"
          alt="headshot of manuel torres"
          class="headshot"
        />
        <h1 className="hero-subtitle">Hi - I'm Manny</h1>
        <p className="hero-description">
          I design and build polished digital experiences, from front-end
          interfaces to cloud architecture. I work with anyone who has an idea
          worth making real. If you’re looking to craft something genuine,
          functional, and well-made — I’d love to help.
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
