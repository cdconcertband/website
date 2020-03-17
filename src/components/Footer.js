import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          <h3><a href="https://instagram.com/cd.concertband/">Follow us on Instagram @cd.concertband</a></h3>
          <h3><a href="https://facebook.com/combineddistricts">Like us on Facebook /combineddistricts</a></h3>
          <p>&nbsp;</p>
          © Copyright {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  </div>
)
