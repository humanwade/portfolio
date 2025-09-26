import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        message: ""
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted", form);
        alert("Thank you for your message!");
        navigate("/");
    };

    return (
        <div className="contact-page">
            <h1 className="contact-title">CONTACT ME</h1>
            <div className="contact-divider"></div>

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

            <form className="contact-form" onSubmit={handleSubmit}>
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
                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={form.message} 
                    onChange={handleChange} 
                    required 
                    rows="4"
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;