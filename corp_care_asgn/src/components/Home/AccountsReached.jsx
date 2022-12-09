import React from 'react'
import '../../styles/AccountsReached.css'

export const AccountsReached = () => {
  const category = [
    {
      order: '0',
      width: '25px',
      color: '#BCBCBC',
      title: 'DAy'
    },
    {
      order: '1',
      width: '25px',
      color: '#BCBCBC',
      title: 'Week'
    },
    {
      order: '2',
      width: '25px',
      color: '#474747',
      title: 'Month'
    },
    {
      order: '4',
      width: '25px',
      color: '#BCBCBC',
      title: 'Year'
    },
  ]
  return (<>
      <div className='accountsReached'>
      <p>Accounts Reached</p>
      <div className='accountsReached_div'>
          <p>Accounts Reached</p>
          <p>11,756</p>
          <div className='category'>
            {
              category.map((el) => (
                <p style={{color: el.color, width: el.width}} key={el.order}>{el.title}</p>
              ))
            }
          </div>
      </div>
      </div>
    </>
  )
}
