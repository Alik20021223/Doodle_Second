import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Projects() {
  const projects = useSelector(state => state.menuBar.projects_1)

  const {t} = useTranslation();

  return (
    <>
      <div className="project-block">
        <div className="container_adaptive">
          <h2 className="h2-project sizeOfLink">{t("Projects")}</h2>
          <div className="projects-block">
            <div className="allProjects-block">
              {projects.map((o) => 
                o.id !== 5 && (
                  <div key={o.class} className={`blockProj-${o.class} posOfProject`} role="button" tabIndex={0}>
                  <div className="brProj">
                    <Link
                      to={o.href}
                      tabIndex={-1}
                      className="linkForProject-1 linkForProject-2"
                    >
                      <div
                        className={`blockProjectTxt-${o.class} typeOfProjTxt`}
                      >
                        <div>
                          <h3 className="project-h3 sizeOfLinkToUs">
                            {o.project_h3}
                          </h3>
                          <p className={`sizeOfTxtTop mtProjForTxt`}>{o.project_p}</p>
                        </div>
                        <div>
                          <h4 className="project-h4 project-h4Txt">
                            {o.dowloand_count}
                          </h4>
                          <p className={`sizeOfTxtTop mtProjForTxt`}>{o.dowloand_p}</p>
                        </div>
                      </div>
                      <div className="imgProjBlock">
                        <img
                          src={o.img}
                          alt="project-img"
                          decoding="async"
                          data-nimg="fill"
                          loading="lazy"
                          className="img-project"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                )
              )}
            </div>
            <div className="allProjects-link">
              <div className="linkToUs">
                <a
                  href="https://doubletapp.ai/projects"
                  className="btnLinkToUs-1 btnLinkToUs-2 justForBtn btnLinkToUs-4 sizeOfLinkToUs"
                >
                  Все проекты
                </a>
                <div className="redLine-1 redLine-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
