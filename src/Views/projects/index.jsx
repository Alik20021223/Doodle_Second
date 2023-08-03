import React from "react";

import { useDispatch, useSelector} from "react-redux";
import { handleButton } from "../../store/slices/headerSlice"; 
import Proj from "./Projects.js";
import './projects.css';

function Projects() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.menuBar.filter)
  const buttonId = useSelector(state => state.menuBar.buttonId)

  return (
    <>
      <main>
        <section className="main-section">
          <div className="mainBlock">
            <div className="block-1 container_adaptive">
              <div className="redBigCircle redBigCircle-2">
                <div className="redBigCircle-3 redBigCircle-4"></div>
              </div>
              <div className="blockOfProject">
                <div>
                  <h2 className="project-1 project-2">Проекты</h2>
                  <div className="filterProject">
                    {filter.map((o) => (
                      <button
                        key={o.id}
                        className={`${o.id===buttonId ? `btn-filter-1`: ''} btn-filter-2 txtFilter`}
                        onClick={() => dispatch(handleButton(o))}>
                        {o.txt}
                      </button>
                    ))}
                  </div>
                  <div className="projectList projectList-2">
                    <div className="projectList-block">
                        <div className="allProject">
                            <Proj/>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;
