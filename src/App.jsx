import { useState } from 'react'
import './App.css'
import Presenting from './Components/Presenting'
import Secondp from './Components/Secondp'
import Target from './Components/Target'
import Lastdiv from './Components/Lastdiv'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
      <div className="nav">
  <img src="https://hellobookeeping.com/wp-content/uploads/2025/04/Hellobooks-logo-1.png" alt="logo" />

  <div className="nav-links">
    <div className="dropdown">
      <span className="menu-label">Features</span>
      <div className="dropdown-content">
        <p>Advanced Reporting</p>
        <p>Categorization</p>
        <p>Chat Feature</p>
        <p>Cleanup</p>
        <p>Cloud Features</p>
        <p>Easy Debugging</p>
        <p>Scalable</p>
        <p>Task Manager</p>
        <p>Taxation and Auditing</p>
      </div>
    </div>

    <div className="dropdown">
      <span className="menu-label">Experiences</span>
      <div className="dropdown-content">
        <p>Voice Chat</p>
        <p>Core Features</p>
      </div>
    </div>

    <div className="dropdown">
      <span className="menu-label">Industries</span>
      <div className="dropdown-content">
        <p>Manufacturing</p>
      </div>
    </div>

    <div className="dropdown">
      <span className="menu-label">Resources</span>
      <div className="dropdown-content">
        <p>About</p>
        <p>Blog</p>
        <p>FAQs</p>
        <p>Security</p>
        <p>Contact</p>
      </div>
    </div>

    <button className="btn-contact">Contact Us</button>
  </div>
</div>

<Presenting/>
<Secondp/>
<Target/>
<Lastdiv/>
<Footer/>


    </>
  )
}

export default App
