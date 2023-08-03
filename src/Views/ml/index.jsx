
import './ml.css'
import { useSelector } from 'react-redux'
import Forma from '../../Components/Main/Forma/Forma'
import Capib from '../mobile/capabilities'
import OurExpirence from '../mobile/ourExpirence'
import Faq from '../mobile/faq'
import Process from '../mobile/process'
import Tech from '../technologies/tech'


function MachineLearning() {
    const imageMl = useSelector(state => state.menuBar.imageMl)
    const projectList = useSelector(state => state.menuBar.projectListMl)
    const faqSection = useSelector(state => state.menuBar.faqSectionMl)
    const steps_ml = useSelector(state => state.menuBar.stepsMl)
    const MachineLearning = useSelector(state => state.menuBar.ml_tech)
    

  return (
    <>
    <section className='mobile-main'>
        <section className='web-section'>
            <div className='images'>
                <div className='image-container'>
                    <img src={imageMl.imgMob} alt={imageMl.altMob_1} className='image'/>
                </div>
                <img src={imageMl.imgMob} alt={imageMl.altMob_1} className='image-web'/>
                {/* <img src={imageMobile.imgMob} alt={imageMobile.altMob_1} className='image-animate'/> */}
                <video src='../img/main-img/ml.mp4' autoPlay="1" loop="1" playsInline="1"  className='image-animate' >
                </video>
            </div>
            <div className='content'>
                <h1 className='heading'>Машинное обучение</h1>
                <div className='createMobTxt'>
                    <p className='createMobTxt-1'>
                        <p>Создаем продукты на основе искусственного интеллекта и оптимизируем ваш бизнес, находя зависимости в данных.</p>
                    </p>
                </div>
            </div>
        </section>
        <div className="mb-35"></div>
        <div className='blue-circle'></div>
        <section>
            <Process array={steps_ml} />
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
            <Tech array={MachineLearning}/>
        </div>
        <OurExpirence array={projectList}/>
        <Faq array={faqSection}/>
        <div className="mb-35"></div>
        <Capib id={3}/>
        <div className="mb-35"></div>
    </section>
    <Forma/>
    </>
  )
}

export default MachineLearning