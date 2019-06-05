import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import Header from './components/header';

import '../src/css/styles.css'

const App = () =>{
    return (
        <div>
            <Header/>
        </div>
    )
}


ReactDOM.render(<App/>,document.querySelector("#root"))