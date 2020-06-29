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
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--lg',
                styles.button,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
            <Link
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
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
