import Link from 'next/link'
import classNames from 'classnames';

const Footer = (props) => (
  <footer className={classNames('site-footer', { 'site-footer--home': props.isHomePage })}>
    <p className="site-footer__text">
      {"Say hi. "}
      <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#64;&#98;&#114;&#97;&#110;&#98;&#101;&#114;&#103;&#46;&#99;&#111;&#109;">
        &#104;&#101;&#108;&#108;&#111;&#64;&#98;&#114;&#97;&#110;&#98;&#101;&#114;&#103;&#46;&#99;&#111;&#109;
      </a>
    </p>
    <Link href="/">
      <a className="site-footer__logo" />
    </Link>
    <p className="site-footer__text">
      Made by Nice people in Minnesota
    </p>
  </footer>
);

export default Footer;
