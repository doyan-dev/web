import React from 'react'
import './Target.css'

const Target = () => {
  return (
    <>
    <div className='intro'>
        <p className='t1'>Know Your Target</p>
        <h1 className='t2'>Built For Small Business Owners Like You</h1>

    </div>
    <div className='all-container'>
        <div className='container'>
            <h1 className='con-text'>Freelancers</h1>
            <p className='t4'>Pay your staff (and yourself!) with confidence.</p>
            <img src='https://hellobookeeping.com/wp-content/uploads/2025/04/Target-5.jpg'></img>
        </div>

        <div className='container'>
            <h1 className='con-text'>Solopreneurs</h1>
            <p className='t4'>Get tidy books for tax time—one less thing to worry about.</p>
            <img src='https://hellobookeeping.com/wp-content/uploads/2025/04/Target-2.jpg'></img>
        </div>

        <div className='container'>
            <h1 className='con-text'>Consultants</h1>
            <p className='t4'>Set up recurring invoices and payments for repeat clients.</p>
            <img src='https://hellobookeeping.com/wp-content/uploads/2025/04/Target-3.jpg'></img>
        </div>

        <div className='container'>
            <h1 className='con-text'>Contracters</h1>
            <p className='t4'>Fire off professional invoices and estimates in minutes.</p>
            <img src='https://hellobookeeping.com/wp-content/uploads/2025/04/Target-4.jpg'></img>
        </div>
        

    </div>
    <div className='view-button-container'>
        <button className='view-button'>View More</button>
      </div>
    
    </>
  )
}

export default Target