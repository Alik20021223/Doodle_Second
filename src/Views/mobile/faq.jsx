import React, { useState } from 'react'
import { useSelector } from 'react-redux'


function Faq({array}) {
    const arrow = useSelector(state => state.menuBar.arrowFaq)
    
    const [arrow_1, setArrow] = useState(0)
    const [arrow_2, setArrow_2] = useState(true)

    const handleArrow = (id) => {
        if (arrow_1 === id && arrow_2) {
            setArrow(null)
            setArrow_2(false)
        } else {
            setArrow(id)
            setArrow_2(true)
        }
        
    }

  return (
    <section className='faq-section'>
            <h2 className='heading'>FAQ</h2>
                {array.map((o) => (
                    <div key={o.id} className='faq' onClick={() => handleArrow(o.id)}>
                        <div className='question-section'>
                            <div className={(arrow_1 === o.id && arrow_2) ? 'bold' : 'question'}>{o.question}</div>
                            <div className={(arrow_1 === o.id && arrow_2) ? 'arrow_rotate' : 'arrow'}>
                                <div>                                
                                    {arrow && <div dangerouslySetInnerHTML={{ __html: arrow }} />}
                                </div>
                            </div>
                        </div>
                        <div className='answer' style={{maxHeight: `${(arrow_1 === o.id && arrow_2) ? '1000px' : '0px'}`}}>
                            <div className='answer-inner'>
                                <p>{o.answer_1}</p>
                                <p>{o.answer_2}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </section>
  )
}

export default Faq