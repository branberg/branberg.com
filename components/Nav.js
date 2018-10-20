import Link from 'next/link';

const Nav = () => (
  <header className="site-header">
    <Link href="/">
      <a className="site-header__logo" rel="home">
        <div className="site-header__branberg-icon"></div>
      </a>
    </Link>
    <nav className="site-header__nav">
      <ul>
        <li>
          <Link href="/work">
            <a>Work</a>
          </Link>
        </li>
        <li>
          <button className="md-trigger" data-modal="modal-1">Contact</button>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
