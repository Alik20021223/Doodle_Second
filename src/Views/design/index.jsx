import './design.css'
import { useSelector } from 'react-redux'
import Forma from '../../Components/Main/Forma/Forma'
import Capib from '../mobile/capabilities'
import OurExpirence from '../mobile/ourExpirence'
import Faq from '../mobile/faq'
import Process from '../mobile/process'
import Tech from '../technologies/tech'

function Design() {
    const imageWeb = useSelector(state => state.menuBar.imageDesign)
    const projectList = useSelector(state => state.menuBar.projectListDesign)
    const DesignTech = useSelector(state => state.menuBar.design_tech)
    const faqSection = useSelector(state => state.menuBar.faqSectionDesign)
    const steps_design = useSelector(state => state.menuBar.stepsDesign)
    

    

    

  return (
    <>
    <section className='mobile-main'>
        <section className='design-section'>
            <div className='images'>
                <div className='image-container'>
                    <img src={imageWeb.imgMob} alt={imageWeb.altMob_1} className='image'/>
                </div>
                <img src={imageWeb.imgMob} alt={imageWeb.altMob_1} className='image-web'/>
                {/* <img src={imageMobile.imgMob} alt={imageMobile.altMob_1} className='image-animate'/> */}
                <video src='../img/main-img/design.mp4' autoPlay="1" loop="1" playsInline="1"  className='image-animate' >
                </video>
            </div>
            <div className='content'>
                <h1 className='heading'>Дизайн</h1>
                <div className='createMobTxt'>
                    <p className='createMobTxt-1'>
                        <p>Мы проектируем привлекательные и удобные интерфейсы.</p>
                    </p>
                </div>
            <div className='btn-portfolio'>
                <a href="/#" className='btnPortfolio'>Дизайн-портфолио</a>
            </div>
            </div>
        </section>
        <div className="mb-50"></div>
        <div className='blue-circle'></div>
        <section>
            <Process array={steps_design}/>
        </section>
        <div className='yellow-circle'></div>
        <div className="mb-110"></div>
        <section className='textMobile-section'>
            <div className='text-mobile'>
                <p>Не смотря на то, что разработка мобильных приложений сложная задача, мы уверены в том, что пользоваться приложением должно быть просто.</p><br />
                <p>Опыт взаимодействия с вашим приложением должен быть запоминающимся, оно должно удивлять и заставлять вашего клиента обращаться к нему снова и снова.</p><br />
                <p>Мы работаем в своих проектах с самыми передовыми технологиями, такими как: голосовая связь, интернет вещей, искусственный интеллект, виртуальная и дополненная реальность и многое другое. Наша компания создает приложение индивидуально для каждого клиента, мы поможем вам на всех этапах: от разработки концепции и до реализации успешного продукта. Вне зависимости от того на сколько большая ваша организация или отрасль, мы создадим приложение специально под ваши нужды.</p> <br />
                <p>Разработки команды Doubletapp дарят вашим клиентам уникальный опыт взаимодействия и отвечают всем ожиданиям пользователя.</p> <br />
            </div>
        </section>
        <div className="mb-35"></div>
        <div className='mobileTechList'>
            <h2 className='heading'>Используемые технологии</h2>
            <Tech array={DesignTech}/>
        </div>
        <OurExpirence array={projectList}/>
        <Faq array={faqSection}/>
        <div className="mb-35"></div>
        <Capib id={4}/>
        <div className="mb-35"></div>
    </section>
    <Forma/>
    </>
  )
}

export default Design