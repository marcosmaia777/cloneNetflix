import React from 'react';
import './Header.css'

export default () => {
    return(
       <header>
           <div className='header--logo'>
               <a href="/">
                   <img src='https://img.elo7.com.br/product/original/2F57C45/poster-impresso-netflix-logo-basquete.jpg' alt='netflix'/>
               </a>
           </div>
           <div className='header--user'>
               <a href='/'>
                   <img src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='usuário'/>
               </a>
           </div>
       </header>
    );
}