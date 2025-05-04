import React from 'react'
import './presenting.css'

const Presenting = () => {
  return (
    <div className="presenting-container">
      <div className="paragraph">
        <p className="intro">We are presenting</p>
        <h1>Next-Gen Bookkeeping, Powered by AI</h1>
        <p className="description">
          Say goodbye to manual data entry and complex spreadsheets! Our AI-powered bookkeeping software, HelloBooks, automates your accounting tasks, ensures accuracy. Designed for small businesses and professionals, it simplifies financial management with smart insights, real-time reporting, and seamless integration. Let AI handle the numbers—so you can focus on growing your business.
        </p>
      </div>

      <div className="feature-badges">
        <span>✔ Invoicing</span>
        <span>✔ Payments</span>
        <span>✔ Receipts</span>
        <span>✔ Accounting</span>
        <span>✔ Estimates</span>
        <span>✔ Payrolls</span>
      </div>

      <div className="buttons">
        <button className="primary-btn">Learn More ↗</button>
        <button className="secondary-btn">Start Free Trials ↗</button>
      </div>
      <img alt='graph' src='https://hellobookeeping.com/wp-content/uploads/2025/04/dashboard-1.png'></img>
    </div>

  )
}

export default Presenting