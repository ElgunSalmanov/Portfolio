import { useTranslation } from "react-i18next";
import user from "../../assets/img/user.jpg";
import "./info.scss";

function Info() {
  const { t } = useTranslation();

  return (
    <>
      <div className="info">
        <img className="info-image" src={user} alt="user" />
        <div className="info-container">
          <div className="info-container-about">
            <h1 className="info-container-about-title">{t("About me")}</h1>
            <div className="info-container-about-box">
              <p className="info-container-about-box-content-first">
                {t(
                  "Smart worker, quick learner, dedicated to work, good in communication skills."
                )}
              </p>
              <p className="info-container-about-box-content-second">
                {t(
                  "I am a highly skilled and dedicated frontend developer in HTML, CSS, Javascript, SCSS/SASS, Bootstrap, Git, Angular and ReactJS. I am adept at creating visually stunning and responsive web interfaces that deliver expectional user experiences."
                )}
              </p>
              <p className="info-container-about-box-content-third">
                {t(
                  "Additionally, I have gained valuable experience with C/C++, Python, Typescript, JQuery, which allows me to effectively collaborate with backend team as a frontend developer."
                )}
              </p>
            </div>
          </div>
          <div className="info-container-bio">
            <h1 className="info-container-bio-title">{t("Bio")}</h1>
            <div className="info-container-bio-box">
              <p className="info-container-bio-box-content-first">
                {t("Email")}: <span>elgunsalmanov2004@gmail.com</span>
              </p>
              <p className="info-container-bio-box-content-second">
                {t("Phone")}: <span>+994 51-637-82-17</span>
              </p>
              <p className="info-container-bio-box-content-third">
                {t("Address")}: <span>Baku, Azerbaijan</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
