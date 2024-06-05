import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { projects } from "../../utils/projects";
import { useState } from "react";
import "./project.scss";

function Project() {
  const [data, setData] = useState(projects);
  const { t } = useTranslation();

  const filterHandler = (event) => {
    const filtertype = event.target.textContent;

    const filters = {
      [t("All")]: () => projects,
      [t("React")]: () =>
        projects.filter((project) => project.type === "React"),
      [t("Angular")]: () =>
        projects.filter((project) => project.type === "Angular"),
      [t("DOM")]: () => projects.filter((project) => project.type === "DOM"),
    };

    setData(filters[filtertype]());
  };

  return (
    <>
      <div className="project">
        <div className="project-filter">
          <button className="project-filter-all" onClick={filterHandler}>
            {t("All")}
          </button>
          <button className="project-filter-react" onClick={filterHandler}>
            {t("React")}
          </button>
          <button className="project-filter-angular" onClick={filterHandler}>
            {t("Angular")}
          </button>
          <button className="project-filter-dom" onClick={filterHandler}>
            {t("DOM")}
          </button>
        </div>
        {data.map((project) => (
          <div key={project.id} className="project-container">
            <div className="project-container-box">
              <img
                className="project-container-box-image"
                src={project.logo}
                alt={project.title}
              />
              <Link
                to={project.link}
                target="_blank"
                className="project-container-box-link"
              >
                {t("Go to Project")}
              </Link>
            </div>
            <img
              className="project-container-logo"
              src={project.icon}
              alt="logo"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Project;
