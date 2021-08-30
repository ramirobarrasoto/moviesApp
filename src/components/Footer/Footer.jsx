import React from "react";



import "./Footer.css";

export default function Footer() {
  return (
    <div className='Footer'>
      
      <nav>
        <ul className='list'>
          <li className='list-item'>
            <a
              href='https://github.com/ramirobarrasoto'
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
              <i class='fab fa-github-square'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/ramiro-barra-soto/'
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
            <i class='fab fa-linkedin'></i>
            </a>
            <a
              href='https://portfolio-ramiro-barra.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
            <i class="fas fa-address-card"></i>
            </a>
            
          </li>
        </ul>
      </nav>
    </div>
  );
}
