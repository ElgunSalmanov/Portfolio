import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./footer.scss";

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer id="footer">
        <div className="content">
          <p className="content-text">
            &copy; {t("Made by")} Elgun Salmanov 2024
          </p>
          <ul className="content-direction">
            <Link
              to="https://www.linkedin.com/in/elgunsalmanov/"
              target="_blank"
              className="content-direction-link"
            >
              Linkedin
            </Link>
            /
            <Link
              to="https://github.com/ElgunSalmanov"
              target="_blank"
              className="content-direction-link"
            >
              GitHub
            </Link>
            /
            <Link
              to="https://instagram.com/13elgun13"
              target="_blank"
              className="content-direction-link"
            >
              Instagram
            </Link>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
