import "./Contact.css";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you. Feel free to contact us anytime.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <h3>📍 Address</h3>
            <p>6 October, Egypt</p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+20 1163 570</p>
          </div>

          <div className="info-card">
            <h3>✉ Email</h3>
            <p>rashadrzya@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>🕒 Working Hours</h3>
            <p>Sat - Thu : 9 AM - 8 PM</p>
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
          ></textarea>

          <button>
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;