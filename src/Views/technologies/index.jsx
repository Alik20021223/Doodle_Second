import React from 'react'
import { useSelector } from 'react-redux';
import './technologies.css'


function Technologies() {
    const imageComp = useSelector(state => state.menuBar.imageComp)
    const imageMobile = useSelector(state => state.menuBar.imageMobile)
    const technologies = useSelector(state => state.menuBar.technologies)
    const colorOfBody = useSelector(state => state.menuBar.colorOfBody)

  return (
    <>
        <section className='section-tech'>
            <section className='tech-section tech-section-2'>
                <div className='imagesTechBlock'>
                    <div className='image-container'>
                        <img src={imageComp.imgComp} alt={imageComp.altComp} className='image'/>
                    </div>
                    <img src={imageMobile.imgMobile_1} alt={imageMobile.altMob_1} className='image-mobile'/>
                    
                </div>
                <div className='contentSection'>
                    <h1 className='headingTech'>Технологии</h1>
                    <p className="leadText">Современные технологии — залог успешного IT-продукта.</p>
                    <p className="leadText">Мы внимательно следим за трендами в мире разработки и используем в работе только лучшие технологии.</p>
                </div>
            </section>
            <div className="mb-35"></div>
            <div className="technologyList">
                {technologies.map(({ id, h2, TechType }) => (
                    <article key={id} className='articleTypeTech articleTypeTech-2'>
                        {h2 && <h2>{h2}</h2>}
                        {TechType.map(({ h3_kind, typeofKind }) => (
                        <div key={h3_kind}>
                            {h3_kind && <h3>{h3_kind}</h3>}
                            <div className='itemList'>
                            {typeofKind.map(({ id, src, p }) => (
                                <div key={id} className={colorOfBody === 'light-theme' ? 'blockItem' : 'blockItem_1'}>
                                    <img src={src} alt={p} />
                                    <p>{p}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        ))}
                    </article> 
                ))}
            </div>
            <div className="mb-80"></div>
        </section>
    </>
  )
}

export default Technologies