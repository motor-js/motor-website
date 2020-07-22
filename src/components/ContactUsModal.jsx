import React, { useState } from "react";
import { Modal } from "@motor-js/core";
import Link from "@docusaurus/Link";
import styles from "../pages/styles.module.css";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ContactUsForm from "./ContactUsForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

const ContactUsModal = (props) => {
  const [status, setStatus] = useState(null);
  const YOUR_FORM_ID = 1535732;
  const YOUR_FORM_URL = `https://app.convertkit.com/forms/${YOUR_FORM_ID}/subscriptions`;

  let isShowing = props.isShowing;

  const toggle = () => {
    props.onToggle();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("here");

    try {
      const response = await fetch(YOUR_FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      });

      const json = await response.json();

      console.log(json);

      if (json.status === "success") {
        setStatus("SUCCESS");
        return;
      }

      setStatus("ERROR");
    } catch (err) {
      setStatus("ERROR");
    }
  };

  return (
    // <form action={YOUR_FORM_URL} method="post" onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     aria-label="Your name"
    //     name="fields[first_name]"
    //     placeholder="Your name"
    //     required
    //   />
    //   <input
    //     type="email"
    //     aria-label="Your email"
    //     name="email_address"
    //     placeholder="Your email address"
    //     required
    //   />
    //   <button type="submit">Subscribe</button>
    //   {status === "SUCCESS" && <p>Please go confirm your subscription!</p>}
    //   {status === "ERROR" && <p>Oops, try again.</p>}
    // </form>
    <Modal
      top="10%"
      header={
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: `rgb(251, 105, 112)`,
          }}
        >
          <span>Modal Title</span>
          <FontAwesomeIcon
            icon={faTimesCircle}
            size="lg"
            onClick={toggle}
            className={clsx("icon", styles.icon)}
          />
        </div>
      }
      footer={
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {/* <Button width="100px" onClick={toggle}>
            Close
          </Button> */}
          <Link
            id="button2"
            className={clsx("button b1 button--lg", styles.button)}
            // to={useBaseUrl("docs/Getting%20Started")}
            onClick={toggle}
          >
            {/* {price.actionName} */}
            Close
          </Link>
        </div>
      }
      isShowing={isShowing}
    >
      <div style={{ display: "flex", height: "500px", padding: "20px 0px" }}>
        <ContactUsForm />
      </div>
    </Modal>
  );
};

export default ContactUsModal;
