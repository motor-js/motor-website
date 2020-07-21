import React, { useState } from "react";
import { Modal, Button } from "motor-ui";
import useBaseUrl from "@docusaurus/useBaseUrl";

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
      header={
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>Modal Title</div>
      }
      footer={
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button width="100px" onClick={toggle}>
            Close
          </Button>
        </div>
      }
      isShowing={isShowing}
    >
      <div style={{ display: "flex", height: "50px", padding: "20px 0px" }}>
        Form Content
      </div>
    </Modal>
  );
};

export default ContactUsModal;
