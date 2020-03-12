import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/cd.concertband/">@cd.concertband</a>
    </h2>
    <h2 className="taCenter">
    Like us{' '}
      <a href="https://facebook.com/combineddistricts">/combineddistricts</a>
    </h2>

    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by Sophie and Eddie
        </span>
      </div>
    </footer>
  </div>
)
