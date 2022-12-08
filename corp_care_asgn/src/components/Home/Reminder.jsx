import React from 'react'
import '../../styles/Reminder.css'

export const Reminder = () => {
  return (<>
    <div className='reminder'></div>
    <p>Reminder</p>
    <div className='reminder_div'>
        <img src="https://img.icons8.com/color/512/figma.png" alt="" />
        <p>Will be published Nov 25, 2022</p>
        <p>Agency Design Kit</p>
        <div className='setAsReminder'></div>
        <p>Set as Reminder</p>
    </div>
    </>
  )
}
