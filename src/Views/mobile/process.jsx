import React from 'react'

function Process({array}) {
  return (
    <section>
        <h2 className='heading'>Процесс работы</h2>
        <section className='process-steps'>
            {array.map((o) => (
                <div key={o.number} className='step'>
                    <span className='step_number'>{o.number}</span>
                    <span className='step_title'>{o.title}</span>
                    <p className='step_txt'>
                        <p>{o.text}</p>
                    </p>
                </div>
            ))}
        </section>
    </section>
  )
}

export default Process