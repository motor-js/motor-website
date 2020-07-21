import React from "react";
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

const usageExample = `
import { Filter, Motor } from '@motor-js/core'

<Motor config={ /* Connect to your Qlik site */ }>
  //...
  <Filter cols=['AwesomeDimension'] />
  //...
</Motor>

`.trim();

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
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description="Motor homepage">
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
                to={useBaseUrl("docs/")}
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
            <div className={clsx("col", styles.usage)}>
              <div className="usage">
                <div className="usage-title">Installation</div>
                <div className="usage-body">
                  <div className="usage-text">
                    Install the source files via NPM.
                  </div>
                  <div className="usage-text">
                    <CustomCodeBlock js={"npm install @motor-js/core"} />
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
                      to={useBaseUrl("docs/Getting%20Started")}
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
                  <CustomCodeBlock js={usageExample} />
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
        <section className={styles.components}>
          <div className="container">
            <div className="heading">Explore Charts & Components</div>
            <div className={clsx("col", styles.components)}>
              <div className="left-side">
                <div
                  style={{
                    height: "400px",
                    width: "600px",
                    backgroundImage: "url(/img/eg_charts.png)",
                    backgroundSize: "cover",
                  }}
                />
              </div>
              <div>
                <div className="right-side">
                  <div className="sub-heading">
                    Our Charts sit on top of the Qlik engine, providing an
                    interactive and responsive UI experience.
                    <br />
                    <br />
                    Everything is themeable in just a few lines of code - apply
                    your brand color, custom styles and fonts with ease
                    <br />
                    <br />
                    Check out the live examples in our docs
                  </div>
                  <div>
                    <Link
                      id="button3"
                      className={clsx("button b1 button--lg", styles.button)}
                      to={useBaseUrl("docs/Getting%20Started")}
                    >
                      Explore Charts
                    </Link>
                  </div>
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
              to={useBaseUrl("docs/Getting%20Started")}
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
