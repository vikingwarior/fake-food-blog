import { ofLogo } from "../utils/constants"

const Header = () => {
  return (
    <header className="header">
      <img src={ofLogo} alt="logo" className="logo" />
      <nav className="header-nav">Nav</nav>
    </header>
  )
}

export default Header
