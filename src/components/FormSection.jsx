import { useState } from "react";
import '../styles/FormSection.css';

// ContactForm component: Renders a form to collect user contact information.
const ContactForm = () => {
  // validate function: Validates form fields and sets error messages.
  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Toto pole je povinné.";
    if (!formData.email) newErrors.email = "Toto pole je povinné.";
    if (!formData.phone) newErrors.phone = "Toto pole je povinné.";
    if (!formData.message) newErrors.message = "Toto pole je povinné.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handleChange function: Updates form data state when input fields change.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handleSubmit function: Handles form submission, validates data, and displays an alert.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Formulár bol úspešne odoslaný!");
    }
  };

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});

  return (
    <div className="contact-form-wrapper">
      <div className="contactForm">
        <h2>Lorem Ipsum</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-content">
            <div className="left-column">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="MENO"
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="TELEFÓN"
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
            </div>
            <div className="right-column">
              <textarea
                name="message"
                placeholder="ODKAZ..."
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="text-red-500">{errors.message}</p>}
            </div>
          </div>
          <button type="submit">ODOSLAŤ</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;