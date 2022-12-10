import React from 'react'
import '../../styles/RecentTransaction.css'

export const RecentTransactions = () => {
  return (
    <div className='recentTransaction'>
      <div className='recentTransaction_Box'>
        <div>
          {
            [0,1,2,3].map((el) => (
              <div className='transactions' key={el} >
                <div className='transactions_div1'>
                  <img src="/Images/transactions.svg" alt="" />
                </div>
                <div className='transactions_div2'>
                  <div>
                    <p>12 Nov 2021 4:45AM</p>
                    <p>Jiko Mobile App</p>
                  </div>
                  <p>$15</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='recentTransaction_Text'>
        <p>Recent Transactions</p>
      </div>
    </div>
  )
}
