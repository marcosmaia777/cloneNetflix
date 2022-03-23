import React from 'react';
import './Header.css'

export default ({black}) => {
    return(
       <header className={black ? 'black' : ''}>
           <div className='header--logo'>
               <a href="/">
                   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/800px-Netflix-new-icon.png' alt='netflix'/>
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