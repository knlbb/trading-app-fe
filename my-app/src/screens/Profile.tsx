import React from 'react'
import Sidebar from '../components/Sidebar'

export default function Profile() {
  return (
    <div className={'grid grid-flow-col auto-cols-min'}>
        <div className=''>
            <Sidebar screenName="profile"/>
        </div>
        <div className='items-center flex'>
            Profile
        </div>
    </div>
  )
}
