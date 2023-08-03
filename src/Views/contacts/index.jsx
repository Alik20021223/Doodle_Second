import React from 'react'
import { useSelector } from 'react-redux'
import './contacts.css'
import Forma from '../../Components/Main/Forma/Forma';

function Contacts() {

    const adress = useSelector(state => state.menuBar.adress);
    const icons = useSelector(state => state.menuBar.icons);

  return (
    <div className='contacts'>
        <div className='contacts-main'>
            <div className='contacts-inner'>
                <div className="block-contact block-contact-1">
                    <div className='blockInner-1'>
                        <span className='sizeOfLink mail-1 mail-2'>Почта:</span>
                        <a href="mailto:alik20021223@mail.ru" className='linkMail-1 confPolitic-2'>
                            alik20021223@mail.ru
                        </a>
                    </div>
                </div>
                <div className="block-contact block-contact-2">
                    <div className='blockInner-2'>
                        <span className='ourAdresstxt sizeOfLink'>Наш адрес:</span>
                        <div className='adressInner'>
                            {adress.map((o) => (
                                <div className='adressBlock'>
                                    <div className='logoCity'>
                                        <div>
                                            {o.logoCity && <div dangerouslySetInnerHTML={{ __html: o.logoCity }}/>}
                                        </div>
                                    </div>
                                    <div>
                                        <span className='adress-1 sizeOfLinkToUs'>{o.city}</span>
                                        <span className='adress-2 TxtAreaForm'>{o.adressCity}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="block-contact block-contact-3">
                    <div className='inner-3'>
                    {icons.map((o) => (
                        <a key={o.id} href={o.href} className={`iconContact-${o.p} iconContact-a iconContact-b iconContact-c`}>
                        <span className="btnOff">{o.spanTxt}</span>
                        <div>
                            <div>
                                <img src={o.hrefRedImg} alt={o.alt} />
                            </div>
                        </div>
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </div>
        <Forma/>
    </div>
    
  )
}

export default Contacts