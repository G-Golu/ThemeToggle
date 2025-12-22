import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-card">
        <span className="dot"></span>
        <h1>Light & Dark Theme Toggle</h1>
        <p>
          Build modern React applications with smooth theme switching,
          clean UI, and professional layout.
        </p>
        <Link to = "/login">
        <button className="primary-btn">Get Started</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;


