import React from 'react'
import Sidebar from '../components/Sidebar'

export default function Wallet() {
  return (
    <div className={'grid grid-flow-col auto-cols-min'}>
        <div className=''>
            <Sidebar screenName="wallet"/>
        </div>
        <div className='text-center'>
            <h1 className='text-7xl'>$420.69</h1>
            <h3 className='text-2xl'>$0.69</h3>
            <div className=''>
              <button className='w-1/2 bg-black rounded-3xl text-white'>Deposit</button>
              <button className='w-1/2 border-2 border-black rounded-3xl'>Withdraw</button>
            </div>
            <div className={'grid grid-cols-3'}>
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </div>
        </div>
    </div>
  )
}
