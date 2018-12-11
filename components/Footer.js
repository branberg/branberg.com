import Link from 'next/link'
import classNames from 'classnames';

const Footer = (props) => (
  <footer className={classNames('site-footer', { 'site-footer--home': props.isHomePage })}>
    <p className="site-footer__text">
      Say hi. <a href="mailto:hello@branberg.com?subject=Hi" target="_blank">hello@branberg.com</a>
    </p>
    <p className="site-footer__text">
      Made by Nice people in Minnesota
    </p>
  </footer>
);

export default Footer;
