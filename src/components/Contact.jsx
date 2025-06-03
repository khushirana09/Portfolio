import React from 'react';
import '../style/Contact.css';

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-container">
        <div className="contact-hero">
          <h2 className="section-title">Let’s Connect!</h2>
          <p>Interested in working together or have an opportunity? Reach out anytime.</p>
          <div className="contact-icon">📬</div>
        </div>
        <div className="contact-cards">
          <div className="contact-card">
            <div className="icon">📧</div>
            <div>
              <h4>Email</h4>
              <a href="mailto:kkrana2337@gmail.com">kkrana2337@gmail.com</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="icon">📞</div>
            <div>
              <h4>Phone</h4>
              <a href="tel:+917087343389">+91 70873 43389</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="icon">💼</div>
            <div>
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/khushi-rana-4a902a17b/" target="_blank" rel="noreferrer">@khushi-rana</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="icon">🐱</div>
            <div>
              <h4>GitHub</h4>
              <a href="https://github.com/khushirana09" target="_blank" rel="noreferrer">@khushirana09</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
