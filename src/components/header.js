import React,{Component} from 'react';

import './../css/styles.css';
// const getYear = ()=>{
//     const newDate = new Date();
//     return newDate.getFullYear();
// }



class Header extends Component {
    render(){
    return(
        <header >
         <div className='logo'> Logo </div>
         <input type='text'/>
         </header>
        )
    }
}
export default Header