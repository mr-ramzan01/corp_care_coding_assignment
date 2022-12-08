import React from 'react'
import '../App.css'
import '../styles/Header.css'
import { RecentTransactions } from '../components/Home/RecentTransactions'
import { Transfer } from '../components/Home/Transfer'

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
    <div className='searchbox'></div>
    <div className='icons'>
        <span class="material-symbols-outlined">mail</span>
        <span class="material-symbols-outlined">all_inbox</span>
        <span class="material-symbols-outlined">account_circle</span>
    </div>
  </header>
    <div className='main'>
        <div className='sidebar'>
            <div className='pointer_line'></div>
            <div className='divider_line'></div>
            <div className='group1'>
            </div>
            <h1 className='logo'>LOGO</h1>
            <div className='box'>
                <div className='box1'>
                    <div className='box1_6'>
                        <span class="material-symbols-outlined">account_balance_wallet</span>
                        <p id='bold'>Overview</p>
                    </div>
                    <div className='box1_5'>
                        <span class="material-symbols-outlined"><span class="material-symbols-outlined">inventory_2</span></span>
                        <p>Products</p>
                    </div>
                    <div className='box1_4'>
                        <span class="material-symbols-outlined">chart_data</span>
                        <p>Analytics</p>
                    </div>
                    <div className='box1_3'>
                        <span class="material-symbols-outlined">calendar_month</span>
                        <p>Schedule</p>
                    </div>
                    <div className='box1_2'>
                        <span class="material-symbols-outlined">monetization_on</span>
                        <p>Payout</p>
                    </div>
                    <div className='box1_1'>
                        <span class="material-symbols-outlined">assignment</span>
                        <p>Statements</p>
                    </div>
                        
                </div>
                <div className='box2'>
                    <div className='box2_4'>
                        <span class="material-symbols-outlined">info</span>
                        <p>Help</p>
                    </div>
                    <div className='box2_3'>
                        <span class="material-symbols-outlined">forum</span>
                        <p>Community</p>
                    </div>
                    <div className='box2_2'>
                        <span class="material-symbols-outlined">settings</span>
                        <p>Settings</p>
                    </div>
                    <div className='box2_1'>
                        <span class="material-symbols-outlined">logout</span>
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </div>
        <RecentTransactions/>
        <Transfer/>
        <div className='firstChild'></div>
    </div>
    </>
  )
}
