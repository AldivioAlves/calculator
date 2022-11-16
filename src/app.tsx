import React from 'react'
import * as ReactDOM from 'react-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Calculator} from './front-end/screens/calculator'


function render(){
    return ReactDOM.render(<Calculator/>,document.body)
}

render()