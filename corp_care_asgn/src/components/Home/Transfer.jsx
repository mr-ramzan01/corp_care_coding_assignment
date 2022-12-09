import React from 'react'
import '../../styles/Transfer.css'

export const Transfer = () => {
  return (<>
    <div className='transfer'></div>
      <p>Recent Transactions</p>
      <div className='transferBox'>
        <div className='transferBox_heading1'>
          <img src="https://www.iconpacks.net/icons/1/free-users-icon-267-thumb.png" alt="" />
          <p>Transfer to your team</p>
        </div>
        <div className='moneyDiv'>
          <div className='blueButton'></div>
          <p>$<span>450</span></p>
          <div>
            <p>Transfer</p>
          </div>
        </div>
        <hr/>
        <div className='usersIcon'>
          <img style={{order: '0'}} src="https://cdn-icons-png.flaticon.com/512/219/219989.png" alt="" />
          <img style={{order: '1'}} src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
          <img style={{order: '2'}} src="https://cdn-icons-png.flaticon.com/512/219/219989.png" alt="" />
          <img style={{order: '3'}} src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
          <img style={{order: '4'}} src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" />
          <img id='plus' style={{order: '5'}} src="https://img.icons8.com/ios-glyphs/512/macos-maximize.png" alt="" />
        </div>
      </div>
    </>
  )
}
