import React from 'react'
import { useSelector } from 'react-redux'

function Clients() {
    const clients = useSelector(state => state.menuBar.clients)

  return (
    <section className='clientSec-1 clientSec-2'>
        <div className='container_adaptive posOfClients'>
            <h3 className='sizeOfClients sizeOfLink'>Clients</h3>
            <div className='blockOfClients'>
                {clients.map((o) => (
                    <div key={o.id} className='typeOfBlockClient'>
                        <div>
                            <div>
                                <img src={o.hrefSvg} alt="client"/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Clients