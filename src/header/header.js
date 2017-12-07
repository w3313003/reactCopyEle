import React from 'react'
import css from './header.styl'
import axios from 'axios'


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img:''
        }
    }
    componentWillMount(){
        axios
    }
    render(){
        return (
            <div>
                <div className={css.header}>
                    
                </div>
            </div>
        )
    }
}
function Content(props){
    return (

    )
}

export default Header

