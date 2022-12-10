import React from 'react'
import '../../styles/Transfer.css'

export const Transfer = () => {
  return (<>
    <div className='transfer'></div>
      <p>Recent Transactions</p>
      <div className='transferBox'>
        <div className='transferBox_heading1'>
          <img src="/Images/users.svg" alt="" />
          <p>Transfer to your team</p>
        </div>
        <div className='moneyDiv'>
          <div className='blueButton'></div>
          <p>$<span>450</span></p>
          <div>
            <p>Transfer</p>
          </div>
        </div>
        <div className='transfer_divider'></div>
        <div className='usersIcon'>
          <img style={{order: '0'}} src="/Images/user1.svg" alt="" />
          <img style={{order: '1'}} src="/Images/user2.svg" alt="" />
          <img style={{order: '2'}} src="/Images/user3.svg" alt="" />
          <img style={{order: '3'}} src="/Images/user4.svg" alt="" />
          <img style={{order: '4'}} src="/Images/user5.svg" alt="" />
          <img id='plus' style={{order: '5'}} src="/Images/plus.svg" alt="" />
        </div>
      </div>
    </>
  )
}
