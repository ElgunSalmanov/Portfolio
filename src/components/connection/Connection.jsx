import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "./connection.scss";

function Connection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [textareaError, setTextareaError] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      form.current.name.value === "" ||
      form.current.email.value === "" ||
      form.current.message.value === ""
    ) {
      console.log("Please fill all the fields");
    } else {
      emailjs
        .sendForm("service_hwcnvog", "template_bmgydui", form.current, {
          publicKey: "cTqYvkTbrBEEy9crq",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            form.current.name.value = "";
            form.current.email.value = "";
            form.current.message.value = "";
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const validateName = (name) => {
    if (!/^[A-Za-z\s]*$/.test(name.target.value) && name.target.value !== "") {
      setNameError("First name must contain only letters");
      setDisabled(true);
    } else if (name.target.value.length < 3 && name.target.value !== "") {
      setNameError("First name must be at least 3 characters");
      setDisabled(true);
    } else {
      setNameError("");
      setDisabled(false);
    }

    setName(name.target.value);
  };

  const validateEmail = (email) => {
    if (!/\S+@\S+\.\S+/.test(email.target.value) && email.target.value !== "") {
      setEmailError("Invalid email address");
      setDisabled(true);
    } else {
      setEmailError("");
      setDisabled(false);
    }

    setEmail(email.target.value);
  };

  const validateTextarea = (textarea) => {
    if (textarea.target.value.length < 10 && textarea.target.value !== "") {
      setTextareaError("Message must be at least 10 characters");
      setDisabled(true);
    } else {
      setTextareaError("");
      setDisabled(false);
    }

    setTextarea(textarea.target.value);
  };

  useEffect(() => {
    if (
      name === "" ||
      email === "" ||
      textarea === "" ||
      nameError ||
      emailError ||
      textareaError
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [name, email, textarea, nameError, emailError, textareaError]);

  return (
    <>
      <div className="connection">
        <h1 className="connection-title">
          {t("Get in touch")}
          <span className="connection-title-point">.</span>
        </h1>
        <p className="connection-description">
          {t(
            "We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Please use the form below to get in touch with us, and we will respond as soon as possible."
          )}
        </p>
        <form onSubmit={sendEmail} ref={form} className="connection-form">
          <input
            className="connection-form-entry"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={validateName}
            placeholder={t("Enter a name")}
          />
          <div className="connection-form-entry-validations">
            <p className="connection-form-entry-validations-text">
              {nameError && t(nameError)}
            </p>
          </div>
          <input
            className="connection-form-entry"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={validateEmail}
            placeholder={t("Enter an email")}
          />
          <div className="connection-form-entry-validations">
            <p className="connection-form-entry-validations-text">
              {emailError && t(emailError)}
            </p>
          </div>
          <textarea
            className="connection-form-entry textarea"
            name="message"
            id="message"
            value={textarea}
            onChange={validateTextarea}
            placeholder={t("Enter a message")}
          />
          <div className="connection-form-entry-validations">
            <p className="connection-form-entry-validations-text">
              {textareaError && t(textareaError)}
            </p>
          </div>
          <button
            type="submit"
            className="connection-form-submit"
            style={{
              background: disabled ? "gray" : "#000",
              cursor: disabled ? "not-allowed" : "pointer",
            }}
          >
            {t("SUBMIT")}
          </button>
        </form>
      </div>
    </>
  );
}

export default Connection;
