import React from 'react'
import Sidebar from '../components/Sidebar'

function AI() {
  return (
    <div className={'grid grid-flow-col auto-cols-min'}>
        <div className=''>
            <Sidebar screenName="ai"/>
        </div>
        <div className='items-center flex'>
            AI
        </div>
    </div>
  )
}

export default AI