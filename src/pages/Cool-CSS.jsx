import "./Cool-Css.scss";

const CoolCSS = () => {
  return (
    <div className="cool-css-page">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Cool CSS Experiments</h1>
          <p className="page-description">
            A collection of creative CSS animations and effects I've been
            experimenting with.
          </p>
        </header>

        <div className="css-experiments">
          <div className="experiment-card">
            <h3>Animated Gradient Background</h3>
            <div className="gradient-demo"></div>
          </div>

          <div className="experiment-card">
            <h3>Floating Elements</h3>
            <div className="floating-demo">
              <div className="float-item">✨</div>
              <div className="float-item">🌟</div>
              <div className="float-item">💫</div>
            </div>
          </div>

          <div className="experiment-card">
            <h3>Morphing Shapes</h3>
            <div className="morph-demo"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoolCSS;
