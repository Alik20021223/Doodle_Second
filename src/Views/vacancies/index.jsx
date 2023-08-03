import React from 'react'
import './vacancies.css'
import {useDispatch, useSelector } from 'react-redux'
import { handleClick } from '../../store/slices/headerSlice'
import { useResize } from "../../store/width/useWidthSize";


function Vacansies() {
    const vacancions = useSelector(state => state.menuBar.vacancions)
    const animArrow = useSelector(state => state.menuBar.animArrow)
    const dispatch = useDispatch()
    const { width } = useResize();

    const style_1 = {
        transform: 'translate(1000px, 0px)',
        transition: 'transform 0.3s ease'
    };
    
    const style_2 = {
        transform: 'translate(0px, 0px)',
        transition: 'transform 0.3s ease'
    };
    
  return (
    <main>
        <section className="vacanSection">
            <div className='mainVacan'>
                <div className='container_adaptive'>
                    <div className='vacanMainBlock'>
                        <div className="vacanMainBlock-2">
                            <div className='container_adaptive'>
                                <div className='vacanBlock-inner'>
                                    <h1 className='sizeOfPoss vacTypeH1 typeOfVac'>Вакансии</h1>
                                    <p className='sizeOfPro txtVacType'>Doubletapp – команда профессионалов в области разработки, дизайна и машинного обучения.
                                    Каждый день миллионы людей в мире пользуются нашими сервисами и приложениями</p>
                                    <div className='bigCircleVacan'></div> 
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>
            <div className='chooseVacan'>
                <div className='chooseVac-block'>
                    <div className='chooseVac-inner chooseVac-inner-1 chooseVac-inner-2'>
                        <div className='container_adaptive'>
                            <h2 className='h2ChooseVac sizeOfLink'>{width < 757 ? 'Вакансии' : `Выберите Вакансию`}</h2>
                            <div className='VacBlock-inner'>
                                {vacancions.map((o) => 
                                    <div key={o.id} className='vacBlock-1 vacBlock-2'>
                                        <div className='container_adaptive'>
                                            <a onClick={() => dispatch(handleClick(o.id))} tabIndex={0} role='button' className='linkVacBlock' href={o.link}>
                                                <h3 className='h3VacanBlock sizeOfLinkToUs'>{o.name}</h3>
                                                <div style={o.id === animArrow ? style_1 : style_2}>
                                                    <div>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={120} height={122} viewBox="0 0 120 122" fill="none" className="injected-svg svg-arrow" datasrc="/v2/static/icons/decor-right-arrow.svg" xlink="http://www.w3.org/1999/xlink">
                                                                <path d="M120 46.7998V75.0951L0 122V94.8598L89.8174 61.0525L0 27.2453V0L120 46.7998Z" fill="#E30613"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blockOfForm">
                <section className="section-form">
                    <div className="divBlockForm">
                    <h2 className="btnOff">Не нашел подходящую вакансию?</h2>
                    <form className="form-1">
                        <h2 className="goWorkTogether sizeOfLink">Не нашел подходящую вакансию?</h2>
                        <label className="form-label">
                        <span className="btnOff">Напиши немного о себе</span>
                            <textarea
                                typeof="text"
                                name="description"
                                placeholder="Напиши немного о себе"
                                className="areaForm-1 areaForm-2 areaForm-3 areaForm-4 TxtAreaForm"
                            ></textarea>
                        </label>
                        <div className="aboutUrSelf">
                        <div className="urContact">
                            <label className="labelForNaE">
                            <div className="dotBefName-1 TxtAreaForm"></div>
                            <span className="btnOff">Имя</span>
                            <input
                                type="text"
                                className="areaForm-4 areaForm-2 areaForm-3 TxtAreaForm"
                                placeholder="ИМЯ"
                                name="name"
                            />
                            </label>
                            <label className="labelForNaE labelForNaE-1">
                            <div className="dotBefName-1 TxtAreaForm"></div>
                            <span className="btnOff">Почта</span>
                            <input
                                type="text"
                                className="areaForm-4 areaForm-2 areaForm-3 TxtAreaForm"
                                placeholder="ПОЧТА"
                                name="name"
                            />
                            </label>
                        </div>
                        <div className="urContact">
                            <label className="typeOfFormTel areaForm-2">
                            <span className="btnOff">Телефон</span>
                            <input
                                className="TxtAreaForm typeOfTel-1 areaForm-4"
                                placeholder="ТЕЛЕФОН"
                            />
                            </label>
                            <div className="attachFile-block">
                            <div className="attachFile-inner">
                                <input
                                name="fileList"
                                type="file"
                                accept="text/plain,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                className="attachFile-input"
                                />
                                <div className="pin-block">
                                    <span>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.5022 5.72916C22.9934 6.00758 23.1674 6.63038 22.8123 7.06467C22.4759 7.4762 22.0896 7.84761 21.6612 8.17031C20.9603 8.69818 20.1605 9.08538 19.3072 9.30981C18.9552 9.4024 18.5969 9.46654 18.236 9.50199C17.9709 9.52803 17.8251 9.84845 17.9889 10.0548C18.0049 10.075 18.0209 10.0953 18.0369 10.1157C18.8763 11.1895 19.492 12.4151 19.8488 13.7225C20.2057 15.0298 20.2968 16.3934 20.1168 17.7354C19.9816 18.7434 19.6955 19.7244 19.2692 20.647C19.0349 21.1541 18.4017 21.3177 17.9104 21.0393L10.6256 16.9108C10.4783 16.8273 10.2898 16.8768 10.2047 17.0215L6.39684 23.4957C6.1132 23.9779 5.48501 24.1432 4.99374 23.8648C4.50247 23.5863 4.33415 22.9697 4.61778 22.4874L8.42567 16.0132C8.51076 15.8686 8.46026 15.6836 8.31288 15.6L1.50326 11.7408C1.01199 11.4624 0.839697 10.8422 1.16996 10.3895C1.77081 9.56582 2.49321 8.83208 3.31495 8.21312C4.40887 7.38916 5.6574 6.78477 6.98927 6.43445C8.32115 6.08414 9.71026 5.99477 11.0773 6.17144C11.0819 6.17202 11.0864 6.17261 11.0909 6.1732C11.355 6.20768 11.5631 5.9223 11.452 5.68458C11.295 5.3486 11.1667 4.99949 11.0688 4.64076C10.8401 3.80319 10.7818 2.92961 10.8971 2.06991C10.9676 1.54435 11.1021 1.03026 11.297 0.538469C11.5026 0.0194895 12.139 -0.144033 12.6303 0.13439L22.5022 5.72916Z" fill="#E31E30"/>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <span className="attachFile-Txt sizeOfLinkToUs">Прикрепить файл</span>
                            </div>
                            </div>
                        </div>
                        </div>
                        <label className="agreeToPolitic">
                            <input type="checkbox" id="isPrivacy" name="isPrivacy" className="agreeCheckBox" tabIndex="0"></input>
                                <span className="TxtAreaForm posOfAgree">
                                    Подтверждаю, что я ознакомлен и согласен с условиями
                                        <a href="https://doubletapp.ai/privacy" className="confPolitic confPolitic-2">политика конфиденциальности</a>
                                </span>
                        </label>
                        <div className="sendFile">
                            <div className="linkToUs">
                                <button        
                                className="btnLinkToUs-1 btnLinkToUs-2 justForBtn btnLinkToUs-4 sizeOfLinkToUs"
                                >
                                Отправить заявку
                                </button>
                                <div className="redLine-1 redLine-2"></div>
                            </div>
                        </div>
                    </form>
                    </div>
                </section>
            </div>
        </section>
    </main>
  )
}

export default Vacansies