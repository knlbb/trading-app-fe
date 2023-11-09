import React from 'react'
import Sidebar from '../components/Sidebar'

export default function News() {
  return (
    <div className={'grid grid-flow-col auto-cols-min'}>
        <div className=''>
            <Sidebar screenName="news"/>
        </div>
        <div className='items-center flex'>
            News
        </div>
    </div>
  )
}
