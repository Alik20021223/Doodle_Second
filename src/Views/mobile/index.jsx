import './mobile.css'
import { useSelector } from 'react-redux'
import Forma from '../../Components/Main/Forma/Forma'
import Process from './process'
import Capib from './capabilities'
import OurExpirence from './ourExpirence'
import Faq from './faq'
import Tech from '../technologies/tech'

function Mobile() {
    const imageMobile = useSelector(state => state.menuBar.imageMobile)
    const projectList = useSelector(state => state.menuBar.projectListMobile)
    const faqSection = useSelector(state => state.menuBar.faqSectionMobile)
    const steps_mobile = useSelector(state => state.menuBar.stepsMobile)
    const mobileTech = useSelector(state => state.menuBar.mobile_tech)

  return (
    <>
    <section className='mobile-main'>
        <section className='mobile-section'>
            <div className='images'>
                <div className='image-container'>
                    <img src={imageMobile.imgMob} alt={imageMobile.altMob_1} className='image'/>
                </div>
                <img src={imageMobile.imgMob} alt={imageMobile.altMob_1} className='image-mobile'/>
                {/* <img src={imageMobile.imgMob} alt={imageMobile.altMob_1} className='image-animate'/> */}
                <img src="../img/main-img/mobile-unscreen.gif" alt="gif" className='image-animate' />
            </div>
            <div className='content'>
                <h1 className='heading'>Мобильная разработка</h1>
                <div className='createMobTxt'>
                    <p className='createMobTxt-1'>
                        <p>Создаем мобильные приложения индивидуально для каждого клиента, от разработки концепции и до реализации успешного продукта.</p>
                    </p>
                </div>
            </div>
        </section>
        <div className="mb-35"></div>
        <div className='blue-circle'></div>
        <section>
            <Process array={steps_mobile}/>
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
            <Tech array={mobileTech}/>
        </div>
        <OurExpirence array={projectList}/>
        <Faq array={faqSection}/>
        <div className="mb-35"></div>
        <Capib id={1}/>
        <div className="mb-35"></div>
    </section>
    <Forma/>
    </>
  )
}

export default Mobile