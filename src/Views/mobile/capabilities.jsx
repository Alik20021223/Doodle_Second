import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Capib({id}) {
    const capabilities = useSelector(state => state.menuBar.capabilities)
  return (
    <section className='anotherService'>
            <h2 className='heading'>Другие сервисы</h2>
            <div className='DoList'>
                {capabilities.map((o) => (
                    o.id !== id && <Link to={o.href_2} key={o.id}>
                    <article className="blockTypeDo">
                    <div className="iconDo">
                        <div>
                        <img src={o.block.icon} alt="icon-img" />
                        </div>
                    </div>
                    <h3 className="DoTxt">{o.block.block_txt}</h3>
                    </article>
                </Link>
                ))}
            </div>
        </section>
  )
}

export default Capib