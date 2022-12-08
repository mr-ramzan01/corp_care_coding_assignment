import React from 'react'
import '../App.css'
import '../styles/Header.css'
import { RecentTransactions } from '../components/Home/RecentTransactions'
import { Transfer } from '../components/Home/Transfer'
import { AccountsReached } from '../components/Home/AccountsReached'
import { Earnings } from '../components/Home/Earnings'
import { Reminder } from '../components/Home/Reminder'
import { Analytics } from '../components/Home/Analytics'

export const Home = () => {
    const data = [
        {
            image: 'https://image.shutterstock.com/image-vector/go-web-icon-vector-illustration-260nw-1710208132.jpg',
            title: 'Overview'
        },
        {
            image: 'https://image.shutterstock.com/image-vector/go-web-icon-vector-illustration-260nw-1710208132.jpg',
            title: 'Products'
        },
        {
            image: 'https://image.shutterstock.com/image-vector/go-web-icon-vector-illustration-260nw-1710208132.jpg',
            title: 'Analytics'
        },
        {
            image: '',
            title: 'Schedule'
        },
        {
            image: '',
            title: 'Payout'
        },
        {
            image: '',
            title: 'Statements'
        },
    ]
  return (<>
  <header className='header'>
    <div className='searchbox'>
        <div className='text'>
            <p>Hello, John</p>
            <img src="https://icons.iconarchive.com/icons/google/noto-emoji-people-bodyparts/512/12050-waving-hand-icon.png" alt="" />
        </div>
        <div className='search'></div>
        <div className='searchdiv'></div>
        <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="" />
        <p className='searchP'>Search</p>
    </div>
    <div className='icons'>
        <img src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Envelope-icon.png" alt="" />
        <img src="https://cdn-icons-png.flaticon.com/512/679/679720.png" alt="" />
        <img id='user' src="https://cdn.iconscout.com/icon/free/png-256/account-269-866236.png" alt="" />
    </div>
  </header>
    <div className='main'>
    <hr className='pageDivider' />
        <div className='sidebar'>
            <div className='pointer_line'></div>
            <div className='divider_line'></div>
            <div className='group1'>
            </div>
            <h1 className='logo'>LOGO</h1>
            <div className='box'>
                <div className='box1'>
                    <div className='box1_6'>
                        <span className="material-symbols-outlined">account_balance_wallet</span>
                        <p id='bold'>Overview</p>
                    </div>
                    <div className='box1_5'>
                        <span className="material-symbols-outlined">inventory_2</span>
                        <p>Products</p>
                    </div>
                    <div className='box1_4'>
                        <span className="material-symbols-outlined">chart_data</span>
                        <p>Analytics</p>
                    </div>
                    <div className='box1_3'>
                        <span className="material-symbols-outlined">calendar_month</span>
                        <p>Schedule</p>
                    </div>
                    <div className='box1_2'>
                        <span className="material-symbols-outlined">monetization_on</span>
                        <p>Payout</p>
                    </div>
                    <div className='box1_1'>
                        <span className="material-symbols-outlined">assignment</span>
                        <p>Statements</p>
                    </div>
                        
                </div>
                <div className='box2'>
                    <div className='box2_4'>
                        <span className="material-symbols-outlined">info</span>
                        <p>Help</p>
                    </div>
                    <div className='box2_3'>
                        <span className="material-symbols-outlined">forum</span>
                        <p>Community</p>
                    </div>
                    <div className='box2_2'>
                        <span className="material-symbols-outlined">settings</span>
                        <p>Settings</p>
                    </div>
                    <div className='box2_1'>
                        <span className="material-symbols-outlined">logout</span>
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </div>
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
