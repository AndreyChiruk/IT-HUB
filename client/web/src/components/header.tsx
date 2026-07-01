import { Link, useNavigate } from "react-router-dom";
import logotip from "../static/logo.png";
import "../styles/header.css";
function Header() {
  const navigate = useNavigate();
  const deleteLocalStorage = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <header>
      <div className="box-logo">
        <img className="header-logo" src={logotip} alt="" />
      </div>
      <div className="box-navigation">
        <ul className="list">
          <li>
            <Link to="/" className="list-elem">
              Главная
            </Link>
          </li>
          <li>
            <Link to="/events" className="list-elem">
              Ивенты
            </Link>
          </li>
          <li>
            <Link to="/profile" className="list-elem">
              Профиль
            </Link>
          </li>
          <li>
            <button onClick={deleteLocalStorage} className="list-elem">
              Выйти
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
