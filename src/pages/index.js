import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Powerful Theming</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Tailor the library to your needs. Control color, styles and layouts through our easy to use theme object.
      </>
    ),
  },
  {
    title: <>Responsive Charts</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Charts, Components and Layouts are responsive, supporting all screen sizes.
      </>
    ),
  },
  {
    title: <>Free for Non-Commercial</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Get started for free, just install from npm, connect to a Qlik engine and start building.
      </>
    ),
  },
  {
    title: <>Awesome Hooks</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Re-usable hooks to speed up the development of your custom dashboards
      </>
    ),
  },
  {
    title: <>Simple Licensing</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Pay by developer, so you can scale without additional cost.
      </>
    ),
  },
  {
    title: <>Typescript Support</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
       Support for Typescript out of the box. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
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
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Motor homepage">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <span className="hero__title">{siteConfig.title}</span>
          <div className="hero__subtitle">{siteConfig.tagline}</div>
          <div className={styles.buttons}>
            <Link
              id='button1'
              className={clsx(
                'button b1 button--lg',
                styles.button,
              )}
              to={useBaseUrl('docs/Getting%20Started')}>
              Get Started for free
            </Link>
            <Link
              id='button2'
              className={clsx(
                'button button--lg',
                styles.button,
              )}
              to={useBaseUrl('docs/')}>
              Book Demo
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className='heading'>Reasons you'll love motor</div>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.components}>
          <div className="container">
            <div className='heading'>Explore Components</div>
            <div className={clsx('col', styles.components)}>
              <div className='left-side'>
                <div style={{ border: '1px solid red', height: '300px', width: '500px'}}>
                  Image here
                </div>
              </div>
              <div>
                <div className='right-side'>
                  <div className="sub-heading">
                    Our Charts sit on top of the Qlik engine, providing an interactive and responsive UI experience.
                    <br />
                    <br />
                    Everything is themeable in just a few lines of code - apply your brand color, custom styles and fonts with ease
                    <br />
                    <br />
                    Check out the live examples in our docs
                  </div>
                  <div>
                    <Link
                      id='button2'
                      className={clsx(
                        'button b1 button--lg',
                        styles.button,
                      )}
                      to={useBaseUrl('docs/Getting%20Started')}>
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
          <div className='heading'>Need to build a custom Qlik solution?</div>
          <Link
            id='button3'
            className={clsx(
              'button b1 button--lg',
              styles.button,
            )}
            to={useBaseUrl('docs/Getting%20Started')}>
            Contact Us
           </Link>
          </div>
        </section>
        <section className={styles.features}>
          <div className="container">
          <div className='heading'>Get Started</div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
