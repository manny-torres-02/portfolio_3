import { useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    // Option 1: Formspree endpoint via env var (no backend required)
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID; // e.g., "abcdwxyz"
    const formspreeUrl = formspreeId
      ? `https://formspree.io/f/${formspreeId}`
      : import.meta.env.VITE_FORMSPREE_URL; // alternatively set full URL

    if (!formspreeUrl) {
      setStatus({
        loading: false,
        success: null,
        error:
          "No contact endpoint configured. Set VITE_FORMSPREE_ID (or VITE_FORMSPREE_URL) in .env.local.",
      });
      return;
    }

    try {
      const res = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Request failed: ${res.status}`);
      }

      setStatus({
        loading: false,
        success: "Message sent! Thanks for reaching out.",
        error: null,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: err.message || "Something went wrong.",
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
            <div className="contact-links">
              <a href="mailto:manuel@example.com" className="contact-link">
                <span className="contact-icon">📧</span>
                manueljosetorres02@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/jmanueltorres/"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">💼</span>
                LinkedIn
              </a>
              <a
                href="https://github.com/manny-torres-02"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon">🐙</span>
                GitHub
              </a>
            </div>
          </div>
          <form
            className="contact-form"
            action="https://formspree.io/f/xldarvwb"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {status.error && (
              <p className="form-status error">{status.error}</p>
            )}
            {status.success && (
              <p className="form-status success">{status.success}</p>
            )}
            <button
              type="submit"
              className="submit-btn"
              disabled={status.loading}
            >
              {status.loading ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
