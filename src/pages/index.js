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
        Charts, Components and Layouts are responsive out of the box, supporting all screen sizes.
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
        Pay by developer so you can scale without cost.
      </>
    ),
  },
  {
    title: <>Fully Supported</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Dedicated support with issues and a free implementation session on our Enterprise plan
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
              Get Started
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
              <div className='heading'>Reasons you'll love motor js</div>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.features}>
          <div className="container">
            Hi
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
