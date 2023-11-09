import * as React from 'react';
import Button from '@mui/material/Button';
import profileImage from '../images/profile.svg'
import walletImage from '../images/wallet.svg'
import dashImage from '../images/dash.svg'
import newsImage from '../images/news.svg'
import stockChartImage from '../images/stockChart.svg'
import moduleImage from '../images/modules.svg'
import aiImage from '../images/ai.svg'

import { Link } from 'react-router-dom';


interface SideBarProps {
    screenName: string
}


export default function Sidebar({screenName}: SideBarProps) {
  return (
    <div className='h-screen align-center flex items-center p-5'>
        <div className="w-20 rounded-2xl h-3/4 align-center flex items-center bg-black p-1 flex-cols text-center gap-1 grid grid-rows-7 text-white">
            <div className='rounded-2xl'>
                <Link to="/profile">
                    <button className={screenName === "profile" ? 'w-full aspect-square flex justify-center items-center bg-gray-100 bg-opacity-25 rounded-2xl' : 'w-full aspect-square flex justify-center items-center hover:bg-gray-100 hover:bg-opacity-25 rounded-2xl'}>
                    <img className='h-8 w-8' src={profileImage}/>
                    </button>
                </Link>
            </div>
            <div className='rounded-2xl'>
                <Link to="/wallet">
                <button className={screenName === "wallet" ? 'w-full aspect-square flex justify-center items-center bg-gray-100 bg-opacity-25 rounded-2xl' : 'w-full aspect-square flex justify-center items-center hover:bg-gray-100 hover:bg-opacity-25 rounded-2xl'}>
                        <img className='h-8 w-8' src={walletImage}/>
                    </button>
                </Link>
            </div>
            <div className='rounded-2xl'>
                <Link to="/stocks">
                <button className={screenName === "stocks" ? 'w-full aspect-square flex justify-center items-center bg-gray-100 bg-opacity-25 rounded-2xl' : 'w-full aspect-square flex justify-center items-center hover:bg-gray-100 hover:bg-opacity-25 rounded-2xl'}>
                        <img className='h-8 w-8' src={stockChartImage}/>
                    </button>
                </Link>
            </div>
            <div className='rounded-2xl'>
            <Link to="/">
            <button className={screenName === "dashboard" ? 'w-full aspect-square flex justify-center items-center bg-gray-100 bg-opacity-25 rounded-2xl' : 'w-full aspect-square flex justify-center items-center hover:bg-gray-100 hover:bg-opacity-25 rounded-2xl'}>
                    <img className='h-8 w-8' src={dashImage}/>
                </button>
            </Link>
            </div>
            <div className='rounded-2xl'>
            <Link to="/news">
            <button className={screenName === "news" ? 'w-full aspect-square flex justify-center items-center bg-gray-100 bg-opacity-25 rounded-2xl' : 'w-full aspect-square flex justify-center items-center hover:bg-gray-100 hover:bg-opacity-25 rounded-2xl'}>
                    <img className='h-8 w-8' src={newsImage}/>
                </button>
            </Link>
            </div>
            <div className='rounded-2xl'>
            <Link to="/modules">
            <button className={screenName === "modules" ? 'w-full aspect-square flex justify-center items-center bg-gray-100 bg-opacity-25 rounded-2xl' : 'w-full aspect-square flex justify-center items-center hover:bg-gray-100 hover:bg-opacity-25 rounded-2xl'}>
                    <img className='h-8 w-8' src={moduleImage}/>
                </button>
            </Link>
            </div>
            <div className='rounded-2xl'>
            <Link to="/ai">
            <button className={screenName === "ai" ? 'w-full aspect-square flex justify-center items-center bg-gray-100 bg-opacity-25 rounded-2xl' : 'w-full aspect-square flex justify-center items-center hover:bg-gray-100 hover:bg-opacity-25 rounded-2xl'}>
                    <img className='h-8 w-8' src={aiImage}/>
                </button>
            </Link>
            </div>
        </div> 
    </div>
  )
}
