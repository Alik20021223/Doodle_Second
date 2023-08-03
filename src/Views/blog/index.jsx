import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useTranslation } from "react-i18next";
import Forma from '../../Components/Main/Forma/Forma';
import './blog.css'


function Blog() {

    const {t} = useTranslation();
    const blogMainImg = useSelector(state => state.menuBar.blogMainImg)
    const blogPhoneMainImg = useSelector(state => state.menuBar.blogPhoneMainImg)
    const imgMainBlockBlog = useSelector(state => state.menuBar.imgMainBlockBlog)
    const resourceBlockBlog = useSelector(state => state.menuBar.resourceBlockBlog)
    const blocks = useSelector(state => state.menuBar.blocks)


  return (
    <>
        <main>
        <section className='main-infoBlog'>
            <div className='infoBlog-image'>
                <div className='imageInfo-container'>
                    <img className='image' src={blogMainImg} alt="img" />
                </div>
                <img className='image-mobile' src={blogPhoneMainImg} alt="img-phone" />
            </div>
            <div className='infoBlog-content'>
                <h1 className='heading'>{t("Blog")}</h1>
                <p className='lead-txt'>{t("Blog-txt")}</p>
            </div>
        </section>
        <div className='blue-circle'></div>
        <article className='blog-mainBlock'>
            <Link to='/' className='link-mainBlock'>
                <div className='resource-logo' style={{backgroundImage: `url(${resourceBlockBlog})`}}></div>
                <div className='img-wrapper'>
                    <div className='img' style={{backgroundImage: `url(${imgMainBlockBlog})`}}></div>
                </div>
                <div className='content-blockMain'>
                    <p className='tags'>#{t("hotNews")}</p>
                    <h3 className='subheading'>{t('MeetUpMobile')}</h3>
                    <p className='date'>27 апреля 2022</p>
                    <p className='text'>
                        <p>Митап по мобильной разработке</p>
                        <p>Митап по мобильной разработке</p>
                        <p>Митап по мобильной разработке</p>
                    </p>
                </div>
            </Link>
        </article>
        <div className='yellow-circle'></div>
        <section className='news-Doodle'>
            <h2 className='news-header'>{t("newsDoodle")}</h2>
            <div className='BlogList'>
                    {blocks.map((o) => (
                        <>
                            <article className='blockBlog'>
                                <Link to="/" className='content-wrapper'>
                                    <div className='resource-logo' style={{backgroundImage: `url(${resourceBlockBlog})`}}></div>
                                    <div className='img-wrapper'>
                                        <div className='img' style={{backgroundImage: `url(${o.href})`}}></div>
                                    </div>
                                    <div className='content-blockMain'>
                                        <p className='tags'>#{t("hotNews")}</p>
                                        <h3 className='subheading'>{t(o.subheading)}</h3>
                                        <p className='date'>{t(o.date)}</p>
                                        <p className='text'>
                                            <p>{t(o.p1)}</p>
                                        </p>
                                    </div>
                                </Link>
                            </article>
                        </>
                    ))}    
            </div>
        </section>
    </main>
    <Forma/>
    </>
  )
}

export default Blog