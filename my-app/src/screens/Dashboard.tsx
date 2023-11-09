import React from 'react'
import Sidebar from '../components/Sidebar'
import { StockCard } from '../components/StockCard'

export default function Dashboard() {
  return (
    <div>
        <StockCard
            companyTickerName='GG'
            stockPrice={12}
            postiveStockChange={true}
        />
    </div>
  )
}
