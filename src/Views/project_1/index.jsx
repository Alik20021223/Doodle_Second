
import Forma from '../../Components/Main/Forma/Forma'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './project_1.css'
import { useRef, useState } from 'react'
import { useResize } from '../../store/width/useWidthSize'
import Slides from './swiper'


function FirstProject() {
    const project = useSelector(state => state.menuBar.projectDataFirst)
    const arrowProject = useSelector(state => state.menuBar.arrowProject)
    const arrowProject_2 = useSelector(state => state.menuBar.arrowProject_2)
    const projects = useSelector(state => state.menuBar.projects_1)
    const [id, setId] = useState(3);
    const [idIcon, setIdIcon] = useState(null);
    const [hidden, setHidden] = useState(false);
    const {teamSectionRef} = useRef(null);
    const projects_1 = projects.filter((o) => o.id !== 4);
    const {width} = useResize();
    const {Links} = project
    const {ProjectToNumber} = project
    const {ListResult} = project
    const {imgResult} = project
    const {tech} = project
    const {ourTeam} = project
    const {review} = project
    // const [height, setHeight] = useState({height: '534px'});

    
    
    const Style = {
        opacity: '1',
        transition: 'transform 300ms ease-out 0s',
        transform: 'translate(0px, 0px)'
    }
    const imgStyle = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        inset: '0px',
        objectFit: 'contain',
        color: 'transparent',
    }

    


    const handleMouseOver = (event, source) => {
        const {clientX, clientY} = event
        let clipPathValue = null
        if(source === 'h3-element') {
            clipPathValue = `40px at ${clientX-130}px ${clientY-150}px`;
        } else {
            clipPathValue = `40px at ${clientX-100}px ${clientY-100}px`;
        }
        

        document.getElementById(source).style.clipPath = `circle(${clipPathValue})`;
    };

    const handleMouseLeave = (event, source) => {
        const {clientX, clientY} = event
        const clipPathValue = `0px at ${clientX}px ${clientY}px`;

        document.getElementById(source).style.clipPath = `circle(${clipPathValue})`;
    };

    const handleHidden = () => {
    if (hidden) {
        teamSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setHidden((prevHidden) => !prevHidden)
    }

  return (
    <>
        <main>
            <section className='Project1Section'>
                <h1 className='btnOff'>Проект</h1>
                <div className='firstProject'>
                    <div className='container_adaptive'>
                        <div className='mainProject'>
                            <div className='AllProjectLink' style={Style}>
                                <Link to={'/projects'}>Проекты/</Link>
                            </div>
                            <h1 className='nameOfProject sizeOfPoss' style={Style}>{project.nameProject}</h1>
                            <p className='discribe TxtAreaForm' style={Style}>{project.describtion}</p>
                            <div style={Style}>
                                <div className='listOfLink'>
                                    {Links.map((o) => (
                                        <a key={o.id} className='linkToProject confPolitic-2' href={o.href}>
                                            <div className='icon'>
                                                <div>
                                                    <object data={o.svg} type="image/svg+xml" aria-labelledby="alternative-text"></object>
                                                </div>
                                            </div>    
                                        {o.txt}</a>
                                    ))}
                                </div>
                            </div>
                            <div className='imgBlockProject' style={Style}>
                            <div dangerouslySetInnerHTML={{ __html: arrowProject }} className='svgElement'></div>
                                <div className='photoBlock photoBlock-2' style={Style}>
                                    <div className='img-1 img-1-2'>
                                        <img style={imgStyle} src={project.img1} alt="" />
                                    </div>
                                    <div className='img-2 img-1-2'>
                                        <img style={imgStyle} src={project.img2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className='projectToNumber-section'>
                            <div className='projectToNumber-block projectToNumber-block-2'>
                                <div className='projectToNumber projectToNumber-2'>
                                    <div className='container_adaptive'>
                                        <div className='projectToNumber-main'>
                                            <h2 className='sizeOfLink projectToNumber-h2'>проект в цифрах</h2>
                                            <div className='projectToNumber-inner'>
                                                <div className='projectToNumber-inner2'>
                                                    {ProjectToNumber.map((o) => (
                                                        <div key={o.id} className={`blockProjectNumber-${o.class} blockProjectNumber`} style={Style}>
                                                            <div className='number-inner'>
                                                                <h4 className='number-h4'>
                                                                    <span className='sizeOfLink h4-number'>
                                                                        <span className='sizeOfLink h4-number'>{o.num}</span>
                                                                    </span>
                                                                    <span className='TxtAreaForm h4-number'>{o.txt}</span>
                                                                </h4>
                                                            </div>
                                                            {((o.id === 2) && (width < 1279)) && <span className='id-3Number'>
                                                                    <div className='id-3NumberDiv'>
                                                                        <div>
                                                                            <object data="../img/main-img/line.svg" type="image/svg+xml" aria-labelledby="alternative-text"></object>
                                                                        </div>
                                                                    </div>
                                                            </span>}
                                                            {((o.id === 3) && (width > 1279)) && <span className='id-3Number'>
                                                                    <div className='id-3NumberDiv'>
                                                                        <div>
                                                                            <object data="../img/main-img/line.svg" type="image/svg+xml" aria-labelledby="alternative-text"></object>
                                                                        </div>
                                                                    </div>
                                                            </span>}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className='tasks-div'>
                    <div className='clientSec-2 tasks-block'>
                        <div className='allTasks'>
                            <div>
                                <div className='tasksTextSection'>
                                    <div className='clientSec-2'>
                                        <div className='tasksTextSection-block chooseVac-inner-1'>
                                            <div className='container_adaptive'>
                                                <div className='tasks tasks-2 tasks-3'>
                                                    <div className='tasksBlock' onMouseMove={(e) => handleMouseOver(e, 'h3-element')} onMouseLeave={(e) => handleMouseLeave(e, 'h3-element')}>
                                                        <h3 className='sizeOfLink h3-task'>Задача</h3>
                                                        <h3 className='h3-task-1 h3-task-2'>
                                                            <span className='sizeOfLink spanTxtH3 spanTxtH3-1'>Задача</span>
                                                        </h3>
                                                        <h3 id='h3-element' className='h3-task-a h3-task-1'>
                                                            <span className='sizeOfLink spanTxtH3 spanTxtH3-a'>Задача</span>
                                                        </h3>
                                                    </div>
                                                    <div className='tasksTxt tasksTxt-1'>
                                                        <div className='tasksTxt-1'>
                                                            <p>{project.txtTasks}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='imgTask'>
                                    <img src={project.imgTask} alt="" className='img'/>
                                </div>
                            </div>
                            <div>
                                <div className='tasksTextSection'>
                                    <div className='clientSec-2'>
                                        <div className='tasksTextSection-block chooseVac-inner-2'>
                                            <div className='container_adaptive'>
                                                <div className='tasks tasks-2 tasks-3'>
                                                    <div className='tasksBlock' onMouseMove={(e) => handleMouseOver(e, 'h3-element-2')} onMouseLeave={(e) => handleMouseLeave(e, 'h3-element-2')}>
                                                        <h3 className='sizeOfLink h3-task'>Результат</h3>
                                                        <h3 className='h3-task-1 h3-task-2'>
                                                            <span className='sizeOfLink spanTxtH3 spanTxtH3-1'>Результат</span>
                                                        </h3>
                                                        <h3 id='h3-element-2' className='h3-task-a h3-task-1'>
                                                            <span className='sizeOfLink spanTxtH3 spanTxtH3-a'>Результат</span>
                                                        </h3>
                                                    </div>
                                                    <div className='tasksTxt tasksTxt-1'>
                                                        <div className='blockTxtSpan'>
                                                            <p>{project.txtTasksResult}</p>
                                                            <ul>
                                                                {ListResult.map((o) => (
                                                                    <li key={o.id}>
                                                                        <strong>{o.strong}</strong>
                                                                        <br />
                                                                        {o.txt}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='imgResultBlock'>
                                    <div className='imgResult-Block clientSec-2'>
                                        <div className='container_adaptive'>
                                            <div className='img-inner img-inner-1'>
                                                {/* {width > 1279 && imgResult.map((o) => (
                                                    <div key={o.id} onClick={() => setId(o.id)} className={`imgBlock-1 imgBlock-2 ${o.id === id ? 'imgBlock-3' : ''}`} role='button'>
                                                        <img src={o.img} alt="screen" className='imgProject'/>
                                                    </div>
                                                ))} */}
                                                <Slides/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='techForProjects chooseVac-inner-1'>
                                {tech.map((techItem) => (
                                    <div key={techItem.id} className='container_adaptive'>
                                        <div>
                                            <h2 className='sizeOfLink h2Type'>{techItem.h2}</h2>
                                            <div className='typeOfLang'>
                                                {techItem.lang.map((o) => (
                                                    <div key={o.id} className='langProj' onMouseOver={() => setIdIcon(o.cd)} onMouseOut={() => setIdIcon(null)}>
                                                        <div className='imgTechIconBlock'>
                                                            <div className='BlockGridProj'>
                                                                <div className={`${idIcon === o.cd ? `imgOpacity1` : ``} imgOpacity0 imgOpacity`}>
                                                                    <img src={o.img_1} alt="iconLang" className='sphere-video'/>
                                                                </div>
                                                                <div className={`${idIcon === o.cd ? `imgOpacity0` : ``} imgOpacity`}>
                                                                    <img src={o.img_2} alt="iconLang" className='sphere-video'/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3 className='h3Type'>{o.h3}</h3>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                </section>
                <div className='imgAfterTech'>
                    <img src={project.imgAfterTech} alt="" className='img'/>
                </div>
                <section className='ourTeamSection' ref={teamSectionRef}>
                    <div className='chooseVac-inner-1 chooseVac-inner-2 OurTeamBlock'>
                        <div className='container_adaptive'>
                            <h2 className='sizeOfLink h2TypeTeam'>Наша супер Команда</h2>
                            <div className='blockTeam'>
                                <div className='heightBlockTeam' style={hidden ? { height: '786px' } : { height: '534px' }}>
                                    <div className='listBlockTeam'>
                                        {ourTeam.map((o) => (
                                            <span key={o.id} className='blockPersonTeam'>
                                                <span className='imgPerson'>
                                                    <img src={o.img1} alt='personImg' className='ImgPersonTeam'/>
                                                </span>
                                                <span className='aboutPerson'>
                                                    <span className='namePerson sizeOfLinkToUs'>{o.name}</span>
                                                    <span className='jobPerson TxtAreaForm'>{o.job}</span>
                                                </span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='AllTeamButton'>
                                <div className="linkToUs">
                                    <button
                                        className="btnLinkToUs-1 btnLinkToUs-2 justForBtn btnLinkToUs-4 sizeOfLinkToUs"
                                        data-for=":r0:"
                                        data-tip="button"
                                        onClick={handleHidden}
                                        href='#ourTeamSection'
                                    >
                                        {hidden ? 'Скрыть' : 'Вся команда'}
                                    </button>
                                    <div className="redLine-1 redLine-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='reviewSection'>
                    <div className='reviewBlock container_adaptive'>
                        <h2 className='btnOff'>Отзыв</h2>
                        <div>
                            <span className='reviewHeader'>Отзыв</span>
                        </div>
                        <div className='blockReview'>
                            <div className='blockReview'>
                                <div className='blockReview-1'>
                                    <div className='blockIconFace'>
                                        <div className='FaceImg'>
                                            <img src={review.img} alt="" className='img'/>
                                        </div>
                                        <div className='aboutFace'>
                                            <span className='displayBlock sizeOfLinkToUs'>{review.name}</span>
                                            <span className='displayBlock TxtAreaForm'>{review.profeccion}</span>
                                        </div>
                                    </div>
                                    <div className='reviewTxt tasksTxt-1'>{review.reviewTxt}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="project-block">
                    <div className="container_adaptive">
                        <h2 className="h2-project sizeOfLink">Похожие проекты</h2>
                        <div className="projects-block">
                            <div className="allProjects-block">
                                {projects_1.map((o) => (
                                    <div key={o.class} className={`blockProj-${o.class} posOfProject`} role="button" tabIndex={0}>
                                        <div className="brProj">
                                            <Link
                                            to={o.href}
                                            tabIndex={-1}
                                            className="linkForProject-1 linkForProject-2"
                                            >
                                            {o.id !== 5 ? (<>
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
                                            </div></>) : (<div className='LinkToAllProject'>
                                                <span className='allProjectSpanLink-2 allProjectSpanLink-3'>{o.project_p}</span>
                                                <span className='allProjectSpanLink'>{o.project_h3}</span>
                                                <div className='blockArrow_2'>
                                                    <div dangerouslySetInnerHTML={{ __html: arrowProject_2 }} className='svgElement'></div>
                                                </div>
                                            </div>)}
                                            
                                            </Link>
                                        </div>
                                    </div>
                                )                        
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Forma/>
    </>
  )
}

export default FirstProject