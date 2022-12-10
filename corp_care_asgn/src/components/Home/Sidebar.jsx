import React from 'react'
import '../../styles/Sidebar.css'

export const Sidebar = () => {
    const data1 = [
        {
            image:'/Images/overview.svg',
            title: 'Overview',
            top: '0px'
        },
        {
            image:'/Images/products.svg',
            title: 'Products',
            top: '59px'
        },
        {
            image:'/Images/analytics.svg',
            title: 'Analytics',
            top: '118px'
        },
        {
            image:'/Images/schedule.svg',
            title: 'Schedule',
            top: '177px'
        },
        {
            image:'/Images/payout.svg',
            title: 'Payout',
            top: '236px'
        },
        {
            image:'/Images/statements.svg',
            title: 'Statements',
            top: '295px'
        },
    ]
    const data2 = [
        {
            image:'/Images/help.svg',
            title: 'Help',
            top: '436px'
        },
        {
            image:'/Images/community.svg',
            title: 'Community',
            top: '495px'
        },
        {
            image:'/Images/settings.svg',
            title: 'Settings',
            top: '554px'
        },
        {
            image:'/Images/logout.svg',
            title: 'Logout',
            top: '613px'
        }
    ]

  return (
    <div className='sidebar'>
            <div className='pointer_line'></div>
            <div className='divider_line'></div>
            <div className='group1'></div>
            <h1 className='logo'>LOGO</h1>
            <div className='box'>
                <div className='box1'>
                    {
                        data1.map((el) => (
                            <div key={el.title} style={{top: el.top}}>
                                <img src={el.image} alt="" />
                                <p>{el.title}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='box2'>
                    {
                        data2.map((el) => (
                            <div key={el.title} style={{top: el.top}}>
                                <img src={el.image} alt="" />
                                <p>{el.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
  )
}
