import React, { useContext, useRef, useState } from "react";
import "../styles/contact.css";
import { ColorContext } from "../context/ContextShare";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

function Contact() {
    const { color } = useContext(ColorContext);
    const form = useRef();
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let error = "";

        switch (name) {
            case "from_name":
                if (!value.trim()) {
                    error = "Name is required";
                }
                break;
            case "email":
                if (!value.trim()) {
                    error = "Email is required";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "Please enter a valid email address";
                }
                break;
            case "subject":
                if (!value.trim()) {
                    error = "Subject is required";
                }
                break;
            case "message":
                if (!value.trim()) {
                    error = "Message is required";
                }
                break;
            default:
                break;
        }

        return error;
    };

    const validateForm = () => {
        const formData = Object.fromEntries(new FormData(form.current));
        const newErrors = {};

        Object.keys(formData).forEach((fieldName) => {
            const error = validateField(fieldName, formData[fieldName]);
            if (error) {
                newErrors[fieldName] = error;
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // No errors
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        emailjs
            .sendForm("service_bywrcrk", "template_niufvta", form.current, "hChLcTG1zrU0P87oa")
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                    setErrors({});
                    e.target.reset();
                },
                (error) => {
                    console.error("FAILED...", error);
                    toast.error("Message sending failed. Please try again.");
                }
            );
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validateField(name, value),
        }));
    };

    return (
        <div className="contacts">
            <div className="contacts-heading" data-aos="fade-up" data-aos-duration="1400">
                <p>Feel free to contact me anytime</p>
                <h2>Get in Touch</h2>
            </div>
            <div className="contacts-section">
                <div className="input-section" data-aos="fade-right" data-aos-duration="1400">
                    <h5>Send a Message</h5>
                    <form ref={form} className="form" onSubmit={sendEmail} noValidate>
                        <div className="name-email">
                            <div className="form-group" style={{ '--accent-color': color }}>
                                <input
                                    type="text"
                                    name="from_name"
                                    placeholder=" "
                                    aria-label="Enter your name"
                                    onBlur={handleBlur}
                                />
                                <label>Your Name</label>
                                {errors.from_name && <span className="error">{errors.from_name}</span>}
                            </div>
                            <div className="form-group" style={{ '--accent-color': color }}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder=" "
                                    aria-label="Enter your email"
                                    onBlur={handleBlur}
                                />
                                <label>Email Address</label>
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>
                        </div>
                        <div className="form-group" style={{ '--accent-color': color }}>
                            <input
                                type="text"
                                name="subject"
                                placeholder=" "
                                aria-label="Enter the subject"
                                onBlur={handleBlur}
                            />
                            <label>Subject</label>
                            {errors.subject && <span className="error">{errors.subject}</span>}
                        </div>
                        <div className="form-group" style={{ '--accent-color': color }}>
                            <textarea
                                name="message"
                                placeholder=" "
                                aria-label="Enter your message"
                                rows="4"
                                onBlur={handleBlur}
                            ></textarea>
                            <label>Your Message</label>
                            {errors.message && <span className="error">{errors.message}</span>}
                        </div>
                        <button type="submit" className="contact-submit-btn" style={{ '--accent-color': color }}>
                            <span>Send Message</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </form>
                </div>

                <div className="contact-info" data-aos="fade-up" data-aos-duration="1400">
                    <h5>Contact Info</h5>
                    <p className="contact-info-desc">
                        I'm excited about opportunities to bring my expertise to new challenges and
                        meaningful projects. Whether you're looking for a team player or a
                        freelancer, let's connect and create something remarkable together!
                    </p>
                    <div className="contact-info-items">
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <div className="contact-info-item-text">
                                <span className="contact-info-item-label">Name</span>
                                <span className="contact-info-item-value">Jithin PM</span>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="contact-info-item-text">
                                <span className="contact-info-item-label">Location</span>
                                <span className="contact-info-item-value">Kerala, India</span>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="contact-info-item-text">
                                <span className="contact-info-item-label">Call Me</span>
                                <span className="contact-info-item-value">+91 7560844748</span>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="contact-info-item-text">
                                <span className="contact-info-item-label">Email Me</span>
                                <span className="contact-info-item-value">jithinpm.official@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-socials" style={{ '--accent-color': color }}>
                        <a href="https://www.linkedin.com/in/jithin-pm-403241285/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/jithin-pm" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/jithin.pm_/?next=%2F" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://wa.me/7560844748" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="https://www.facebook.com/jithin.pm.96" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
