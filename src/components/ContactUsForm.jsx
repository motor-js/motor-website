import React, { useState } from "react";
import "./ContactUsForm.css"; // Import regular stylesheet

const ContacUsForm = () => {
  const [status, setStatus] = useState(null);
  const YOUR_FORM_ID = 1535732;
  //   const YOUR_FORM_URL = `https://app.convertkit.com/forms/1535732/subscriptions`;
  const YOUR_FORM_URL = `https://app.convertkit.com/forms/${YOUR_FORM_ID}/subscriptions`;

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
    // <div>
    //   <a
    //     data-formkit-toggle="5902fe96f4"
    //     href="https://colossal-pioneer-7675.ck.page/5902fe96f4"
    //   >
    //     Your link text
    //   </a>
    <form
      action="https://app.convertkit.com/forms/1535694/subscriptions"
      className="seva-form formkit-form"
      method="post"
      data-sv-form="1535694"
      data-uid="5902fe96f4"
      data-format="modal"
      data-version="5"
      data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":"http://localhost:3000/pricing"},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
      min-width="400 500 600 700 800"
      style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: "6px" }}
      //   onSubmit={handleSubmit}
    >
      <div data-style="full">
        <div
          data-element="column"
          className="formkit-background"
          style={{
            backgroundImage: `url(
              "//pages.convertkit.com/assets/charlotte/bg.jpg"
            )`,
          }}
        ></div>
        <div data-element="column" className="formkit-column">
          <div
            className="formkit-header"
            data-element="header"
            style={{
              color: "rgb(83, 83, 83)",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            <h1>Get our how to guide</h1>
          </div>
          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          ></ul>
          <div data-element="fields" className="seva-fields formkit-fields">
            <div className="formkit-field">
              <input
                className="formkit-input"
                aria-label="Your first name"
                name="fields[first_name]"
                placeholder="Your first name"
                type="text"
                style={{
                  color: `rgb(139, 139, 139)`,
                  borderColor: "rgb(221, 224, 228)",
                  fontWeight: "400",
                }}
              />
            </div>
            <div className="formkit-field">
              <input
                className="formkit-input"
                name="email_address"
                placeholder="Your email address"
                required=""
                type="email"
                style={{
                  color: `rgb(139, 139, 139)`,
                  borderColor: `rgb(221, 224, 228)`,
                  fontWeight: "400",
                }}
              />
            </div>
            <div className="formkit-field">
              <div role="button" tabIndex="0">
                <fieldset
                  data-group="checkboxes"
                  className="formkit-5279"
                  type="Custom"
                  order="2"
                  save_as="Tag"
                  group="field"
                >
                  <div
                    className="formkit-checkboxes"
                    data-element="tags-checkboxes"
                    data-group="checkbox"
                    style={{
                      color: `rgb(139, 139, 139)`,
                      borderColor: `rgb(221, 224, 228)`,
                      fontWeight: `400`,
                    }}
                  >
                    <input
                      className="formkit-checkbox"
                      id="tag-4148000-1735622"
                      type="checkbox"
                      name="tags[]"
                      value="1735622"
                    />
                    <label htmlFor="tag-4148000-1735622">Subscribe</label>
                  </div>
                  <div
                    className="formkit-checkboxes"
                    data-element="tags-checkboxes"
                    data-group="checkbox"
                    style={{
                      color: `rgb(139, 139, 139)`,
                      borderColor: `rgb(221, 224, 228)`,
                      fontWeight: "400",
                    }}
                  >
                    <input
                      className="formkit-checkbox"
                      id="tag-4148000-1735623"
                      type="checkbox"
                      name="tags[]"
                      value="1735623"
                    />
                    <label htmlFor="tag-4148000-1735623">Recommendations</label>
                  </div>
                </fieldset>
              </div>
            </div>
            <button
              data-element="submit"
              className="formkit-submit formkit-submit"
              style={{
                color: `rgb(255, 255, 255)`,
                backgroundColor: `rgb(246, 166, 171)`,
                borderRadius: `3px`,
                fontWeight: `700`,
              }}
            >
              <div className="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>Send me the guide</span>
            </button>
          </div>
          <div
            className="formkit-disclaimer"
            data-element="disclaimer"
            style={{ color: `rgb(139, 139, 139)`, fontSize: `13px` }}
          >
            We respect your privacy. Unsubscribe at anytime.
          </div>
          <a
            href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"
            className="formkit-powered-by"
            data-element="powered-by"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered By ConvertKit
          </a>
        </div>
      </div>
    </form>
    // </div>
  );
};

export default ContacUsForm;
