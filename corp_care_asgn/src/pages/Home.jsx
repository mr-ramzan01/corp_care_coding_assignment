import React from 'react'
import '../App.css'
import { RecentTransactions } from '../components/Home/RecentTransactions'
import { Transfer } from '../components/Home/Transfer'
import { AccountsReached } from '../components/Home/AccountsReached'
import { Earnings } from '../components/Home/Earnings'
import { Reminder } from '../components/Home/Reminder'
import { Analytics } from '../components/Home/Analytics'
import { Header } from '../components/Home/Header'
import { Sidebar } from '../components/Home/Sidebar'

export const Home = () => {
  return (<>
    <div className='main'>
        <Sidebar/>
        <Header/>
        <div className='pageDivider'></div>
        <Transfer/>
        <div className='firstChild'>
            <div>
                <Analytics/>
                <Reminder/>
            </div>
            <Earnings/>
        </div>
        <div className='secondChild'>
            <RecentTransactions/>
            <AccountsReached/>
        </div>
    </div>
    </>
  )
}
