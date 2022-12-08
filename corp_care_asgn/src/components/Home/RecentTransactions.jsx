import React from 'react'
import '../../styles/RecentTransaction.css'

export const RecentTransactions = () => {
  return (
    <div className='rt'>
      <div className='rtBox'>
        <div>
          {
            [0,1,2,3].map((el, i) => (
              <div className='transactions' >
                <div className='transactions_div1'>
                  <img src="https://cdn.dribbble.com/users/2489067/screenshots/17082855/media/6af73ac04bb9f03fd3c2e0f59e0f9b65.png?compress=1&resize=400x300" alt="" />
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
      <div className='rtText'>
        <p>Recent Transactions</p>
      </div>
    </div>
  )
}
