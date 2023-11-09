import * as React from 'react';
import Button from '@mui/material/Button';
import profileImage from '../images/profile.svg'
import walletImage from '../images/wallet.svg'
import dashImage from '../images/dash.svg'
import newsImage from '../images/news.svg'
import stockChartImage from '../images/stockChart.svg'
import moduleImage from '../images/modules.svg'
import aiImage from '../images/ai.svg'


export default function Sidebar() {
  return (
    <div className='h-screen align-center flex items-center p-5'>
        <div className="w-20 rounded-2xl h-3/4 align-center flex items-center bg-black p-1 flex-cols text-center gap-1 grid grid-rows-7 text-white">
            <div className='rounded-2xl'>
                <button className='w-full aspect-square flex justify-center items-center hover:bg-gray-100 hover:bg-opacity-25 rounded-2xl'>
                <img className='h-8 w-8' src={profileImage}/>
                </button>
            </div>
            <div className='rounded-2xl'>
                <button className='w-full aspect-square flex justify-center items-center hover:bg-gray-100 hover:bg-opacity-25  rounded-2xl'>
                    <img className='h-8 w-8' src={walletImage}/>
                </button>
            </div>
            <div className='rounded-2xl'>
                <button className='w-full aspect-square flex justify-center items-center hover:bg-gray-100  hover:bg-opacity-25 rounded-2xl'>
                    <img className='h-8 w-8' src={stockChartImage}/>
                </button>
            </div>
            <div className='rounded-2xl'>
                <button className='w-full aspect-square flex justify-center items-center bg-gray-100  bg-opacity-25 rounded-2xl'>
                    <img className='h-8 w-8' src={dashImage}/>
                </button>
            </div>
            <div className='rounded-2xl'>
                <button className='w-full aspect-square flex justify-center items-center hover:bg-gray-100  hover:bg-opacity-25 rounded-2xl'>
                    <img className='h-8 w-8' src={newsImage}/>
                </button>
            </div>
            <div className='rounded-2xl'>
                <button className='w-full aspect-square flex justify-center items-center hover:bg-gray-100  hover:bg-opacity-25 rounded-2xl'>
                    <img className='h-8 w-8' src={moduleImage}/>
                </button>
            </div>
            <div className='rounded-2xl'>
                <button className='w-full aspect-square flex justify-center items-center hover:bg-gray-100  hover:bg-opacity-25 rounded-2xl'>
                    <img className='h-8 w-8' src={aiImage}/>
                </button>
            </div>
        </div> 
    </div>
  )
}
