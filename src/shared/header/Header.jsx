import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18";
import logo from "../../assets/logo/logo.ico";
import menu from "../../assets/icon/menu.svg";
import "./header.scss";

function Header() {
  const [selectLanguage, setSelectLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const changeLanguage = (event) => {
    setSelectLanguage(event.target.value);
    localStorage.setItem("language", event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    let language = localStorage.getItem("language") || "en";
    i18n.changeLanguage(language);
  }, []);

  return (
    <>
      <header id="header">
        <nav className="navigate">
          <div className="navigate-view">
            <img className="navigate-view-image" src={logo} alt="logo" />
            <h3 className="navigate-view-content">
              ortfolio<span className="navigate-view-content-point">.</span>
            </h3>
          </div>
          <ul
            className="navigate-direction"
            style={{
              right: open ? "18%" : "-110%",
            }}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navigate-direction-link ${isActive ? "active" : ""}`
              }
            >
              {t("Home")}
            </NavLink>
            <NavLink to="/about" className="navigate-direction-link">
              {t("About")}
            </NavLink>
            <NavLink to="/skills" className="navigate-direction-link">
              {t("Skills")}
            </NavLink>
            <NavLink to="/projects" className="navigate-direction-link">
              {t("Projects")}
            </NavLink>
            <NavLink to="/contact" className="navigate-direction-link">
              {t("Contact")}
            </NavLink>
            <select
              value={selectLanguage}
              onChange={changeLanguage}
              className="navigate-direction-language"
            >
              <option value="en" className="navigate-direction-language-item">
                En
              </option>
              <option value="az" className="navigate-direction-language-item">
                Az
              </option>
              <option value="ru" className="navigate-direction-language-item">
                Ru
              </option>
            </select>
          </ul>
          <img
            className="navigate-menu"
            onClick={toggleMenu}
            src={menu}
            alt="menu"
          />
        </nav>
      </header>
    </>
  );
}

export default Header;
