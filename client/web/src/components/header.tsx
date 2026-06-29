import { Link } from "react-router-dom";
import logotip from "../static/logo.png";
import "../styles/header.css";
function Header() {
  return (
    <header>
      <div className="box-logo">
        <img className="header-logo" src={logotip} alt="" />
      </div>
      <div className="box-navigation">
        <ul className="list">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/profile">Профиль</Link>
          </li>
          <li>
            <Link to="/exit">Выйти</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
