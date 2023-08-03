import './qa.css'
import { useSelector } from 'react-redux'
import Forma from '../../Components/Main/Forma/Forma'
import Capib from '../mobile/capabilities'
import Faq from '../mobile/faq'


function Audit() {
    const imageQa = useSelector(state => state.menuBar.imageQa)
    const techList = useSelector(state => state.menuBar.techListQa)
    const tryList = useSelector(state => state.menuBar.tryListQa)
    const faqSection = useSelector(state => state.menuBar.faqSectionMl)

  return (
    <>
    <section className='mobile-main'>
        <section className='web-section'>
            <div className='images'>
                <div className='image-container'>
                    <img src={imageQa.imgMob} alt={imageQa.altMob_1} className='image'/>
                </div>
                <img src={imageQa.imgMob} alt={imageQa.altMob_1} className='image-web'/>
                {/* <img src={imageMobile.imgMob} alt={imageMobile.altMob_1} className='image-animate'/> */}
                <video src='../img/main-img/audit.mp4' autoPlay="1" loop="1" playsInline="1"  className='image-animateQa' >
                </video>
            </div>
            <div className='content'>
                <h1 className='heading'>Аудит</h1>
                <div className='createMobTxt'>
                    <p className='createMobTxt-1'>
                        <p>Комплексное исследование продукта: от дизайна до кода.</p>
                    </p>
                </div>
            </div>
        </section>
        <div className="mb-35"></div>
        <div className='blue-circle'></div>
        <h2 className="h2-heading">Зачем он вам нужен?</h2>
        <section className='textMobile-section'>
            <div className='text-mobile'>
                <ul>
                    <li>Вы только создали сайт/приложение и хотите сразу убедиться, что продукт сделан качественно и выполняет те задачи, которые на него возложены.</li>
                    <li>Вы только создали сайт/приложение и хотите сразу убедиться, что продукт сделан качественно и выполняет те задачи, которые на него возложены.</li>
                    <li>Вы только создали сайт/приложение и хотите сразу убедиться, что продукт сделан качественно и выполняет те задачи, которые на него возложены.</li>
                    <li>Вы только создали сайт/приложение и хотите сразу убедиться, что продукт сделан качественно и выполняет те задачи, которые на него возложены.</li>
                    <li>Вы только создали сайт/приложение и хотите сразу убедиться, что продукт сделан качественно и выполняет те задачи, которые на него возложены.</li>
                </ul>
            </div>
        </section>
        <div className='yellow-circle'></div>
        <section className='comparisons'>
            <section className='tech'>
                <h3>Технический</h3>
                <p>Оценивает:</p>
                <div className='list'>
                    {techList.map((o) => (
                        <li key={o.id} className='list-item'>{o.p}</li>
                    ))}
                </div>
            </section>
            <section className='tech'>
                <h3>Юзабилити</h3>
                <p>Оценивает:</p>
                <div className='list'>
                    {tryList.map((o) => (
                        <li key={o.id} className='list-item'>{o.p}</li>
                    ))}
                </div>
            </section>
        </section>
        <div className="mb-110"></div>
        <Faq array={faqSection}/>
        <div className="mb-35"></div>
        <Capib id={5}/>
        <div className="mb-35"></div>
    </section>
    <Forma/>
    </>
  )
}

export default Audit