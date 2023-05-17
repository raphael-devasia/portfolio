import React, { useRef ,useState} from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [success, setSuccess] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setNameError("Name is required.");
      return;
    }

    if (email.trim() === "") {
      setEmailError("Email is required.");
      return;
    }

    if (message.trim() === "") {
      setMessageError("Message is required.");
      return;
    }

    emailjs
      .sendForm(
        "service_ej2rshb",
        "template_vlfw1vw",
        form.current,
        "nGySWorMz7w7XFXLf"
      )
      .then(
        (result) => {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
          e.target.reset();
         toast.success("Message Sent")
        },
        (error) => {
           e.target.reset();
           toast.error("Try Again");
        }
      );

    
  };
  
  
  return (
    <section className="contact section " id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle"> contact me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i class="uil uil-envelope-upload contact__card-icon"></i>

              <h3 className="contact__card-title">jaydee.coder@gmail.com</h3>
              <span className="contact__card-data"></span>

              <a href="mailto:jaydee.coder@gmail.com" class="contact__button">
                write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i class="uil uil-facebook-messenger-alt contact__card-icon"></i>

              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data"></span>

              <a
                href="https://www.facebook.com/profile.php?id=100092428561372"
                class="contact__button"
              >
                write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i class="uil uil-linkedin-alt contact__card-icon"></i>

              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data"></span>

              <a
                href="https://www.linkedin.com/in/jay-dee-949614274/"
                class="contact__button"
              >
                write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">write me your project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="contact__form-input"
                placeholder="Insert Your Name"
              />
              {nameError && <p>{nameError}</p>}
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contact__form-input"
                placeholder="Insert Your email"
              />{" "}
              {emailError && <p>{emailError}</p>}
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="40"
                rows="20"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="contact__form-input"
                placeholder="write your message here"
              ></textarea>
              {messageError && <p>{messageError}</p>}
            </div>
            <button class="button button--flex">
              Send message <i class="uil uil-message"></i>
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
