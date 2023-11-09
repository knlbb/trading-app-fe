import React from 'react'
import Sidebar from '../components/Sidebar'
import { StockCard } from '../components/StockCard'

export default function Dashboard() {
    const temp = true
  return (
    <div className={temp?'grid grid-flow-col auto-cols-min':'grid grid-flow-col auto-cols-min'}>
        <div className=''>
            <Sidebar/>
        </div>
        <div>
            2
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
