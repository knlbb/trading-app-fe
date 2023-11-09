import React from 'react'
import Sidebar from '../components/Sidebar'

function Stocks() {
  return (
    <div className={'grid grid-flow-col auto-cols-min'}>
        <div className=''>
            <Sidebar screenName="stocks"/>
        </div>
        <div className='items-center flex'>
            Stocks
        </div>
    </div>
  )
}

export default Stocks