import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Introduction to legal tech',
    Svg: require('@site/static/img/undraw_books_re_8gea.svg').default,
    available: true,
    href: "docs/basics/background",
    description: (
      <>
        Start here if you want to get a quick introduction to legal tech
      </>
    ),
  },
  {
    title: 'Doing a project',
    Svg: require('@site/static/img/undraw_learning_re_32qv.svg').default,
    available: true,
    href: "docs/basics/background",
    description: (
      <>
        A basic framework you to follow on all legal tech projects
      </>
    ),
  },
  {
    title: 'Making people change',
    Svg: require('@site/static/img/undraw_road_sign_re_3kc3.svg').default,
    available: false,
    href: "docs/change/background",
    description: (
      <>
        How to get teams and people to change (including those who might not want to)
      </>
    ),
  },
  {
    title: 'Knowledge management',
    available: false,
    Svg: require('@site/static/img/undraw_sharing_knowledge_03vp.svg').default,
    description: (
      <>
        Tools and techniques to enable better knowledge and experience sharing
      </>
    ),
  },
  {
    title: 'Tech and transactions',
    available: false,
    Svg: require('@site/static/img/undraw_absorbed_in_re_ymd6.svg').default,
    description: (
      <>
        Explore ways in which law firms can complete transactions more effectively
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
      <div className="text--center padding-horiz--md testdiv">
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
