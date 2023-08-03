import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Proj() {
  const projects = useSelector(state => state.menuBar.projects);
  const projectType = useSelector(state => state.menuBar.projectType);

  const filteredProjects = projects.filter((o) => {
    if (projectType === 'Все') {
      return true; 
    } else if (projectType === 'Мобильное приложение') {
      return o.mob; 
    } else if (projectType === 'Веб') {
      return o.web; 
    } else if (projectType === 'Машинное обучение') {
      return o.machine; 
    }
    return false;
  });
  let i = 1;
  const renderedProjects = filteredProjects.map((o, index) => {
    let classOfMob = index % 2 === 0 ? 'evenMobProject' : 'oddMobProject';
    let className = '';
    

    if (index >= 2 && index !== filteredProjects.length - 1 && index !== filteredProjects.length - 2) {
      className = `${classOfMob}-block PossitionOfProj`;
    } else if (index < 2) {
      className = `mobBlock-${index} PossitionOfProj`;
    } else {
      className = `mobBlock-end-${i++} PossitionOfProj`;
    }

        return (
            <div key={o.id} className={className} role="button" tabIndex={0}>
                <div className="brProj">
                    <Link to={o.href} tabIndex={-1} className="linkForProject-1 linkForProject-2">
                    <div className={`${classOfMob}-blockTxt typeOfProjTxt`}>
                        <div>
                        <h3 className="project-h3 sizeOfLinkToUs">{o.project_h3}</h3>
                        <p className="sizeOfTxtTop mtProjForTxt">{o.project_p}</p>
                        </div>
                        <div>
                        <h4 className="project-h4 project-h4Txt">{o.dowloand_count}</h4>
                        <p className="sizeOfTxtTop mtProjForTxt">{o.dowloand_p}</p>
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
        );
    }
  );
  return <>{renderedProjects}</>;
}

export default Proj;
