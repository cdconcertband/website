import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          <h3>Follow us{' '}<a href="https://instagram.com/cd.concertband/">@cd.concertband</a></h3>
          <h3>Like us{' '}<a href="https://facebook.com/combineddistricts">combineddistricts</a></h3>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by Sophie and Eddie
        </span>
      </div>
    </footer>
  </div>
)
