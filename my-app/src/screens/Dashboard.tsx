import React from 'react'
import Sidebar from '../components/Sidebar'
import { StockCard } from '../components/StockCard'
import PieChartComponent from '../components/PieChartComponent'
import StockChart from '../components/StockChart'

export default function Dashboard() {
    const temp = true
  return (
    <div className={temp?'grid grid-flow-col auto-cols-min':'grid grid-flow-col auto-cols-min'}>
        <div className=''>
            <Sidebar/>
        </div>
        <div className='items-center flex'>
            <div>

            <div className='grid grid-flow-col auto-cols-min gap-5 pt-5 mb-5'>
                <div className='w-auto aspect-square bg-black bg-opacity-5 rounded-3xl p-5 text-left'>
                    <h1>My Portfolio</h1>
                    <PieChartComponent/>
                </div>

                <div className='w-auto aspect-square bg-black bg-opacity-5 rounded-3xl p-5 text-left'>
                    <h1>My Portfolio</h1>
                    <StockChart/>
                </div>
            </div>
            <div className='bg-black h-auto bg-black bg-opacity-5 text-left p-5 rounded-3xl'>
                <div>
                    Daily Updates
                </div>
                <div className='grid grid-flow-col auto-cols-min mt-5 mx-5 gap-5'>
                    <div className='w-[250px] aspect-square rounded-3xl bg-black text-white p-5'>
                        AAPL
                    </div>
                    <div className='w-[250px] aspect-square rounded-3xl bg-black text-white p-5'>
                        AAPL
                    </div>
                    <div className='w-[250px] aspect-square rounded-3xl bg-black text-white p-5'>
                        AAPL
                    </div>
                    
                </div>
            </div>
            </div>

        </div>
        <div>
            <StockCard
                companyTickerName='GG'
                stockPrice={12}
                postiveStockChange={true}
            />
        </div>
    </div>
  )
}
