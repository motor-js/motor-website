import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import CustomCodeBlock from "../components/CustomCodeBlock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { useModal } from "@motor-js/core";
import ContactUs from "../components/ContactUsForm";
import useWindowDimensions from "../components/useWindowDimensions"
import useWindowSize from '@theme/hooks/useWindowSize';

const usageExample = `
import { Filter, Motor } from '@motor-js/core'

<Motor 
  config={ /* Connect to your Qlik site */ }
  theme={ /* Theme your Mashup */ }
>
  //...
  <Filter cols=['AwesomeDimension'] />
  //...
</Motor>

`.trim();

const starter_URL =
  "https://github.com/motor-js/motor-starter/archive/master.zip";

const features = [
  {
    title: <>Free for Non-Commercial Use</>,
    imageUrl: "img/icons/happy.svg",
    description: (
      <>
        Get started for free, just install from npm, connect to a Qlik engine
        and start building.
      </>
    ),
  },
  {
    title: <>Powerful Theming</>,
    imageUrl: "img/icons/design.svg",
    description: (
      <>
        Tailor the library to your needs. Control color, styles and layouts
        through our easy to use theme object.
      </>
    ),
  },
  {
    title: <>Responsive Charts</>,
    imageUrl: "img/icons/mobile.svg",
    description: (
      <>
        Charts, Components and Layouts are responsive, supporting all screen
        sizes.
      </>
    ),
  },
  {
    title: <>Awesome Hooks</>,
    imageUrl: "img/icons/graph.svg",
    description: (
      <>Re-usable hooks to speed up the development of your custom dashboards</>
    ),
  },
  {
    title: <>Simple Licensing</>,
    imageUrl: "img/icons/shopping.svg",
    description: (
      <>Pay by developer, so you can scale without additional cost.</>
    ),
  },
  {
    title: <>Typescript Support</>,
    imageUrl: "img/icons/flag.svg",
    description: <>Out of the box support for Typescript.</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
const width = 1000
//  const { height, width } = useWindowDimensions();
const windowSize = useWindowSize();

  useEffect(() => {
      // Include the Crisp code here, without the <script></script> tags
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "313a6b40-8101-456d-8ca3-2acbba65bcd0";

    (function() {
      var d = document;
      var s = d.createElement("script");
  
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  },[])


  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { isShowing, toggle } = useModal();
  const [checkedValue, setCheckedValue] = useState(null);

  return (
    <Layout title={`${siteConfig.title}`} description="Motor homepage">
      <ContactUs
        isShowing={isShowing}
        onToggle={toggle}
        checkedValue={checkedValue}
      />
      <div className="hero-overlay">
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
          <div className="container">
            <span className="hero__title">{siteConfig.title}</span>
            <div className="hero__subtitle">{siteConfig.tagline}</div>
            <div className={styles.buttons}>
              <Link
                id="button1"
                className={clsx("button b1 button--lg", styles.button)}
                to={useBaseUrl("docs/Getting%20Started")}
              >
                Get Started for free
              </Link>
              <Link
                id="button2"
                className={clsx("button button--lg", styles.button)}
                // to={useBaseUrl("docs/")}
                // onClick={toggle}
                onClick={() => {
                  toggle();
                  setCheckedValue("BOOKDEMO");
                }}
              >
                Book Demo
              </Link>
            </div>
          </div>
        </header>
      </div>
      <main>
        <section className={styles.usage}>
          <div className="container">
            <div className='usage-wrap'>
              <div className="usage">
                <div className="usage-title">Installation</div>
                <div className="usage-body">
                  <div className="usage-text">
                    Install the source files via NPM.
                  </div>
                  <div className="usage-text">
                    { windowSize !== 'mobile' ? <CustomCodeBlock js={"npm install @motor-js/core"}/>: '' }
                  </div>
                </div>
                <div className="usage-body">
                  <div className="usage-text">
                    Or download our starter dashboard.
                  </div>
                  <div className="plan-button">
                    <Link
                      id="button-starter"
                      className={clsx("button b2 button--md", styles.button)}
                      // to={useBaseUrl("docs/Getting%20Started")}
                      to={starter_URL}
                    >
                      <FontAwesomeIcon icon={faArrowAltCircleDown} size="lg" />
                      {" Download"}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="usage">
                <div className="usage-title">Usage</div>
                <div className="usage-text">
                  Connect to your Qlik site through our Motor component and then
                  use the components without any additional setup.
                </div>
                <div className="usage-text">
                 { windowSize !== 'mobile' ? <CustomCodeBlock js={usageExample} /> : ''}
                </div>
                <div>
                  <Link
                    id="button-starter"
                    className={clsx("button b2 button--md", styles.button)}
                    to={useBaseUrl("docs/Getting%20Started")}
                  >
                    <FontAwesomeIcon icon={faArrowAltCircleRight} size="lg" />
                    {" Explore the Docs"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="heading">Reasons you'll love motor</div>
              <div className="feature-wrap">
                <div className="row">
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        <section className={styles.altcontainer}>
          <div className="container">
            <div style={{ display: 'flex', textAlign: 'center'}}className="heading">
              We are adding features and would love your feedback!
              <br />
              Get in touch via chat or on Spectrum</div>
            <Link
              id="button4"
              className={clsx("button b1 button--lg", styles.button)}
              to={useBaseUrl("https://spectrum.chat/motor-js?tab=posts")}
            >
              View Community
            </Link>
          </div>
        </section>
        <section className={styles.components}>
          <div className="container">
            <div className="heading">Charts Powered by the Engine</div>
            <div className={clsx("col", styles.components)}>
              <div className="left-side">
                <div
                  style={{
                    height: "400px",
                    width: "100%",
                    paddingRight: '50px',
                    backgroundImage: "url(/img/eg_charts.png)",
                    backgroundSize: "cover",
                  }}
                />
              </div>
                <div className="right-side">
                  <div className="sub-heading">
                    Go beyond Qlik's native charting capabilities with our range of charts.
                    Have full control over style, apply custom events and a lot more.
                    <br />
                    <br />
                    <br />
                    No need for the Capability APIs, our charts work off any Qlik engine connection, providing an
                    interactive and responsive UI experience.
                    <br />
                    <br />
                    <br />
                    Check out the examples in our docs
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <section className={styles.darkcontainer}>
          <div className="container">
            <div className="heading">Need to build a custom Qlik solution?</div>
            <Link
              id="button4"
              className={clsx("button b1 button--lg", styles.button)}
              onClick={() => {
                toggle();
                setCheckedValue("CONTACTUS");
              }}
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;

/*
        <section className={styles.components}>
          <div className="container">
            <div className="heading">Unbelievable Theming</div>
            <div className={clsx("col", styles.components)}>
              <div className="left-side">
                <div className="sub-heading">
                  Theme your entire dashboard with ease and customise all of our components through
                  our simple to use theme object. 
                  <br />
                  <br />
                  <br />                  
                  Motor JS leverages CSS in JS and a high level theming context. Apply your theme changes once 
                  in our top level Motor component and it'll propogate through your application.
                  </div>
                </div>
              <div>
              <div className="right-side">
              </div>
              </div>
            </div>
          </div>
        </section>

*/