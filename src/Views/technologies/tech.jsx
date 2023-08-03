import React from 'react'
import { useSelector } from 'react-redux'

function Tech({array}) {
    const colorOfBody = useSelector(state => state.menuBar.colorOfBody)
  return (
    <article key={array.id} className='articleTypeTech articleTypeTech-2'>
        {array.TechType.map(({ h3_kind, typeofKind }) => (
        <div key={h3_kind}>
            {h3_kind && <h3>{h3_kind}</h3>}
            <div className='itemList'>
            {typeofKind.map(({ id, src, p }) => (
                <div key={id} className={colorOfBody === 'light-theme' ? 'blockItem' : 'blockItem_1'}>
                    <img src={src} alt={p} />
                    <p>{p}</p>
                </div>
            ))}
            </div>
        </div>
        ))}
    </article> 
  )
}

export default Tech