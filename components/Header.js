import Link from 'next/link'
import classNames from 'classnames';

const Header = (props) => (
  <header className={classNames('site-header', { 'site-header--home': props.isHomePage })}>
    <Link href="/">
      <a className="site-header__logo" />
    </Link>
    <Link href="/career">
      <a>Career</a>
    </Link>
  </header>
);

export default Header;
