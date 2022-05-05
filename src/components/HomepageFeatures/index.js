import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '101',
    Svg: require('@site/static/img/undraw_books_re_8gea.svg').default,
    available: true,
    href: "docs/101/what-is-legal-tech",
    description: (
      <>
        If you are new to legal tech, get a primer on what you need to know
      </>
    ),
  },
  {
    title: 'Change',
    Svg: require('@site/static/img/undraw_road_sign_re_3kc3.svg').default,
    available: true,

    description: (
      <>
        How to get teams and people to change (including those who might not want to)
      </>
    ),
  },
  {
    title: 'Transactions',
    available: true,
    Svg: require('@site/static/img/undraw_absorbed_in_re_ymd6.svg').default,
    description: (
      <>
        Explore ways in which law firms can complete transactions more effectively
      </>
    ),
  },
  {
    title: 'Knowledge',
    available: true,
    Svg: require('@site/static/img/undraw_learning_re_32qv.svg').default,
    description: (
      <>
        Tools and techniques to enable better knowledge and experience sharing
      </>
    ),
  },
  {
    title: 'Litigation',
    available: false,
    Svg: require('@site/static/img/undraw_visionary_technology_re_jfp7.svg').default,
    description: (
      <>
        Looking for contributors
      </>
    ),
  },
  {
    title: 'Contracts',
    available: false,
    Svg: require('@site/static/img/undraw_learning_re_32qv.svg').default,
    description: (
      <>
        Looking for contributors
      </>
    ),
  },
];

function Feature({Svg, title, description, available, href}) {
  return (
    <a href={available ? href : ""} className={clsx('col col--4 home', !available && 'unavailable', available && 'available')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p className={clsx(!available && 'pill')}>{available ? description : 'Coming soon'}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
      <div className="container--header">
        Do Legal Tech Toolkits
      </div>
          <div className="row">

            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}

          </div>
      </div>
    </section>
  );
}
