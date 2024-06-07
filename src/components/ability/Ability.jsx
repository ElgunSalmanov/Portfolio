import html from "../../../public/icons/html.svg";
import css from "../../../public/icons/css.svg";
import js from "../../../public/icons/javascript.svg";
import c from "../../../public/icons/c.svg";
import cplus from "../../../public/icons/c++.svg";
import react from "../../../public/icons/react.svg";
import redux from "../../../public/icons/redux.svg";
import angular from "../../../public/icons/angular-icon.svg";
import ts from "../../../public/icons/typescript-icon.svg";
import git from "../../../public/icons/git-icon.svg";
import github from "../../../public/icons/github-icon.svg";
import sass from "../../../public/icons/sass.svg";
import bootstrap from "../../../public/icons/bootstrap-5.svg";
import "./ability.scss";

function Ability() {
  return (
    <>
      <div className="ability">
        <div className="ability-first">
          <div className="hexagon">
            <img className="hexagon-image" src={html} alt="html" />
          </div>
          <div className="hexagon">
            <img className="hexagon-image" src={css} alt="css" />
          </div>
          <div className="hexagon">
            <img className="hexagon-image" src={js} alt="js" />
          </div>
        </div>
        <div className="ability-second">
          <div className="hexagon">
            <img className="hexagon-image" src={c} alt="c" />
          </div>
          <div className="hexagon">
            <img className="hexagon-image" src={cplus} alt="cplus" />
          </div>
          <div className="hexagon">
            <img className="hexagon-image" src={react} alt="react" />
          </div>
          <div className="hexagon">
            <img className="hexagon-image" src={angular} alt="angular" />
          </div>
        </div>
        <div className="ability-third">
          <div className="hexagon">
            <img className="hexagon-image" src={redux} alt="redux" />
          </div>
          <div className="hexagon">
            <img className="hexagon-image" src={ts} alt="ts" />
          </div>
          <div className="hexagon">
            <img className="hexagon-image" src={bootstrap} alt="bootstrap" />
          </div>
        </div>
        <div className="ability-fourth">
          <div className="hexagon">
            <img className="hexagon-image" src={git} alt="git" />
          </div>
          <div className="hexagon">
            <img className="hexagon-image" src={github} alt="github" />
          </div>
        </div>
        <div className="ability-fifth">
          <div className="hexagon">
            <img className="hexagon-image" src={sass} alt="sass" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Ability;
