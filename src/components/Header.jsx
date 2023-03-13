import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        <Image
          src="images/logo.svg"
          alt="Vivian's logo"
          className="logo"
          width="66"
          height="66"
        />
      </Link>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`${showMenu ? "collapse " : ""}navbar-collapse`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/#projects">
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
