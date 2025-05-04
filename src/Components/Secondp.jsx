import React from 'react'
import './Secondp.css'

const Secondp = () => {
  return (
    <>
    <div className=' firstfeatures'>
        <img className='first' src='https://hellobookeeping.com/wp-content/uploads/2025/04/Home-Mockup2.jpg'></img>
        <div className='fc'>
<h1 className='t1'> AI-Powered Balance Insight</h1>
<p className='t2'>Leverage AI to gain deeper insights into your account balances. AI can identify trends, predict future balances, and provide alerts for unusual activity, helping you make informed financial decisions and proactively manage your cash flow.</p>

        </div>

    </div>
    <div className='secondfeatures'>
        <div className='fc'>
          <h1 className='t3'>
            Maximize Productivity for Every Business Owner
          </h1>
          <p>
            Hello AI empowers businesses with automated financial management,
            real-time analytics, and streamlined processes to boost efficiency
            and profitability.
          </p>
          <div className='button'>
            <button className='primary-button'>Get in Touch</button>
          </div>
        </div>
        <img
          className='second'
          src='https://hellobookeeping.com/wp-content/uploads/2025/04/test.hellobooks.ai_Basic_invoicedashboard.png'
          alt='Invoicing Dashboard'
        />
      </div>
    </>
  )
}

export default Secondp