import { headerNavList, ofLogo } from "../utils/constants";

const Header = () => {
  return (
    <header className="header">
      <img src={ofLogo} alt="logo" className="logo" />
      <nav className="header-nav">
        <ul>
          {headerNavList.map((header) => (
            <li key={header}>
              <a href="#">{header}</a>
            </li>
          ))}
          <li>
            <a href="#" className="header-nav-cta">
              Section-5
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
