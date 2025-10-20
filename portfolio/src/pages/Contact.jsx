// Contact.jsx
// This component renders the "Contact Me" page of the portfolio website.
// It displays contact information and a contact form where users can send a message.
// The form uses React state for controlled inputs and navigates back to Home after submission.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
    const navigate = useNavigate();

    // Form state: stores user input values
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        message: ""
    });

    // Update form state when input changes
    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    // Handle form submission
    // const handleSubmit = (event) => {
    //     event.preventDefault();               // Prevent page reload
    //     console.log("Form submitted", form);  // Debug log
    //     alert("Thank you for your message!"); // Feedback to user
    //     navigate("/");                        // Redirect to home page
    // };

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            "service_65ap7uq",     //service ID
            "template_nev8jyd",    //template ID
            event.target,
            "WZN4PCGKQVm4mikWW"      //Public Key
        ).then((result) => {
            console.log("SUCCESS!", result.text);
            alert("Thank you for your message!");
            navigate("/");
        }, (error) => {
            console.error("FAILED...", error.text);
            alert("Sorry, failed to send message.");
        });
    };

    return (
        <div className="contact-page">
            {/* Page Title */}
            <h1 className="contact-title">CONTACT ME</h1>
            <div className="contact-divider"></div>

            {/* Contact Info Section */}
            <div className="contact-info">
                <p><strong>📞 Phone:</strong> 647-217-7377</p>
                <p><strong>📧 Email:</strong> wadeseounghoon@gmail.com</p>
                <p>
                    <strong>🔗 LinkedIn:</strong>
                    <a href="https://linkedin.com/in/seounghoonjung" target="_blank" rel="noopener noreferrer">
                        {" "}Seounghoon Jung
                    </a>
                </p>
            </div>

            {/* Contact Form Section */}
            <form className="contact-form" onSubmit={handleSubmit}>
                {/* Row for first and last name */}
                <div className="form-row">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Row for contact number and email */}
                <div className="form-row">
                    <input
                        type="text"
                        name="contact"
                        placeholder="Contact Number"
                        value={form.contact}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Message field */}
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="4"
                ></textarea>

                {/* Submit button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
