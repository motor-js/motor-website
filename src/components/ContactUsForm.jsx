import React, { useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// import Box from "../box";
// import Link from "@docusaurus/Link";
import clsx from "clsx";
import "./ContactUsForm.css"; // Import regular stylesheet
import styles from "../pages/styles.module.css";

import {
  ModalWrapper,
  ModalOverlay,
  ModalMain,
  //  ModalHeader,
  //  ModalBody,
  //  ModalFooter,
} from "./ContactUsFormTheme";

const Modal = ({
  isShowing,
  children,
  header,
  footer,
  width,
  top,
  zIndex,
  ...rest
}) => {
  const numWidth = Number(width.replace("%", "").replace("vw", ""));

  return isShowing
    ? ReactDOM.createPortal(
        <>
          <ModalOverlay>
            <ModalWrapper
              width={width}
              numWidth={numWidth}
              top={top}
              zIndex={zIndex}
            >
              <form
                action="https://app.convertkit.com/forms/1543213/subscriptions"
                className="seva-form formkit-form"
                method="post"
                data-sv-form="1543213"
                data-uid="02c7858452"
                data-format="inline"
                data-version="5"
                data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":true},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
                min-width="400 500 600 700 800"
                style={{
                  backgroundColor: `rgb(255, 255, 255)`,
                  borderRadius: `8px`,
                }}
              >
                <div data-style="card">
                  <div
                    data-element="column"
                    className="formkit-column"
                    style={{ backgroundColor: `rgb(251, 105, 112)` }}
                  >
                    <div
                      className="formkit-background"
                      style={{
                        backgroundImage: `url("//pages.convertkit.com/assets/powell/bg.jpg")`,
                        opacity: 0.2,
                      }}
                    ></div>
                    <div
                      className="formkit-header"
                      data-element="header"
                      style={{
                        color: `rgb(255, 255, 255)`,
                        fontSize: `22px`,
                        fontWeight: `700`,
                      }}
                    >
                      <h1>Looking to learn more about our product ?</h1>
                    </div>
                  </div>
                  <div data-element="column" className="formkit-column">
                    <div
                      className="formkit-subheader"
                      data-element="subheader"
                      style={{ color: `rgb(125, 125, 125)`, fontSize: `16px` }}
                    >
                      <p>Subscribe to get our latest content by email.</p>
                    </div>
                    <ul
                      className="formkit-alert formkit-alert-error"
                      data-element="errors"
                      data-group="alert"
                    ></ul>
                    <div
                      data-element="fields"
                      className="seva-fields formkit-fields"
                    >
                      <div className="formkit-field">
                        <input
                          className="formkit-input"
                          aria-label="Your name"
                          name="fields[first_name]"
                          required=""
                          placeholder="Your name"
                          type="text"
                          // style={{
                          //   color: `rgb(77, 77, 77)`,
                          //   borderColor: `rgb(227, 227, 227)`,
                          //   borderRadius: `4px`,
                          //   fontWeight: 400,
                          // }}
                        />
                      </div>
                      <div className="formkit-field">
                        <input
                          className="formkit-input"
                          name="email_address"
                          placeholder="Your email address"
                          required=""
                          type="email"
                          // style={{
                          //   color: `rgb(77, 77, 77)`,
                          //   borderColor: `rgb(227, 227, 227)`,
                          //   borderRadius: `4px`,
                          //   fontWeight: 400,
                          // }}
                        />
                      </div>
                      <div className="formkit-field">
                        <input
                          className="formkit-input"
                          aria-label="Company"
                          name="fields[null]"
                          placeholder="Company"
                          type="text"
                          // style={{
                          //   color: `rgb(77, 77, 77)`,
                          //   borderColor: `rgb(227, 227, 227)`,
                          //   borderRadius: `4px`,
                          //   fontWeight: 400,
                          // }}
                        />
                      </div>
                      <div className="formkit-field">
                        <input
                          className="formkit-input"
                          aria-label="Location"
                          name="fields[location]"
                          required=""
                          placeholder="Location"
                          type="text"
                          // style={{
                          //   color: `rgb(77, 77, 77)`,
                          //   borderColor: `rgb(227, 227, 227)`,
                          //   borderRadius: `4px`,
                          //   fontWeight: 400,
                          // }}
                        />
                      </div>
                      <div className="formkit-field">
                        <input
                          className="formkit-input"
                          aria-label="Phone number"
                          name="fields[null]"
                          placeholder="Phone number"
                          type="text"
                          // style={{
                          //   color: `rgb(77, 77, 77)`,
                          //   borderColor: `rgb(227, 227, 227)`,
                          //   borderRadius: `4px`,
                          //   fontWeight: 400,
                          // }}
                        />
                      </div>
                      <div className="formkit-field">
                        <div role="button" tabIndex="0">
                          <fieldset
                            data-group="checkboxes"
                            className="formkit-1967"
                            type="Custom"
                            order="5"
                            save_as="Tag"
                            group="field"
                          >
                            <legend
                              style={{
                                color: `rgb(77, 77, 77)`,
                                fontWeight: 400,
                              }}
                            >
                              Reason for your enquiry :
                            </legend>
                            <div
                              className="formkit-checkboxes"
                              data-element="tags-checkboxes"
                              data-group="checkbox"
                              style={{
                                color: `rgb(77, 77, 77)`,
                                borderColor: `rgb(227, 227, 227)`,
                                borderRadius: `4px`,
                                fontWeight: 400,
                              }}
                            >
                              <input
                                className="formkit-checkbox"
                                id="tag-4184380-1743428"
                                type="checkbox"
                                name="tags[]"
                                value="1743428"
                              />
                              <label htmlFor="tag-4184380-1743428">
                                Enterprise license query
                              </label>
                            </div>
                            <div
                              className="formkit-checkboxes"
                              data-element="tags-checkboxes"
                              data-group="checkbox"
                              style={{
                                color: `rgb(77, 77, 77)`,
                                borderColor: `rgb(227, 227, 227)`,
                                borderRadius: `4px`,
                                fontWeight: 400,
                              }}
                            >
                              <input
                                className="formkit-checkbox"
                                id="tag-4184380-1743429"
                                type="checkbox"
                                name="tags[]"
                                value="1743429"
                              />
                              <label htmlFor="tag-4184380-1743429">
                                Request a demo
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <button
                        data-element="submit"
                        className="formkit-submit formkit-submit"
                        id="button2"
                        className={clsx("button b1 button--lg", styles.button)}
                        // className={clsx("button b1 button--lg", styles.button)}
                        // style={{
                        //   color: `rgb(255, 255, 255)`,
                        //   backgroundColor: `rgb(251, 105, 112)`,
                        //   borderRadius: `24px`,
                        //   fontWeight: 700,
                        // }}
                      >
                        <div className="formkit-spinner">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <span>Request Callback</span>
                      </button>
                    </div>
                    <div
                      className="formkit-guarantee"
                      data-element="guarantee"
                      style={{
                        color: `rgb(125, 125, 125)`,
                        fontSize: `13px`,
                        fontWeight: 400,
                      }}
                    >
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

Modal.propTypes = {
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

Modal.defaultProps = {
  children: undefined,
  footer: undefined,
  header: undefined,
  width: "70vw",
  top: "10%",
  zIndex: "1050",
};

export default Modal;
