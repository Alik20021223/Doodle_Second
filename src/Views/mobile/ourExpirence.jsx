import React from 'react'
import { Link } from 'react-router-dom'

function OurExpirence({array}) {
  return (
    <section className='ourExpirence'>
            <h2 className='heading'>Наш Опыт</h2>
            <div className='expirence-list'>
                {array.map((o) => (
                    <article key={o.id} className='project-Exp'>
                        <Link className='itemLink' key={o.id} to={o.href}></Link>
                        <div className='img-wrapper'>
                            <div className='img' style={{backgroundImage: `url(${o.img_src})`}}></div>
                        </div>
                                <div className='content'>
                                    <div className='title'>
                                        <h3 className='subheading'>{o.txt}</h3>
                                        <div className='links'>
                                            {o.siteLink && <a href={o.siteLink} className='siteLink'>&nbsp;</a>}
                                            {o.androidLink && <a href={o.androidLink} className='androidLink'>&nbsp;</a>}
                                            {o.appleLink && <a href={o.appleLink} className='appleLink'>&nbsp;</a>}
                                        </div>
                                    </div>
                                    <p>{o.p}</p>
                            </div>
                    </article>
                ))}
            </div>
        </section>
  )
}

export default OurExpirence