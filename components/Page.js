import React from 'react';
import classNames from 'classnames';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

import "../scss/main.scss"

const Page = (props) => {
  return (
    <>
      <Meta pageTitle={props.pageTitle} />
      <div className={classNames('page', { 'page--home': props.isHomePage })}>
        <Header isHomePage={props.isHomePage} />
        <section className="page__content">
          {props.children}
        </section>
        <Footer isHomePage={props.isHomePage} />
      </div>
    </>
  );
};

export default Page;
