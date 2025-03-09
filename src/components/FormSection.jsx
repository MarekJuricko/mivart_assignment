import { useState } from "react";
import '../styles/FormSection.css';
import bgContact from '../assets/images/bg-contact.svg';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Toto pole je povinné.";
    if (!formData.email) newErrors.email = "Toto pole je povinné.";
    if (!formData.phone) newErrors.phone = "Toto pole je povinné.";
    if (!formData.message) newErrors.message = "Toto pole je povinné.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Formulár bol úspešne odoslaný!");
    }
  };

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