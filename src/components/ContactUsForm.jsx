import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import "./ContactUsForm.css"; // Import regular stylesheet
import styles from "../pages/styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

import { ModalWrapper, ModalOverlay } from "./ContactUsFormTheme";

const ContactForm = ({
  isShowing,
  children,
  header,
  footer,
  width,
  top,
  zIndex,
  onToggle,
  checkedValue,
  ...rest
}) => {
  const numWidth = Number(width.replace("%", "").replace("vw", ""));

  const FORM_ID = `1543213`;
  const FORM_URL = `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`;

  const [email, setEmail] = useState(null);
  const [status, setStatus] = useState(null);
  const [consent, setConsent] = useState(false);

  const toggle = () => {
    setStatus(null);
    onToggle();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      });
      setEmail("");
      const json = await response.json();
      // console.log(json);
      if (json.status === "success") {
        setStatus("SUCCESS");
        return;
      }
      if (json.status === "failed") {
        setStatus("ERROR");
        return;
      }
    } catch (err) {
      setStatus("ERROR");
      // console.log(err);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleCheck = (event) => {
    setConsent(event.target.checked);
  };

  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (myRef.current && !myRef.current.contains(e.target)) {
      toggle();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return isShowing
    ? ReactDOM.createPortal(
        <>
          <ModalOverlay>
            <ModalWrapper
              width={width}
              numWidth={numWidth}
              top={top}
              zIndex={zIndex}
              ref={myRef}
            >
              <form
                action="https://app.convertkit.com/forms/1543213/subscriptions"
                className="seva-form formkit-form"
                method="post"
                data-sv-form="1543213"
                data-uid="02c7858452"
                data-format="inline"
                data-version="5"
                data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":"UA-173440524-1","facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
                min-width="400 500 600 700 800"
                onSubmit={handleSubmit}
              >
                <div data-style="card">
                  <div
                    data-element="column"
                    className="formkit-column"
                    style={{
                      backgroundColor: `var(--redBrand)`,
                      height: `80px`,
                    }}
                  >
                    <div className="formkit-background"></div>
                    <div className="formkit-header" data-element="header">
                      <h1>Looking to learn more about our product ?</h1>

                      <div onClick={toggle} className="formkit-close">
                        Close
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          size="lg"
                          // className="text--primary mr-1"
                          className="formkit-close-icon"
                          onClick={toggle}
                        />
                      </div>
                    </div>
                  </div>
                  <div data-element="column" className="formkit-column">
                    <div className="formkit-subheader" data-element="subheader">
                      <p>
                        Please subscribe and we will be in contact as soon as
                        possible.
                      </p>
                    </div>
                    <ul
                      className="formkit-alert formkit-alert-error"
                      data-element="errors"
                      data-group="alert"
                    >
                      {status === "ERROR" && (
                        <p className="formkit-alert-message">
                          Oops, Something went wrong! Please check the form and
                          try again.
                        </p>
                      )}
                    </ul>
                    <ul
                      className="formkit-alert formkit-alert-success"
                      data-element="errors"
                      data-group="alert"
                    >
                      {status === "SUCCESS" && (
                        <p className="formkit-alert-message">
                          Thank you for subscribing. An email has been sent to
                          your account. Please confirm subscription and we will
                          be in contact soon.
                        </p>
                      )}
                    </ul>
                    <div
                      data-element="fields"
                      className="seva-fields formkit-fields"
                    >
                      <div className="formkit-field">
                        <input
                          className="formkit-input"
                          aria-label="Your name"
                          name="fields[first_name]"
                          required
                          placeholder="Your name"
                          type="text"
                        />
                      </div>
                      <div className="formkit-field">
                        <input
                          className="formkit-input"
                          name="email_address"
                          placeholder="Your email address"
                          required
                          type="email"
                        />
                      </div>
                      <div className="formkit-field">
                        <input
                          className="formkit-input"
                          aria-label="Company"
                          name="fields[null]"
                          placeholder="Company"
                          type="text"
                        />
                      </div>
                      <div className="formkit-field">
                        <input
                          className="formkit-input"
                          aria-label="Location"
                          name="fields[location]"
                          // required=""
                          placeholder="Location"
                          type="text"
                        />
                      </div>
                      <div className="formkit-field">
                        <input
                          className="formkit-input"
                          aria-label="Phone number"
                          name="fields[null]"
                          required
                          placeholder="Phone number"
                          type="text"
                        />
                      </div>
                      <div className="formkit-field">
                        <div>
                          <fieldset
                            data-group="checkboxes"
                            className="formkit-1967"
                            type="Custom"
                            order="5"
                            save_as="Tag"
                            group="field"
                          >
                            <legend>Reason for your enquiry :</legend>
                            <div
                              className="formkit-checkboxes"
                              data-element="tags-checkboxes"
                              data-group="checkbox"
                            >
                              <input
                                className="formkit-checkbox"
                                id="tag-4184380-1743429"
                                type="checkbox"
                                name="tags[]"
                                value="1743429"
                                defaultChecked={
                                  checkedValue === "BOOKDEMO" ? true : false
                                }
                              />
                              <label htmlFor="tag-4184380-1743429">
                                Request a demo
                              </label>
                            </div>
                            <div
                              className="formkit-checkboxes"
                              data-element="tags-checkboxes"
                              data-group="checkbox"
                            >
                              <input
                                className="formkit-checkbox"
                                id="tag-4184380-1746207"
                                type="checkbox"
                                name="tags[]"
                                value="1746207"
                                defaultChecked={
                                  checkedValue === "TEAM" ? true : false
                                }
                              />
                              <label htmlFor="tag-4184380-1746207">
                                Team license enquiry
                              </label>
                            </div>
                            <div
                              className="formkit-checkboxes"
                              data-element="tags-checkboxes"
                              data-group="checkbox"
                            >
                              <input
                                className="formkit-checkbox"
                                id="tag-4184380-1743428"
                                type="checkbox"
                                name="tags[]"
                                value="1743428"
                                defaultChecked={
                                  checkedValue === "ENTERPRISE" ? true : false
                                }
                              />
                              <label htmlFor="tag-4184380-1743428">
                                Enterprise license query
                              </label>
                            </div>
                            <div
                              className="formkit-checkboxes"
                              data-element="tags-checkboxes"
                              data-group="checkbox"
                            >
                              <input
                                className="formkit-checkbox"
                                id="tag-4184380-1746208"
                                type="checkbox"
                                name="tags[]"
                                value="1746208"
                                defaultChecked={
                                  checkedValue === "OEM" ? true : false
                                }
                              />
                              <label htmlFor="tag-4184380-1746208">
                                OEM license enquiry
                              </label>
                            </div>
                            <div
                              className="formkit-checkboxes"
                              data-element="tags-checkboxes"
                              data-group="checkbox"
                            >
                              <input
                                className="formkit-checkbox"
                                id="tag-4184380-1746209"
                                type="checkbox"
                                name="tags[]"
                                value="1746209"
                                defaultChecked={
                                  checkedValue === "CONTACTUS" ? true : false
                                }
                              />
                              <label htmlFor="tag-4184380-1746209">
                                General enquiry
                              </label>
                            </div>
                          </fieldset>
                          <div className="formkit-field">
                            <textarea
                              className="formkit-textarea"
                              aria-label="General enquiry"
                              name="fields[undefined]"
                              placeholder="General enquiry"
                              type="text"
                              rows="4"
                              style={{ marginTop: `10px` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-element="fields"
                      className="seva-fields formkit-consent"
                    >
                      <fieldset
                        data-group="checkboxes"
                        className="formkit-1967"
                        type="Custom"
                        order="5"
                        save_as="Tag"
                        group="field"
                      >
                        <div
                          className="formkit-checkboxes"
                          data-element="tags-checkboxes"
                          data-group="checkbox"
                          style={{ marginTop: `5px` }}
                        >
                          <input
                            className="formkit-checkbox"
                            id="consent"
                            type="checkbox"
                            onChange={(event) => handleCheck(event)}
                          />
                          <label
                            htmlFor="consent"
                            className="formkit-consent-label"
                          >
                            By checking this box, I acknowledge that I have read
                            and accepted the Motor-js Terms and Conditions. By
                            submitting my personal data, I consent to receive
                            electronic messages and other communications from
                            Motor-js. For further information, please see our
                            Privacy Note.
                          </label>
                        </div>
                      </fieldset>{" "}
                      <button
                        data-element="submit"
                        className="formkit-submit formkit-submit"
                        id="button2"
                        className={clsx("button b1 button--lg", styles.button)}
                        disabled={!consent}
                      >
                        <div className="formkit-spinner">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <span>Send Enquiry</span>
                      </button>
                    </div>
                    <div className="formkit-guarantee" data-element="guarantee">
                      We won't send you spam. Unsubscribe at any time.
                    </div>
                  </div>
                </div>
              </form>
            </ModalWrapper>
          </ModalOverlay>
        </>,
        document.body
      )
    : null;
};

ContactForm.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.node,
  header: PropTypes.node,
  width: PropTypes.oneOf([
    "10%",
    "20%",
    "30%",
    "40%",
    "50%",
    "60%",
    "70%",
    "80%",
    "90%",
    "100%",
    "10vw",
    "20vw",
    "30vw",
    "40vw",
    "50vw",
    "60vw",
    "70vw",
    "80vw",
    "90vw",
    "10vw",
  ]),
  zIndex: PropTypes.string,
};

ContactForm.defaultProps = {
  children: undefined,
  footer: undefined,
  header: undefined,
  width: "70vw",
  top: "5%",
  zIndex: "1050",
};

export default ContactForm;
